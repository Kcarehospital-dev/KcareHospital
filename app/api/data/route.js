// app/api/data/route.js
// Returns merged site data: KV overrides on top of defaults
import { DEFAULT_DATA } from "../../../lib/data"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    // Only attempt KV if the env var is present (i.e. on Vercel with KV connected)
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      return Response.json({})
    }

    const { kv } = await import("@vercel/kv")
    const stored = await kv.get("siteData")
    return Response.json(stored || {})
  } catch {
    return Response.json({})
  }
}
