import { useState } from 'react'
import Envelope from './components/Envelope'
import Invitation from './components/Invitation'
import CoupleDetails from './components/CoupleDetails'
import ScratchDate from './components/ScratchDate'
import Venue from './components/Venue'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Countdown from './components/Countdown'
import './styles/App.css'

function App() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="app">
      {!opened ? (
        <Envelope onOpen={() => setOpened(true)} />
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
    </div>
  )
}

export default App
