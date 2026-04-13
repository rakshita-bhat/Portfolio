import { EDUCATION } from '../data/data'

function Education() {
  const edu = EDUCATION

  return (
    <section
      id="education"
      style={{
        padding: '80px 0',
        background: 'rgba(200,255,0,0.012)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Section heading */}
        <div className="reveal" style={{ marginBottom: 48 }}>
          <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--lime)', marginBottom: 8 }}>
            / EDUCATION
          </p>
          <h2 className="bebas" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1 }}>
            ACADEMIC BACKGROUND
          </h2>
        </div>

        {/* Education card */}
        <div className="ecard reveal">

          {/* ── Header: degree + period/CGPA ───────────────────── */}
          <div
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}
          >
            <div>
              <h3 className="bebas" style={{ fontSize: '1.6rem', marginBottom: 4 }}>{edu.degree}</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--grey)' }}>{edu.institute}</p>
              <p className="mono" style={{ fontSize: '.65rem', color: 'var(--muted)', marginTop: 4, letterSpacing: '.08em' }}>
                {edu.location.toUpperCase()}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div
                className="mono"
                style={{
                  fontSize: '.7rem', letterSpacing: '.1em', color: 'var(--lime)',
                  border: '1px solid rgba(158, 114, 195,0.25)', padding: '4px 12px',
                  display: 'inline-block', marginBottom: 6,
                }}
              >
                {edu.period.toUpperCase()}
              </div>
              <div className="bebas lime" style={{ fontSize: '1.8rem', display: 'block' }}>{edu.cgpa}</div>
            </div>
          </div>

          {/* Divider with lime dot */}
          <div className="ldiv" style={{ marginBottom: 24 }} />

          {/* ── Two columns: coursework + achievements ──────────── */}
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}
            className="edu-cols"
          >
            {/* Coursework */}
            <div>
              <div className="cat-label cat-fe">Coursework</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {edu.coursework.map((c) => (
                  <span key={c} className="stag">{c}</span>
                ))}
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

export default Education