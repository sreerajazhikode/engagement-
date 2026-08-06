import { useState } from 'react'
import './Envelope.css'

export default function Envelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpen = () => {
    if (isOpening) return
    setIsOpening(true)
    setTimeout(() => {
      onOpen()
    }, 1800)
  }

  return (
    <div className="envelope-scene" onClick={handleOpen}>
      {/* Floating petals */}
      <div className="petals-container">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`petal petal-${i + 1}`} />
        ))}
      </div>

      <div className={`envelope-wrapper ${isOpening ? 'opening' : ''}`}>
        {/* Envelope body */}
        <div className="envelope">
          {/* Top flap */}
          <div className={`flap flap-top ${isOpening ? 'flap-open' : ''}`}>
            <div className="flap-inner" />
          </div>

          {/* Left flap */}
          <div className="flap flap-left" />
          {/* Right flap */}
          <div className="flap flap-right" />
          {/* Bottom flap */}
          <div className="flap flap-bottom" />

          {/* Envelope front face */}
          <div className="envelope-front">
            <div className="envelope-seal">
              <span className="initials">A ♡ S</span>
            </div>
          </div>
        </div>

        {/* Letter peeking out when opening */}
        <div className={`letter ${isOpening ? 'letter-rise' : ''}`}>
          <p className="letter-preview-text">You are cordially invited</p>
        </div>
      </div>

      {/* Touch prompt */}
      <div className={`touch-prompt ${isOpening ? 'prompt-fade' : ''}`}>
        <div className="touch-circle">
          <span className="touch-icon">✦</span>
        </div>
        <p className="touch-text">Touch to Open</p>
      </div>

      {/* Bottom tagline */}
      <p className="envelope-tagline">
        <span className="tagline-script">Sreeraj</span>
        &nbsp;&amp;&nbsp;
        <span className="tagline-script">Anusree</span>
      </p>
    </div>
  )
}
