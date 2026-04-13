import { MARQUEE_ITEMS } from '../data/data'

function Marquee() {
  // Duplicate items so the scroll looks infinite
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="mq-wrap" style={{ padding: '14px 0', background: 'rgba(200,255,0,0.025)' }}>
      <div className="mq-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="mono"
            style={{ fontSize: '.72rem', letterSpacing: '.12em', color: 'var(--grey)', marginRight: 48 }}
          >
            <span className="lime">✦</span> {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee