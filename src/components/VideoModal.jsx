import { useEffect, useState } from 'react'
import { site } from '../data/site'
import Icon from './Icons'

export default function VideoModal({ open, onClose }) {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!open) {
      setPlaying(false)
      return undefined
    }
    function onKey(event) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-root">
      <button className="backdrop" type="button" aria-label="Close video" onClick={onClose} />
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="video-title">
        <button className="icon-btn modal-close" type="button" onClick={onClose} aria-label="Close">
          <Icon name="close" />
        </button>
        <div className={`player ${playing ? 'is-playing' : ''}`}>
          <p>FUTURISTIC WORLD</p>
          <button type="button" className="play-btn" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Pause briefing' : 'Play briefing'}>
            <Icon name="play" size={28} />
          </button>
          <div className="player-bar">
            <span />
          </div>
        </div>
        <h2 id="video-title">Welcome to {site.name}</h2>
        <p>
          {site.tagline}. This short briefing introduces {site.domain}: the AI, machines, and science stories worth a careful read.
        </p>
        {playing ? (
          <p className="form-success" role="status">
            Playing the site briefing. There is no video file in this frontend — the player is the introduction.
          </p>
        ) : null}
      </div>
    </div>
  )
}
