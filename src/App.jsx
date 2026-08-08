import { useState, useRef } from 'react'
import Envelope from './components/Envelope'
import Invitation from './components/Invitation'
import CoupleDetails from './components/CoupleDetails'
import ScratchDate from './components/ScratchDate'
import Venue from './components/Venue'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Countdown from './components/Countdown'
import song from './assets/hoo.mp3.m4a'
import './styles/App.css'

function App() {
  const [opened, setOpened] = useState(false)
  const [muted, setMuted] = useState(false)
  const audioRef = useRef(null)

  const handleOpen = () => {
    setOpened(true)
    if (audioRef.current) {
      audioRef.current.play().catch(() => {})
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted
      setMuted(m => !m)
    }
  }

  return (
    <div className="app">
      <audio ref={audioRef} src={song} loop preload="auto" />
      {!opened ? (
        <Envelope onOpen={handleOpen} />
      ) : (
        <main className="invitation-content fade-in-up">
          {/* Decorative top border */}
          <div className="invitation-border-top" />

          <Invitation />
          <CoupleDetails />

          <div className="section">
            <div className="ornament-divider">✦</div>
          </div>

          <ScratchDate />

          <div className="section">
            <div className="ornament-divider">✦</div>
          </div>

          <Countdown />

          <div className="section">
            <div className="ornament-divider">✦</div>
          </div>

          <Venue />

          <div className="section">
            <div className="ornament-divider">✦</div>
          </div>

          <Gallery />

          <Footer />
        </main>
      )}

      {opened && (
        <button className="music-toggle" onClick={toggleMute} title={muted ? 'Unmute' : 'Mute'}>
          {muted ? '🔇' : '🎵'}
        </button>
      )}
    </div>
  )
}

export default App
