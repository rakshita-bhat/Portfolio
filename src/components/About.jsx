function About() {
  const quickInfo = [
    ['📍', 'Location',   'Bengaluru, India'],
    ['🎓', 'Degree',     'B.E. Information Science'],
    ['🏫', 'Institute',  'Dr. Ambedkar Institute of Technology'],
    ['📅', 'Graduating', '2026 | CGPA 8.55/10'],
    ['💼', 'Status',     'Open for Opportunities'],
    ['📧', 'Email',      'rakshitabhat02@gmail.com'],
  ]

  const tags = ['Java', 'Spring Boot', 'React.js', 'Node.js', 'MySQL', 'Python', 'DSA']

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Big faded watermark behind the section */}
      <div className="sec-wm">ABOUT</div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Section heading */}
        <div className="reveal">
          <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--lime)', marginBottom: 8 }}>
            / ABOUT ME
          </p>
          <h2 className="bebas" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', marginBottom: 48, lineHeight: 1 }}>
            WHO I AM
          </h2>
        </div>

        {/* Two-column grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}
          className="about-grid"
        >
          {/* ── Left: Bio text ─────────────────────────────────── */}
          <div className="reveal">
            <p style={{ fontSize: '1.05rem', color: 'var(--grey)', lineHeight: 1.8, marginBottom: 20 }}>
              I am a <span style={{ color: 'var(--white)' }}>Java Full Stack Developer</span> with a strong
              foundation in Core Java, DSA, and web development. Currently pursuing my B.E. in Information
              Science, I'm gaining hands-on experience through an internship at{' '}
              <span style={{ color: 'var(--lime)' }}>Tap Academy</span> — building end-to-end applications
              with Java, Spring Boot, MySQL, and modern frontend tech.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              I've built an AI-powered mock interview platform, a voice-based assistant, and a welfare
              platform that reached the Google Solution Challenge Top 50. I care deeply about clean code,
              scalable architecture, and solving real problems.
            </p>

            {/* Skill tags */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
              {tags.map((t) => (
                <span key={t} className="stag">{t}</span>
              ))}
            </div>
          </div>

          {/* ── Right: Quick info list ──────────────────────────── */}
          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            {quickInfo.map(([ico, key, val]) => (
              <div
                key={key}
                style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  paddingBottom: 16, marginBottom: 16,
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span style={{ fontSize: '1rem', marginTop: 2 }}>{ico}</span>
                <div>
                  <div className="mono" style={{ fontSize: '.62rem', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 2 }}>
                    {key.toUpperCase()}
                  </div>
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

export default About