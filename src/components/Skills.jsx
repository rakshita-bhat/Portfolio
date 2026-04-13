import { SKILLS, SKILL_CAT_CLASS } from '../data/data'

function Skills() {
  return (
    <section id="skills" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          background: 'rgba(200,255,0,0.015)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>

          {/* Section heading */}
          <div className="reveal" style={{ marginBottom: 52 }}>
            <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--lime)', marginBottom: 8 }}>
              / SKILLS
            </p>
            <h2 className="bebas" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 1 }}>
              WHAT I BUILD WITH
            </h2>
          </div>

          {/* Skills grid — auto-fills columns */}
          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 36 }}>
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <div
                key={cat}
                className="reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Category label with colour dot (via CSS class) */}
                <div className={`cat-label ${SKILL_CAT_CLASS[cat]}`}>{cat}</div>

                {/* Skill tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {items.map((s) => (
                    <span key={s} className="stag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills