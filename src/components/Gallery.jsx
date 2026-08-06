import { useState, useEffect, useCallback } from 'react'
import './Gallery.css'

import photoGroup         from '../assets/images/photo-group.jpg.jpeg'
import photoHands         from '../assets/images/photo-hands.jpg.jpeg'
import photoMall          from '../assets/images/photo-mall.jpg.jpeg'
import photoOutdoor1      from '../assets/images/photo-outdoor1.jpg.jpeg'
import photoForest        from '../assets/images/photo-forest.jpg.jpeg'
import photoIllustration1 from '../assets/images/photo-illustration1.jpg.jpeg'
import photoPoster        from '../assets/images/photo-poster.jpg.jpeg'
import photoStreet        from '../assets/images/photo-street.jpg.jpeg'

const PHOTOS = [
  { id: 1,  src: photoPoster,        label: 'Getting Engaged' },
  { id: 2,  src: photoIllustration1, label: 'Our Story' },
  { id: 3,  src: photoOutdoor1,      label: 'Together' },
  { id: 4,  src: photoForest,        label: 'Forest Walk' },
  { id: 5,  src: photoMall,          label: 'Mall Day' },
  { id: 6,  src: photoStreet,        label: 'Street Smiles' },
  { id: 7,  src: photoHands,         label: 'Holding Hands' },
  { id: 8,  src: photoGroup,         label: 'Family Gathering' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)  // index | null

  const close  = () => setLightbox(null)
  const prev   = useCallback(() => setLightbox(i => (i - 1 + PHOTOS.length) % PHOTOS.length), [])
  const next   = useCallback(() => setLightbox(i => (i + 1) % PHOTOS.length), [])

  /* Keyboard navigation */
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape')      close()
      if (e.key === 'ArrowLeft')   prev()
      if (e.key === 'ArrowRight')  next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, prev, next])

  return (
    <section className="gallery-section">
      <div className="gallery-inner">
        <h2 className="section-title">Our Gallery</h2>
        <p className="section-subtitle">Cherished moments</p>

        <div className="gallery-grid">
          {PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              className="gallery-card"
              onClick={() => setLightbox(idx)}
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="gallery-img"
                  loading="lazy"
                />
              ) : (
                <div
                  className="gallery-placeholder"
                  style={{ '--grad': photo.grad }}
                >
                  <span className="placeholder-icon">📷</span>
                  <span className="placeholder-label">{photo.label}</span>
                </div>
              )}
              <div className="gallery-overlay">
                <span className="gallery-overlay-text">View</span>
              </div>
            </div>
          ))}
        </div>

        <p className="gallery-hint">
          ✦ Tap a photo to view ✦
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-backdrop"
          onClick={close}
        >
          <div
            className="lightbox-content"
            onClick={e => e.stopPropagation()}
          >
            {PHOTOS[lightbox].src ? (
              <img
                src={PHOTOS[lightbox].src}
                alt={PHOTOS[lightbox].label}
                className="lightbox-img"
              />
            ) : (
              <div
                className="gallery-placeholder"
                style={{
                  '--grad': PHOTOS[lightbox].grad,
                  width: 340,
                  height: 340,
                }}
              >
                <span className="placeholder-icon" style={{ fontSize: '3rem' }}>📷</span>
                <span className="placeholder-label">{PHOTOS[lightbox].label}</span>
              </div>
            )}

            <button className="lightbox-close" onClick={close}>✕</button>
            <button className="lightbox-nav lightbox-prev" onClick={prev}>‹</button>
            <button className="lightbox-nav lightbox-next" onClick={next}>›</button>
          </div>
        </div>
      )}
    </section>
  )
}
