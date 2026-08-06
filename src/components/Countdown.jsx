import { useState, useEffect } from 'react'
import './Countdown.css'

const TARGET_DATE = new Date('2026-08-23T10:00:00')

function getTimeLeft() {
  const diff = TARGET_DATE - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n) { return String(n).padStart(2, '0') }

export default function Countdown() {
  const [time, setTime]   = useState(getTimeLeft)
  const [tick, setTick]   = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft())
      setTick(t => !t)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: pad(time.days),    label: 'Days'    },
    { value: pad(time.hours),   label: 'Hours'   },
    { value: pad(time.minutes), label: 'Minutes' },
    { value: pad(time.seconds), label: 'Seconds' },
  ]

  const shareText = encodeURIComponent(
    `✨ You're invited to the engagement of Sreeraj & Anusree on 23 August 2026! 💍\nJoin us for this beautiful celebration.`
  )
  const whatsappUrl = `https://wa.me/?text=${shareText}`

  return (
    <section className="countdown-section">
      <div className="countdown-inner">
        <p className="countdown-title">Counting Down To</p>
        <p className="countdown-script">Our Engagement</p>

        <div className="countdown-grid">
          {units.map((u, i) => (
            <div key={u.label} style={{ display: 'contents' }}>
              <div className="countdown-unit">
                <div className={`countdown-number ${u.label === 'Seconds' && tick ? 'tick' : ''}`}>
                  {u.value}
                </div>
                <span className="countdown-label">{u.label}</span>
              </div>
              {i < units.length - 1 && (
                <span className="countdown-colon">:</span>
              )}
            </div>
          ))}
        </div>

        <p className="countdown-date-text">
          <strong>23 August 2026</strong> — Sunday
        </p>

        <div className="whatsapp-share">
          <a
            className="btn-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.15-1.61A11.97 11.97 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 18.4a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.65.96.97-3.56-.24-.37A9.89 9.89 0 0 1 2.1 12C2.1 6.52 6.52 2.1 12 2.1A9.9 9.9 0 0 1 21.9 12c0 5.48-4.42 9.88-9.9 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.15 8.15 0 0 1-2.4-1.48 9.07 9.07 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5s.05-.37-.02-.52c-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.47 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.19-.57-.34z"/>
            </svg>
            Share on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
