import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

// ── Custom Cursor Logic ──────────────────────────────────────────
// This runs outside React because it needs direct DOM access
const cur  = document.getElementById('cursor')
const ring = document.getElementById('cursor-ring')
let rx = 0, ry = 0, cx = 0, cy = 0

document.addEventListener('mousemove', (e) => {
  cx = e.clientX
  cy = e.clientY
  cur.style.left = cx + 'px'
  cur.style.top  = cy + 'px'
})

// The ring follows with a slight delay (lerp / linear interpolation)
;(function loop() {
  rx += (cx - rx) * 0.12
  ry += (cy - ry) * 0.12
  ring.style.left = rx + 'px'
  ring.style.top  = ry + 'px'
  requestAnimationFrame(loop)
})()

// Scale cursor on hover over interactive elements
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('a, button')) {
    cur.style.width  = '20px'
    cur.style.height = '20px'
  } else {
    cur.style.width  = '10px'
    cur.style.height = '10px'
  }
})

// ── Mount React App ──────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)