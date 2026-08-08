import { useRef, useState, useEffect, useCallback } from 'react'
import './ScratchDate.css'

const SCRATCH_THRESHOLD = 30   // % of pixels scratched to auto-reveal

export default function ScratchDate() {
  const canvasRef = useRef(null)
  const [scratching, setScratching] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [progress, setProgress] = useState(0)
  const lastPos = useRef(null)

  /* ── Draw initial scratch surface ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // Gold gradient cover
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    grad.addColorStop(0,   '#d4a84b')
    grad.addColorStop(0.4, '#c9a84c')
    grad.addColorStop(0.6, '#b89438')
    grad.addColorStop(1,   '#8a6f2e')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Texture hint text
    ctx.fillStyle = 'rgba(255, 248, 220, 0.55)'
    ctx.font = '600 14px "Lato", sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.letterSpacing = '3px'
    ctx.fillText('✦  Scratch to Reveal  ✦', canvas.width / 2, canvas.height / 2)

    // Subtle diagonal lines
    ctx.strokeStyle = 'rgba(255, 248, 220, 0.12)'
    ctx.lineWidth = 1
    for (let i = -canvas.height; i < canvas.width + canvas.height; i += 18) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i + canvas.height, canvas.height)
      ctx.stroke()
    }
  }, [])

  /* ── Scratch helpers ── */
  const getPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top)  * scaleY,
    }
  }

  const scratch = useCallback((x, y) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    if (lastPos.current) {
      ctx.moveTo(lastPos.current.x, lastPos.current.y)
      ctx.lineTo(x, y)
      ctx.lineWidth = 80
      ctx.lineCap = 'round'
      ctx.stroke()
    } else {
      ctx.arc(x, y, 50, 0, Math.PI * 2)
      ctx.fill()
    }
    lastPos.current = { x, y }

    // Sample 2% of pixels to calculate progress
    const total = canvas.width * canvas.height
    const sample = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    let transparent = 0
    for (let i = 3; i < sample.length; i += 16) {  // step ~4px
      if (sample[i] === 0) transparent++
    }
    const pct = Math.min(100, Math.round((transparent / (total / 40)) * 100))
    setProgress(pct)

    if (pct >= SCRATCH_THRESHOLD && !revealed) {
      // Clear fully
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      setRevealed(true)
    }
  }, [revealed])

  /* ── Event handlers ── */
  const handleStart = (e) => {
    e.preventDefault()
    setScratching(true)
    lastPos.current = null
    const pos = getPos(e, canvasRef.current)
    scratch(pos.x, pos.y)
  }

  const handleMove = (e) => {
    e.preventDefault()
    if (!scratching) return
    const pos = getPos(e, canvasRef.current)
    scratch(pos.x, pos.y)
  }

  const handleEnd = () => {
    setScratching(false)
    lastPos.current = null
  }

  return (
    <section className="scratch-section">
      <div className="scratch-inner">
        <h2 className="section-title">The Special Day</h2>
        <p className="section-subtitle">When does it happen?</p>

        <div
          className="scratch-card-wrapper"
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        >
          {/* Revealed content underneath */}
          <div className="scratch-reveal">
            <span className="reveal-date-label">Engagement Date</span>
            <span className="reveal-date-day">23</span>
            <span className="reveal-date-month-year">August 2026</span>
            <span className="reveal-date-label">Sunday</span>
          </div>

          {/* Scratch canvas */}
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            width={320}
            height={200}
          />
        </div>

        {!revealed ? (
          <>
            <p className="scratch-hint">Scratch the card to reveal the date ✦</p>
            <div className="scratch-progress">
              <div className="scratch-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </>
        ) : (
          <div className="revealed-badge">🎉 Save the Date!</div>
        )}
      </div>
    </section>
  )
}
