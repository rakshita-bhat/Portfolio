const FOOTER_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/rakshita-bhat' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rakshita--bhat/' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '24px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      <div
        className="footer-inner"
        style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}
      >
      {/* Brand mark */}
      <span className="bebas lime" style={{ fontSize: '1.1rem', letterSpacing: '.08em' }}>
        RSB<span style={{ color: 'rgba(200,255,0,0.4)' }}>.</span>
      </span>

      {/* Copyright */}
      <span className="mono" style={{ fontSize: '.62rem', color: 'var(--muted)', letterSpacing: '.08em' }}>
        © {year} RAKSHITA SHIVARAM BHAT
      </span>

      {/* Social links */}
      <div style={{ display: 'flex', gap: 16 }}>
        {FOOTER_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mono"
            style={{
              fontSize: '.62rem', letterSpacing: '.1em',
              color: 'var(--muted)', transition: 'color .2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--lime)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
          >
            {label.toUpperCase()}
          </a>
        ))}
      </div>
      </div>
    </footer>
  )
}

export default Footer