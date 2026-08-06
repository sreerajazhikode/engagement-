import './Venue.css'

const VENUE_MAP = 'https://goo.gl/maps/syZDqrq6oLParJxx9?g_st=ac'

export default function Venue() {
  return (
    <section className="venue-section">
      <div className="venue-inner">
        <h2 className="section-title">Venue</h2>
        <p className="section-subtitle">Where the celebration begins</p>

        <div className="venue-card">
          <h3 className="venue-name">Engagement Venue</h3>
          <p className="venue-meta">Bride's Home</p>
          <div className="venue-date-badge">✦ 23 August 2026 ✦</div>

          <div className="venue-buttons">
            <a
              className="btn-gold"
              href={VENUE_MAP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Open Location
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
