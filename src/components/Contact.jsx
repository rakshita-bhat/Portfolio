import { useState } from 'react'
import { CONTACT_LINKS } from '../data/data'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // window.location.href triggers the OS mail client (Outlook, Gmail app, etc.)
    // Never use window.open() for mailto — browsers block it as a popup
    const mailto = `mailto:rakshitabhat02@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.msg}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section
      id="contact"
      style={{
        padding: '80px 0',
        borderTop: '1px solid var(--border)',
        background: 'rgba(200,255,0,0.012)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}
          className="contact-grid"
        >

          {/* ── Left: Contact info ─────────────────────────────── */}
          <div className="reveal">
            <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--lime)', marginBottom: 8 }}>
              / CONTACT
            </p>
            <h2 className="bebas" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, marginBottom: 24 }}>
              GET IN TOUCH
            </h2>
            <p style={{ fontSize: '.9rem', color: 'var(--grey)', lineHeight: 1.7, marginBottom: 36 }}>
              Have a project in mind, a role that fits, or just want to say hi? My inbox is always open.
            </p>

            {/* Contact details list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {CONTACT_LINKS.map(({ label, val, href }) => (
                <div key={label}>
                  <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', color: 'var(--muted)', marginBottom: 4 }}>
                    {label}
                  </div>
                  {href
                    ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '.9rem', color: 'var(--grey)', transition: 'color .2s', textDecoration: 'none' }}
                        onMouseEnter={(e) => (e.target.style.color = 'var(--lime)')}
                        onMouseLeave={(e) => (e.target.style.color = 'var(--grey)')}
                      >
                        {val}
                      </a>
                    )
                    : <span style={{ fontSize: '.9rem', color: 'var(--grey)' }}>{val}</span>
                  }
                  {/* Lime dot divider line */}
                  <div className="ldiv" style={{ marginTop: 16 }} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Contact form ────────────────────────────── */}
          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

              {/* Name field */}
              <div>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', color: 'var(--muted)', marginBottom: 8 }}>
                  YOUR NAME
                </div>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="cinp"
                  style={{ fontSize: '.9rem' }}
                />
              </div>

              {/* Email field */}
              <div>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', color: 'var(--muted)', marginBottom: 8 }}>
                  YOUR EMAIL
                </div>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="cinp"
                  style={{ fontSize: '.9rem' }}
                />
              </div>

              {/* Message field */}
              <div>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', color: 'var(--muted)', marginBottom: 8 }}>
                  MESSAGE
                </div>
                <textarea
                  required
                  rows={5}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="cinp"
                  style={{ fontSize: '.9rem', resize: 'none', display: 'block' }}
                />
              </div>

              <button type="submit" className="btn-lime" style={{ alignSelf: 'flex-start' }}>
                {sent ? '✓ OPENING MAIL' : 'SEND MESSAGE →'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact