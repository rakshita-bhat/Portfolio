// ─────────────────────────────────────────────────────────────────
// Marquee.jsx
// ─────────────────────────────────────────────────────────────────
import { MARQUEE_ITEMS } from '../data/data'

function Marquee() {
  // Duplicate items so the scroll looks infinite
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="mq-wrap" style={{ padding: '14px 0', background: 'rgba(200,255,0,0.025)' }}>
      <div className="mq-track">
        {items.map((item, i) => (
          <span key={i} className="mono" style={{ fontSize: '.72rem', letterSpacing: '.12em', color: 'var(--grey)', marginRight: 48 }}>
            <span className="lime">✦</span> {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  )
}

export { Marquee }


// ─────────────────────────────────────────────────────────────────
// About.jsx
// ─────────────────────────────────────────────────────────────────
function About() {
  const quickInfo = [
    ['📍', 'Location',  'Bengaluru, India'],
    ['🎓', 'Degree',    'B.E. Information Science'],
    ['🏫', 'Institute', 'Dr. Ambedkar Institute of Technology'],
    ['📅', 'Graduating','2026 | CGPA 8.55/10'],
    ['💼', 'Status',    'Open for Opportunities'],
    ['📧', 'Email',     'rakshitabhat02@gmail.com'],
  ]

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="sec-wm">ABOUT</div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal">
          <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--lime)', marginBottom: 8 }}>/ ABOUT ME</p>
          <h2 className="bebas" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', marginBottom: 48, lineHeight: 1 }}>
            WHO I AM
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="block md:grid">

          {/* Bio text */}
          <div className="reveal">
            <p style={{ fontSize: '1.05rem', color: 'var(--grey)', lineHeight: 1.8, marginBottom: 20 }}>
              I am a <span style={{ color: 'var(--white)' }}>Java Full Stack Developer</span> with a strong foundation in Core Java, DSA, and web development.
              Currently pursuing my B.E. in Information Science, I'm gaining hands-on experience through an internship at{' '}
              <span style={{ color: 'var(--lime)' }}>Tap Academy</span> — building end-to-end applications with Java, Spring Boot, MySQL, and modern frontend tech.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              I've built an AI-powered mock interview platform, a voice-based assistant, and a welfare platform that reached
              the Google Solution Challenge Top 50. I care deeply about clean code, scalable architecture, and solving real problems.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
              {['Java', 'Spring Boot', 'React.js', 'Node.js', 'MySQL', 'Python', 'DSA'].map((t) => (
                <span key={t} className="stag">{t}</span>
              ))}
            </div>
          </div>

          {/* Quick info list */}
          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            {quickInfo.map(([ico, key, val]) => (
              <div key={key} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', paddingBottom: 16, marginBottom: 16, borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '1rem', marginTop: 2 }}>{ico}</span>
                <div>
                  <div className="mono" style={{ fontSize: '.62rem', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 2 }}>{key.toUpperCase()}</div>
                  <div style={{ fontSize: '.9rem', color: 'var(--grey)' }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { About }


// ─────────────────────────────────────────────────────────────────
// Skills.jsx
// ─────────────────────────────────────────────────────────────────
import { SKILLS, SKILL_CAT_CLASS } from '../data/data'

function Skills() {
  return (
    <section id="skills" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(200,255,0,0.015)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>

          <div className="reveal" style={{ marginBottom: 52 }}>
            <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--lime)', marginBottom: 8 }}>/ SKILLS</p>
            <h2 className="bebas" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1 }}>WHAT I BUILD WITH</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 36 }}>
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <div key={cat} className="reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className={`cat-label ${SKILL_CAT_CLASS[cat]}`}>{cat}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {items.map((s) => <span key={s} className="stag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Skills }


// ─────────────────────────────────────────────────────────────────
// Projects.jsx
// ─────────────────────────────────────────────────────────────────
import { useState } from 'react'
import { PROJECTS } from '../data/data'

function Projects() {
  const categories = ['All', ...[...new Set(PROJECTS.map((p) => p.cat))]]
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === active)

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="sec-wm">WORK</div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ marginBottom: 12 }}>
          <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--lime)', marginBottom: 8 }}>/ SELECTED WORK</p>
          <h2 className="bebas" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1, marginBottom: 28 }}>PROJECTS</h2>
        </div>

        {/* Category filter buttons */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map((c) => (
            <button key={c} className={`fbtn ${active === c ? 'on' : ''}`} onClick={() => setActive(c)}>
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 16 }}>
          {filtered.map((p, i) => (
            <div key={p.id} className="pcard reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              {/* Card header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="mono" style={{ fontSize: '.62rem', letterSpacing: '.1em', color: 'var(--muted)', border: '1px solid var(--border)', padding: '2px 8px' }}>
                    {p.cat.toUpperCase()}
                  </span>
                  {p.feat && <span className="feat">FEATURED</span>}
                </div>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80' }} />
                  <span className="mono" style={{ fontSize: '.6rem', color: 'var(--muted)' }}>DONE</span>
                </div>
              </div>

              <div className="mono" style={{ fontSize: '.7rem', color: 'var(--lime)', marginBottom: 4, letterSpacing: '.06em' }}>{p.num}</div>
              <h3 className="bebas" style={{ fontSize: '1.8rem', lineHeight: 1, marginBottom: 4 }}>{p.title}</h3>
              <p style={{ fontSize: '.78rem', color: 'var(--grey)', marginBottom: 12 }}>{p.sub}</p>
              <p style={{ fontSize: '.85rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>

              {/* Bullet points */}
              <ul style={{ marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {p.pts.map((pt, pi) => (
                  <li key={pi} style={{ display: 'flex', gap: 8, fontSize: '.78rem', color: 'var(--grey)' }}>
                    <span className="lime" style={{ flexShrink: 0 }}>▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
                {p.stack.map((t) => <span key={t} className="sbadge">{t}</span>)}
              </div>

              {/* GitHub link */}
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                {p.github
                  ? <a href={p.github} target="_blank" rel="noopener noreferrer" className="mono lime" style={{ fontSize: '.68rem', letterSpacing: '.08em', display: 'flex', gap: 6, alignItems: 'center' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                      </svg>
                      VIEW CODE
                    </a>
                  : <span className="mono" style={{ fontSize: '.68rem', letterSpacing: '.08em', color: 'var(--muted)' }}>PRIVATE REPO</span>
                }
              </div>

              {/* Big watermark number */}
              <div className="pnum">{p.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Projects }


// ─────────────────────────────────────────────────────────────────
// Education.jsx
// ─────────────────────────────────────────────────────────────────
import { EDUCATION } from '../data/data'

function Education() {
  const edu = EDUCATION
  return (
    <section id="education" style={{ padding: '80px 0', background: 'rgba(200,255,0,0.012)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ marginBottom: 48 }}>
          <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--lime)', marginBottom: 8 }}>/ EDUCATION</p>
          <h2 className="bebas" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1 }}>ACADEMIC BACKGROUND</h2>
        </div>

        <div className="ecard reveal">
          {/* Header row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}>
            <div>
              <h3 className="bebas" style={{ fontSize: '1.6rem', marginBottom: 4 }}>{edu.degree}</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--grey)' }}>{edu.institute}</p>
              <p className="mono" style={{ fontSize: '.65rem', color: 'var(--muted)', marginTop: 4, letterSpacing: '.08em' }}>{edu.location.toUpperCase()}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="mono" style={{ fontSize: '.7rem', letterSpacing: '.1em', color: 'var(--lime)', border: '1px solid rgba(200,255,0,0.25)', padding: '4px 12px', display: 'inline-block', marginBottom: 6 }}>
                {edu.period.toUpperCase()}
              </div>
              <div className="bebas lime" style={{ fontSize: '1.8rem', display: 'block' }}>{edu.cgpa}</div>
            </div>
          </div>

          <div className="ldiv" style={{ marginBottom: 24 }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="block md:grid">
            {/* Coursework */}
            <div>
              <div className="cat-label cat-fe">Coursework</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {edu.coursework.map((c) => <span key={c} className="stag">{c}</span>)}
              </div>
            </div>
            {/* Achievements */}
            <div>
              <div className="cat-label cat-lang">Achievements</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {edu.achievements.map((a, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, fontSize: '.85rem', color: 'var(--grey)' }}>
                    <span className="lime" style={{ flexShrink: 0 }}>★</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Education }


// ─────────────────────────────────────────────────────────────────
// CTA.jsx
// ─────────────────────────────────────────────────────────────────
import { RESUME_URL as RESUME } from '../data/data'

function CTA() {
  return (
    <section style={{ padding: '100px 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <div className="reveal">
          <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--lime)', marginBottom: 16 }}>✦ OPEN FOR OPPORTUNITIES ✦</p>
          <h2 className="bebas" style={{ fontSize: 'clamp(3rem,8vw,7rem)', lineHeight: .9, marginBottom: 12 }}>
            LET'S BUILD<br />
            <span className="lime">SOMETHING</span><br />
            GREAT
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--grey)', maxWidth: 440, margin: '24px auto 36px' }}>
            Looking for roles in full stack development, backend engineering, or software development. Let's talk.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:rakshitabhat02@gmail.com" className="btn-lime">SAY HELLO 👋</a>
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn-ol">DOWNLOAD RESUME</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CTA }


// ─────────────────────────────────────────────────────────────────
// Contact.jsx
// ─────────────────────────────────────────────────────────────────
import { CONTACT_LINKS } from '../data/data'

function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', msg: '' })
  const [sent, setSent]   = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:rakshitabhat02@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.msg}`)}`
    window.open(mailto, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" style={{ padding: '80px 0', borderTop: '1px solid var(--border)', background: 'rgba(200,255,0,0.012)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="block md:grid">

          {/* Contact info */}
          <div className="reveal">
            <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--lime)', marginBottom: 8 }}>/ CONTACT</p>
            <h2 className="bebas" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, marginBottom: 24 }}>GET IN TOUCH</h2>
            <p style={{ fontSize: '.9rem', color: 'var(--grey)', lineHeight: 1.7, marginBottom: 36 }}>
              Have a project in mind, a role that fits, or just want to say hi? My inbox is always open.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {CONTACT_LINKS.map(({ label, val, href }) => (
                <div key={label}>
                  <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', color: 'var(--muted)', marginBottom: 4 }}>{label}</div>
                  {href
                    ? <a href={href} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '.9rem', color: 'var(--grey)', transition: 'color .2s', textDecoration: 'none' }}
                        onMouseEnter={(e) => (e.target.style.color = 'var(--lime)')}
                        onMouseLeave={(e) => (e.target.style.color = 'var(--grey)')}>
                        {val}
                      </a>
                    : <span style={{ fontSize: '.9rem', color: 'var(--grey)' }}>{val}</span>
                  }
                  <div className="ldiv" style={{ marginTop: 16 }} />
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', color: 'var(--muted)', marginBottom: 8 }}>YOUR NAME</div>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe" className="cinp" style={{ fontSize: '.9rem' }} />
              </div>
              <div>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', color: 'var(--muted)', marginBottom: 8 }}>YOUR EMAIL</div>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com" className="cinp" style={{ fontSize: '.9rem' }} />
              </div>
              <div>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', color: 'var(--muted)', marginBottom: 8 }}>MESSAGE</div>
                <textarea required rows={5} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="cinp" style={{ fontSize: '.9rem', resize: 'none', display: 'block' }} />
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

export { Contact }


// ─────────────────────────────────────────────────────────────────
// Footer.jsx
// ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, maxWidth: 1200, margin: '0 auto' }}>
      <span className="bebas lime" style={{ fontSize: '1.1rem', letterSpacing: '.08em' }}>
        RSB<span style={{ color: 'rgba(200,255,0,0.4)' }}>.</span>
      </span>
      <span className="mono" style={{ fontSize: '.62rem', color: 'var(--muted)', letterSpacing: '.08em' }}>
        © {new Date().getFullYear()} RAKSHITA SHIVARAM BHAT
      </span>
      <div style={{ display: 'flex', gap: 16 }}>
        {[['GitHub', 'https://github.com/rakshita-bhat'], ['LinkedIn', 'https://www.linkedin.com/in/rakshita--bhat/']].map(([l, h]) => (
          <a key={l} href={h} target="_blank" rel="noopener noreferrer"
            className="mono" style={{ fontSize: '.62rem', letterSpacing: '.1em', color: 'var(--muted)', transition: 'color .2s', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--lime)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}>
            {l.toUpperCase()}
          </a>
        ))}
      </div>
    </footer>
  )
}

export { Footer }