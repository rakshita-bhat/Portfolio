import { useState, useEffect } from 'react'
import { NAV_LINKS, RESUME_URL } from '../data/data'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Add background blur after scrolling 50px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section by ID
  const goTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500 }}
      className={scrolled ? 'nav-bg' : ''}
    >
      {/* ── Main bar ─────────────────────────────────────────── */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Wordmark / Logo */}
        <button
          onClick={() => goTo('hero')}
          style={{ background: 'none', border: 'none', cursor: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
        >
          {/* Lime square with initial */}
          <div style={{
            width: 28, height: 28, background: 'var(--lime)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '.85rem', color: '#05070f', letterSpacing: '.04em', lineHeight: 1 }}>
              R
            </span>
          </div>
          {/* Stacked name text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, lineHeight: 1 }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.58rem', letterSpacing: '.16em', color: 'var(--white)' }}>
              RAKSHITA
            </span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.52rem', letterSpacing: '.1em', color: 'var(--muted)' }}>
              SHIVARAM BHAT
            </span>
          </div>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center" style={{ gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => goTo(link.toLowerCase())}
              className="mono"
              style={{
                background: 'none', border: 'none', cursor: 'none',
                fontSize: '.72rem', letterSpacing: '.1em',
                color: 'var(--grey)', transition: 'color .2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--grey)')}
            >
              {link.toUpperCase()}
            </button>
          ))}

          <a
            href={RESUME_URL}
            target="_blank" rel="noopener noreferrer"
            className="btn-lime"
            style={{ fontSize: '.78rem', padding: '8px 20px' }}
          >
            RESUME ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'none', color: 'var(--white)' }}
        >
          {menuOpen
            ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>

      {/* ── Mobile dropdown ───────────────────────────────────── */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          padding: '20px 24px',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => goTo(link.toLowerCase())}
              className="mono"
              style={{
                background: 'none', border: 'none', cursor: 'none',
                fontSize: '.72rem', letterSpacing: '.1em',
                color: 'var(--grey)', textAlign: 'left',
              }}
            >
              {link.toUpperCase()}
            </button>
          ))}
          <a
            href={RESUME_URL}
            target="_blank" rel="noopener noreferrer"
            className="btn-lime"
            style={{ fontSize: '.78rem', padding: '8px 20px', alignSelf: 'flex-start' }}
          >
            RESUME ↗
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar