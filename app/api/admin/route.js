// app/api/admin/route.js
import { DEFAULT_DATA } from "../../../lib/data"

export const dynamic = "force-dynamic"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "kcare2024"

// GET - load current data for admin panel
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const pwd = searchParams.get("pwd")
  if (pwd !== ADMIN_PASSWORD) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    if (!process.env.KV_REST_API_URL) {
      return Response.json({ data: DEFAULT_DATA, source: "defaults" })
    }
    const { kv } = await import("@vercel/kv")
    const stored = await kv.get("siteData")

    // Deep merge stored over defaults so admin always sees full data
    const merged = deepMerge(DEFAULT_DATA, stored || {})
    return Response.json({ data: merged, source: stored ? "kv" : "defaults" })
  } catch (e) {
    return Response.json({ data: DEFAULT_DATA, source: "defaults" })
  }
}

// POST - save data to KV, then trigger revalidation
export async function POST(request) {
  try {
    const body = await request.json()
    const { password, section, data } = body

    if (password !== ADMIN_PASSWORD) {
      return Response.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (!process.env.KV_REST_API_URL) {
      return Response.json({ error: "KV not configured. Add Vercel KV to your project." }, { status: 503 })
    }

    const { kv } = await import("@vercel/kv")

    // Load existing, patch the section, save back
    const existing = (await kv.get("siteData")) || {}
    existing[section] = data
    await kv.set("siteData", existing)

    // Revalidate the Next.js cache tag
    const { revalidateTag } = await import("next/cache")
    revalidateTag("site-data")

    return Response.json({ success: true })
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 })
  }
}

function deepMerge(defaults, overrides) {
  if (!overrides) return defaults
  const result = { ...defaults }
  for (const key of Object.keys(overrides)) {
    if (overrides[key] !== null && overrides[key] !== undefined) {
      result[key] = overrides[key]
    }
  }
  return result
}
