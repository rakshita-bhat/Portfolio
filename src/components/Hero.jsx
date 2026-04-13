import photo from '../assets/photo.jpg'
import { useTyping } from '../hooks/useTyping'
import { RESUME_URL } from '../data/data'

// Social icon data
const SOCIALS = [
  {
    href: 'https://github.com/rakshita-bhat',
    label: 'GitHub',
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    ),
  },
  {
    href: 'https://www.linkedin.com/in/rakshita--bhat/',
    label: 'LinkedIn',
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    href: 'mailto:rakshitabhat02@gmail.com',
    label: 'Email',
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
]

const STATS = [
  ['300+', 'Problems Solved'],
  ['4',    'Projects'],
  ['TOP 50','Hackathon'],
]

function Hero() {
  // Cycles between 'Developer' and 'Engineer' with typing animation
  const role = useTyping(['Developer', 'Engineer'], 110)

  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80, paddingBottom: 60 }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}
          className="hero-grid"
        >
          {/* ── Left: Text Content ──────────────────────────────── */}
          <div>
            <p className="mono" style={{ fontSize: '.72rem', letterSpacing: '.15em', color: 'var(--lime)', marginBottom: 16 }}>
              JAVA FULL STACK DEVELOPER
            </p>

            {/* Big stacked name */}
            <h1 className="bebas" style={{ fontSize: 'clamp(4.5rem,9vw,8rem)', lineHeight: .92, color: 'var(--white)', marginBottom: 4 }}>
              RAKSHITA
            </h1>
            <h1 className="bebas" style={{ fontSize: 'clamp(4.5rem,9vw,8rem)', lineHeight: .92, color: 'var(--lime)', marginBottom: 4 }}>
              SHIVARAM
            </h1>
            <h1 className="bebas" style={{ fontSize: 'clamp(4.5rem,9vw,8rem)', lineHeight: .92, color: 'var(--white)', marginBottom: 28 }}>
              BHAT
            </h1>

            {/* Typing role */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ width: 40, height: 1, background: 'var(--lime)', flexShrink: 0 }} />
              <span className="mono tcursor" style={{ fontSize: '.9rem', color: 'var(--grey)' }}>
                {role}
              </span>
            </div>

            <p style={{ fontSize: '.95rem', color: 'var(--grey)', lineHeight: 1.7, maxWidth: 440, marginBottom: 32 }}>
              Java Full Stack Developer with strong foundations in Core Java, DSA, and backend development.
              Passionate about building scalable web applications and solving real-world problems through
              clean and efficient code.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-lime"
              >
                VIEW WORK
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ol"
              >
                GET IN TOUCH
              </button>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="soc" title={s.label}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Photo + Stats ─────────────────────────────── */}
          <div className="photo-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 24, marginTop: 32 }}>

            {/* Profile photo with offset border */}
            <div className="photo-wrap" style={{ width: 280, height: 340, flexShrink: 0 }}>
              <img src={photo} alt="Rakshita Shivaram Bhat" />
            </div>

            {/* Stat boxes */}
            <div className="stat-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, width: '100%', maxWidth: 320 }}>
              {STATS.map(([num, label]) => (
                <div key={label} className="stat-box" style={{ textAlign: 'center' }}>
                  <div className="bebas lime" style={{ fontSize: '1.8rem', lineHeight: 1 }}>{num}</div>
                  <div className="mono" style={{ fontSize: '.55rem', color: 'var(--muted)', marginTop: 4, letterSpacing: '.06em' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero