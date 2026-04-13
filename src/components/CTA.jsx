import { RESUME_URL } from '../data/data'

function CTA() {
  return (
    <section style={{ padding: '100px 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <div className="reveal">

          {/* Availability tag */}
          <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--lime)', marginBottom: 16 }}>
            ✦ OPEN FOR OPPORTUNITIES ✦
          </p>

          {/* Big headline */}
          <h2
            className="bebas"
            style={{ fontSize: 'clamp(3rem,8vw,7rem)', lineHeight: .9, marginBottom: 12 }}
          >
            LET'S BUILD<br />
            <span className="lime">SOMETHING</span><br />
            GREAT
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--grey)', maxWidth: 440, margin: '24px auto 36px' }}>
            Looking for roles in full stack development, backend engineering, or software development.
            Let's talk.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* mailto: links MUST NOT have target="_blank" — that causes browser redirect */}
            <a href="mailto:rakshitabhat02@gmail.com" className="btn-lime">
              SAY HELLO 👋
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ol">
              DOWNLOAD RESUME
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTA