import { useState, useEffect } from 'react'
import './Countdown.css'

const TARGET_DATE = new Date('2026-08-23T00:00:00')

function getTimeLeft() {
  const diff = TARGET_DATE - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n) { return String(n).padStart(2, '0') }

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)
  const [tick, setTick] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft())
      setTick(t => !t)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: pad(time.days), label: 'Days' },
    { value: pad(time.hours), label: 'Hours' },
    { value: pad(time.minutes), label: 'Minutes' },
    { value: pad(time.seconds), label: 'Seconds' },
  ]

  const shareText = encodeURIComponent(
    `✨ You're invited to the engagement of Sreeraj & Anusree on 23 August 2026! 💍\nJoin us for this beautiful celebration.`
  )
  const whatsappUrl = `https://wa.me/?text=${shareText}`
  const instagramUrl = `https://www.instagram.com/`

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

        <div className="share-buttons">
          <a
            className="btn-share btn-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.15-1.61A11.97 11.97 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 18.4a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.65.96.97-3.56-.24-.37A9.89 9.89 0 0 1 2.1 12C2.1 6.52 6.52 2.1 12 2.1A9.9 9.9 0 0 1 21.9 12c0 5.48-4.42 9.88-9.9 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.15 8.15 0 0 1-2.4-1.48 9.07 9.07 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5s.05-.37-.02-.52c-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.47 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.19-.57-.34z" />
            </svg>
            WhatsApp
          </a>
          <a
            className="btn-share btn-instagram"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.613.074-3.067.49-4.205 1.628C1.71 2.838 1.294 4.292 1.22 5.905 1.162 7.185 1.148 7.593 1.148 12c0 4.407.014 4.815.072 6.095.074 1.613.49 3.067 1.628 4.205 1.138 1.138 2.592 1.554 4.205 1.628C8.333 23.986 8.741 24 12 24c3.259 0 3.667-.014 4.947-.072 1.613-.074 3.067-.49 4.205-1.628 1.138-1.138 1.554-2.592 1.628-4.205.058-1.28.072-1.688.072-6.095 0-4.407-.014-4.815-.072-6.095-.074-1.613-.49-3.067-1.628-4.205C19.014.638 17.56.222 15.947.148 14.667.09 14.259.076 12 .076zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
