"use client"

import { useState, useEffect, useCallback } from "react"

const SECTIONS = ["hospital", "stats", "about", "departments", "services", "doctors", "testimonials", "awards", "partners", "slides"]

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState("")
  const [data, setData] = useState(null)
  const [activeSection, setActiveSection] = useState("hospital")
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState("")
  const [loading, setLoading] = useState(false)

  const loadData = useCallback(async (pwd) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin?pwd=${encodeURIComponent(pwd)}`)
      if (!res.ok) { setAuthError("Wrong password"); return }
      const json = await res.json()
      setData(json.data)
      setAuthed(true)
    } catch {
      setAuthError("Connection error")
    } finally {
      setLoading(false)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    setAuthError("")
    loadData(password)
  }

  const save = async (section, sectionData) => {
    setSaving(true)
    setSaveMsg("")
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, section, data: sectionData }),
      })
      const json = await res.json()
      if (json.success) {
        setSaveMsg("✅ Saved! Site will update in ~60 seconds.")
      } else {
        setSaveMsg("❌ Error: " + (json.error || "Unknown error"))
      }
    } catch {
      setSaveMsg("❌ Network error")
    } finally {
      setSaving(false)
      setTimeout(() => setSaveMsg(""), 5000)
    }
  }

  const updateData = (section, newVal) => {
    setData(prev => ({ ...prev, [section]: newVal }))
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0D5094] to-[#1a6bb8] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#0D5094] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">KCare Admin Panel</h1>
            <p className="text-gray-500 mt-1">Enter your admin password to continue</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Admin Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D5094]"
              autoFocus
            />
            {authError && <p className="text-red-500 text-sm mb-3">{authError}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0D5094] text-white py-3 rounded-lg font-medium hover:bg-[#1a6bb8] transition-colors disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (!data) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-56 bg-[#0D5094] text-white flex flex-col fixed h-full z-10">
        <div className="p-5 border-b border-white/20">
          <h1 className="font-bold text-lg">KCare Admin</h1>
          <p className="text-xs text-blue-200 mt-0.5">Website Manager</p>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {SECTIONS.map(s => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium capitalize transition-colors ${activeSection === s ? "bg-white text-[#0D5094]" : "text-blue-100 hover:bg-white/10"}`}
            >
              {sectionLabel(s)}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/20">
          <button
            onClick={() => { setAuthed(false); setData(null); setPassword("") }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-blue-200 hover:bg-white/10"
          >
            🔒 Logout
          </button>
          <a href="/" target="_blank" className="block px-3 py-2 rounded-lg text-sm text-blue-200 hover:bg-white/10">
            🌐 View Site
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-56 flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 capitalize">{sectionLabel(activeSection)}</h2>
            {saveMsg && (
              <div className={`px-4 py-2 rounded-lg text-sm font-medium ${saveMsg.startsWith("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {saveMsg}
              </div>
            )}
          </div>

          {activeSection === "hospital" && <HospitalEditor data={data.hospital} onChange={v => updateData("hospital", v)} onSave={() => save("hospital", data.hospital)} saving={saving} />}
          {activeSection === "stats" && <StatsEditor data={data.stats} onChange={v => updateData("stats", v)} onSave={() => save("stats", data.stats)} saving={saving} />}
          {activeSection === "about" && <AboutEditor data={data.about} onChange={v => updateData("about", v)} onSave={() => save("about", data.about)} saving={saving} />}
          {activeSection === "departments" && <ListEditor title="Department" data={data.departments} onChange={v => updateData("departments", v)} onSave={() => save("departments", data.departments)} saving={saving} fields={deptFields} newItem={newDept} />}
          {activeSection === "services" && <ListEditor title="Service" data={data.services} onChange={v => updateData("services", v)} onSave={() => save("services", data.services)} saving={saving} fields={serviceFields} newItem={newService} />}
          {activeSection === "doctors" && <DoctorsEditor data={data.doctors} onChange={v => updateData("doctors", v)} onSave={() => save("doctors", data.doctors)} saving={saving} />}
          {activeSection === "testimonials" && <TestimonialsEditor data={data.testimonials} onChange={v => updateData("testimonials", v)} onSave={() => save("testimonials", data.testimonials)} saving={saving} />}
          {activeSection === "awards" && <ListEditor title="Award" data={data.awards} onChange={v => updateData("awards", v)} onSave={() => save("awards", data.awards)} saving={saving} fields={awardFields} newItem={newAward} />}
          {activeSection === "partners" && <ListEditor title="Partner" data={data.partners} onChange={v => updateData("partners", v)} onSave={() => save("partners", data.partners)} saving={saving} fields={partnerFields} newItem={newPartner} />}
          {activeSection === "slides" && <SlidesEditor data={data.slides} onChange={v => updateData("slides", v)} onSave={() => save("slides", data.slides)} saving={saving} />}
        </div>
      </div>
    </div>
  )
}

// ─── Reusable components ───────────────────────────────────

function SaveBar({ onSave, saving }) {
  return (
    <div className="mt-6 flex justify-end">
      <button onClick={onSave} disabled={saving} className="bg-[#0D5094] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#1a6bb8] transition-colors disabled:opacity-50 flex items-center gap-2">
        {saving ? <><Spinner /> Saving...</> : "💾 Save Changes"}
      </button>
    </div>
  )
}

function Card({ children }) {
  return <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">{children}</div>
}

function Field({ label, value, onChange, type = "text", rows, hint }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
      {rows ? (
        <textarea value={value || ""} onChange={e => onChange(e.target.value)} rows={rows}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D5094]" />
      ) : (
        <input type={type} value={value || ""} onChange={e => onChange(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D5094]" />
      )}
    </div>
  )
}

function Spinner() {
  return <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
}

function sectionLabel(s) {
  const labels = { hospital: "🏥 Hospital Info", stats: "📊 Stats", about: "ℹ️ About Us", departments: "🏛 Departments", services: "⚕️ Services", doctors: "👨‍⚕️ Doctors", testimonials: "💬 Testimonials", awards: "🏆 Awards", partners: "🤝 Partners", slides: "🖼 Hero Slides" }
  return labels[s] || s
}

// ─── Section editors ───────────────────────────────────────

function HospitalEditor({ data, onChange, onSave, saving }) {
  const upd = (k, v) => onChange({ ...data, [k]: v })
  return (
    <>
      <Card>
        <h3 className="font-semibold text-gray-800 mb-4">Basic Information</h3>
        <div className="grid grid-cols-2 gap-x-4">
          <Field label="Hospital Name" value={data.name} onChange={v => upd("name", v)} />
          <Field label="Tagline / Slogan" value={data.tagline} onChange={v => upd("tagline", v)} />
        </div>
        <Field label="Address" value={data.address} onChange={v => upd("address", v)} />
        <div className="grid grid-cols-2 gap-x-4">
          <Field label="Established Year" value={data.established} onChange={v => upd("established", v)} />
          <Field label="Working Hours" value={data.workingHours} onChange={v => upd("workingHours", v)} />
        </div>
      </Card>
      <Card>
        <h3 className="font-semibold text-gray-800 mb-4">Contact Details</h3>
        <div className="grid grid-cols-2 gap-x-4">
          <Field label="Primary Phone" value={data.phone1} onChange={v => upd("phone1", v)} />
          <Field label="Secondary Phone" value={data.phone2} onChange={v => upd("phone2", v)} />
          <Field label="WhatsApp Number" value={data.whatsapp} onChange={v => upd("whatsapp", v)} />
          <Field label="Emergency Number" value={data.emergencyNumber} onChange={v => upd("emergencyNumber", v)} />
          <Field label="Email" value={data.email} onChange={v => upd("email", v)} type="email" />
          <Field label="Website Domain" value={data.domain} onChange={v => upd("domain", v)} hint="e.g. www.kcarehospital.com" />
        </div>
        <Field label="Google Maps URL" value={data.googleMapsUrl} onChange={v => upd("googleMapsUrl", v)} hint="Paste your full Google Maps link" />
      </Card>
      <SaveBar onSave={onSave} saving={saving} />
    </>
  )
}

function StatsEditor({ data, onChange, onSave, saving }) {
  const upd = (i, k, v) => { const n = [...data]; n[i] = { ...n[i], [k]: v }; onChange(n) }
  return (
    <>
      <p className="text-sm text-gray-500 mb-4">These 4 numbers appear prominently on the homepage.</p>
      {data.map((stat, i) => (
        <Card key={i}>
          <h3 className="font-semibold text-gray-700 mb-3">Stat {i + 1}</h3>
          <div className="grid grid-cols-3 gap-4">
            <Field label="Number" value={stat.number} onChange={v => upd(i, "number", v)} hint='e.g. "50,000+" or "24/7"' />
            <Field label="Label" value={stat.label} onChange={v => upd(i, "label", v)} />
            <Field label="Description" value={stat.description} onChange={v => upd(i, "description", v)} />
          </div>
        </Card>
      ))}
      <SaveBar onSave={onSave} saving={saving} />
    </>
  )
}

function AboutEditor({ data, onChange, onSave, saving }) {
  const upd = (k, v) => onChange({ ...data, [k]: v })
  return (
    <>
      <Card>
        <Field label="Mission Statement" value={data.mission} onChange={v => upd("mission", v)} rows={4} />
        <Field label="Vision Statement" value={data.vision} onChange={v => upd("vision", v)} rows={4} />
      </Card>
      <Card>
        <h3 className="font-semibold text-gray-800 mb-3">Why Choose Us — Feature Points</h3>
        <p className="text-xs text-gray-400 mb-3">One feature per line</p>
        <textarea
          value={(data.features || []).join("\n")}
          onChange={e => upd("features", e.target.value.split("\n").filter(Boolean))}
          rows={8}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D5094]"
        />
      </Card>
      <SaveBar onSave={onSave} saving={saving} />
    </>
  )
}

function DoctorsEditor({ data, onChange, onSave, saving }) {
  const upd = (i, k, v) => { const n = [...data]; n[i] = { ...n[i], [k]: v }; onChange(n) }
  const addDoctor = () => onChange([...data, { id: `doctor-${Date.now()}`, name: "", specialty: "", specialtyHindi: "", qualification: "", experience: "", image: "/images/doctor-placeholder.avif", department: "", availability: "", availabilityStatus: "Available", languages: ["English", "Hindi"], rating: 5, gender: "Male", consultationFee: 0, consultationMode: ["In-Person"], bio: "" }])
  const removeDoctor = (i) => { if (confirm("Remove this doctor?")) onChange(data.filter((_, idx) => idx !== i)) }

  return (
    <>
      <p className="text-sm text-gray-500 mb-4">First 4 doctors appear on homepage. All appear on the Doctors page.</p>
      {data.map((doc, i) => (
        <Card key={i}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">{doc.name || `Doctor ${i + 1}`}</h3>
            <button onClick={() => removeDoctor(i)} className="text-red-400 hover:text-red-600 text-sm">🗑 Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <Field label="Full Name" value={doc.name} onChange={v => upd(i, "name", v)} />
            <Field label="ID / URL Slug" value={doc.id} onChange={v => upd(i, "id", v)} hint='e.g. "rajesh-kumar" (no spaces)' />
            <Field label="Specialty (English)" value={doc.specialty} onChange={v => upd(i, "specialty", v)} />
            <Field label="Specialty (Hindi)" value={doc.specialtyHindi} onChange={v => upd(i, "specialtyHindi", v)} />
            <Field label="Qualification" value={doc.qualification} onChange={v => upd(i, "qualification", v)} hint="e.g. MBBS, MD, DM" />
            <Field label="Experience" value={doc.experience} onChange={v => upd(i, "experience", v)} hint='e.g. "15+ Years"' />
            <Field label="Department" value={doc.department} onChange={v => upd(i, "department", v)} />
            <Field label="Availability" value={doc.availability} onChange={v => upd(i, "availability", v)} hint="e.g. Mon-Sat: 9AM-5PM" />
            <Field label="Availability Status" value={doc.availabilityStatus} onChange={v => upd(i, "availabilityStatus", v)} hint="Available / Busy / On Leave" />
            <Field label="Gender" value={doc.gender} onChange={v => upd(i, "gender", v)} hint="Male / Female" />
            <Field label="Consultation Fee (₹)" value={doc.consultationFee} onChange={v => upd(i, "consultationFee", Number(v))} type="number" />
            <Field label="Rating (1-5)" value={doc.rating} onChange={v => upd(i, "rating", parseFloat(v))} type="number" />
          </div>
          <Field label="Photo URL" value={doc.image} onChange={v => upd(i, "image", v)} hint="Path like /images/doctor-name.jpg or a full https:// URL" />
          <Field label="Short Bio" value={doc.bio} onChange={v => upd(i, "bio", v)} rows={3} />
        </Card>
      ))}
      <button onClick={addDoctor} className="w-full border-2 border-dashed border-[#0D5094] text-[#0D5094] py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors mb-4">
        + Add New Doctor
      </button>
      <SaveBar onSave={onSave} saving={saving} />
    </>
  )
}

function TestimonialsEditor({ data, onChange, onSave, saving }) {
  const upd = (i, k, v) => { const n = [...data]; n[i] = { ...n[i], [k]: v }; onChange(n) }
  const add = () => onChange([...data, { name: "", nameHindi: "", location: "", rating: 5, image: "/images/doctor-placeholder.avif", text: "", textHindi: "" }])
  const remove = (i) => { if (confirm("Remove?")) onChange(data.filter((_, idx) => idx !== i)) }

  return (
    <>
      {data.map((t, i) => (
        <Card key={i}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">{t.name || `Testimonial ${i + 1}`}</h3>
            <button onClick={() => remove(i)} className="text-red-400 hover:text-red-600 text-sm">🗑 Remove</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Field label="Patient Name" value={t.name} onChange={v => upd(i, "name", v)} />
            <Field label="Name (Hindi)" value={t.nameHindi} onChange={v => upd(i, "nameHindi", v)} />
            <Field label="City" value={t.location} onChange={v => upd(i, "location", v)} />
          </div>
          <Field label="Quote (English)" value={t.text} onChange={v => upd(i, "text", v)} rows={3} />
          <Field label="Quote (Hindi)" value={t.textHindi} onChange={v => upd(i, "textHindi", v)} rows={2} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Rating (1-5)" value={t.rating} onChange={v => upd(i, "rating", parseInt(v))} type="number" />
            <Field label="Photo URL" value={t.image} onChange={v => upd(i, "image", v)} />
          </div>
        </Card>
      ))}
      <button onClick={add} className="w-full border-2 border-dashed border-[#0D5094] text-[#0D5094] py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors mb-4">
        + Add Testimonial
      </button>
      <SaveBar onSave={onSave} saving={saving} />
    </>
  )
}

function SlidesEditor({ data, onChange, onSave, saving }) {
  const upd = (i, k, v) => { const n = [...data]; n[i] = { ...n[i], [k]: v }; onChange(n) }
  return (
    <>
      <p className="text-sm text-gray-500 mb-4">These are the 4 auto-rotating hero banner slides on the homepage.</p>
      {data.map((s, i) => (
        <Card key={i}>
          <h3 className="font-semibold text-gray-800 mb-3">Slide {i + 1}</h3>
          <Field label="Image URL" value={s.image} onChange={v => upd(i, "image", v)} hint="Path like /images/slide1.jpeg" />
          <Field label="Title (large text)" value={s.title} onChange={v => upd(i, "title", v)} />
          <Field label="Subtitle" value={s.subtitle} onChange={v => upd(i, "subtitle", v)} />
          <Field label="Description" value={s.description} onChange={v => upd(i, "description", v)} rows={2} />
        </Card>
      ))}
      <SaveBar onSave={onSave} saving={saving} />
    </>
  )
}

// Generic list editor for departments, services, awards, partners
function ListEditor({ title, data, onChange, onSave, saving, fields, newItem }) {
  const upd = (i, k, v) => { const n = [...data]; n[i] = { ...n[i], [k]: v }; onChange(n) }
  const add = () => onChange([...data, { ...newItem }])
  const remove = (i) => { if (confirm(`Remove this ${title}?`)) onChange(data.filter((_, idx) => idx !== i)) }
  const move = (i, dir) => {
    const n = [...data]
    const j = i + dir
    if (j < 0 || j >= n.length) return
    ;[n[i], n[j]] = [n[j], n[i]]
    onChange(n)
  }

  return (
    <>
      {data.map((item, i) => (
        <Card key={i}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">{item.name || item.title || `${title} ${i + 1}`}</h3>
            <div className="flex gap-2">
              <button onClick={() => move(i, -1)} className="text-gray-400 hover:text-gray-600 text-sm px-1">↑</button>
              <button onClick={() => move(i, 1)} className="text-gray-400 hover:text-gray-600 text-sm px-1">↓</button>
              <button onClick={() => remove(i)} className="text-red-400 hover:text-red-600 text-sm">🗑</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            {fields.map(f => (
              <Field key={f.key} label={f.label} value={item[f.key]} onChange={v => upd(i, f.key, v)} hint={f.hint} />
            ))}
          </div>
        </Card>
      ))}
      <button onClick={add} className="w-full border-2 border-dashed border-[#0D5094] text-[#0D5094] py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors mb-4">
        + Add {title}
      </button>
      <SaveBar onSave={onSave} saving={saving} />
    </>
  )
}

// Field configs for list editors
const deptFields = [
  { key: "name", label: "Name (English)" },
  { key: "hindiName", label: "Name (Hindi)" },
  { key: "id", label: "ID / Slug", hint: "e.g. orthopedics (no spaces)" },
  { key: "iconClass", label: "Font Awesome Icon", hint: "e.g. fa-solid fa-bone" },
]
const newDept = { id: "", name: "", hindiName: "", iconClass: "fa-solid fa-stethoscope", color: "from-blue-500 to-blue-600" }

const serviceFields = [
  { key: "name", label: "Name (English)" },
  { key: "hindiName", label: "Name (Hindi)" },
  { key: "id", label: "ID / Slug", hint: "e.g. ct-scan (no spaces)" },
  { key: "iconClass", label: "Font Awesome Icon" },
]
const newService = { id: "", name: "", hindiName: "", iconClass: "fa-solid fa-hospital", color: "from-blue-500 to-blue-600" }

const awardFields = [
  { key: "title", label: "Award Title" },
  { key: "year", label: "Year" },
  { key: "organization", label: "Awarding Organization" },
]
const newAward = { title: "", year: "", organization: "" }

const partnerFields = [
  { key: "name", label: "Partner Name" },
  { key: "description", label: "Description" },
  { key: "logo", label: "Logo URL", hint: "/images/logo.png or https://..." },
]
const newPartner = { name: "", description: "", logo: "" }
