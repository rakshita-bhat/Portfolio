import { useState } from 'react'
import { PROJECTS } from '../data/data'

// GitHub icon SVG path
function GitHubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  )
}

function Projects() {
  // Build unique category list from project data
  const categories = ['All', ...[...new Set(PROJECTS.map((p) => p.cat))]]
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.cat === active)

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Faded watermark */}
      <div className="sec-wm">WORK</div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Section heading */}
        <div className="reveal" style={{ marginBottom: 12 }}>
          <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--lime)', marginBottom: 8 }}>
            / SELECTED WORK
          </p>
          <h2 className="bebas" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1, marginBottom: 28 }}>
            PROJECTS
          </h2>
        </div>

        {/* Category filter buttons */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map((c) => (
            <button
              key={c}
              className={`fbtn ${active === c ? 'on' : ''}`}
              onClick={() => setActive(c)}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 16 }}>
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="pcard reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* ── Card header ────────────────────────────────── */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span
                    className="mono"
                    style={{ fontSize: '.62rem', letterSpacing: '.1em', color: 'var(--muted)', border: '1px solid var(--border)', padding: '2px 8px' }}
                  >
                    {p.cat.toUpperCase()}
                  </span>
                  {p.feat && <span className="feat">FEATURED</span>}
                </div>
                {/* Status indicator */}
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80' }} />
                  <span className="mono" style={{ fontSize: '.6rem', color: 'var(--muted)' }}>DONE</span>
                </div>
              </div>

              {/* Project number, title, subtitle */}
              <div className="mono" style={{ fontSize: '.7rem', color: 'var(--lime)', marginBottom: 4, letterSpacing: '.06em' }}>
                {p.num}
              </div>
              <h3 className="bebas" style={{ fontSize: '1.8rem', lineHeight: 1, marginBottom: 4 }}>
                {p.title}
              </h3>
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
                {p.stack.map((t) => (
                  <span key={t} className="sbadge">{t}</span>
                ))}
              </div>

              {/* GitHub link */}
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                {p.github
                  ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono lime"
                      style={{ fontSize: '.68rem', letterSpacing: '.08em', display: 'flex', gap: 6, alignItems: 'center', textDecoration: 'none' }}
                    >
                      <GitHubIcon /> VIEW CODE
                    </a>
                  ) : (
                    <span className="mono" style={{ fontSize: '.68rem', letterSpacing: '.08em', color: 'var(--muted)' }}>
                      PRIVATE REPO
                    </span>
                  )
                }
              </div>

              {/* Big watermark number (bottom-right corner of card) */}
              <div className="pnum">{p.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects