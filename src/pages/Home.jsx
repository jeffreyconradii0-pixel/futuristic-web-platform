import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cover from '../components/Covers'
import BriefingDesk from '../components/BriefingDesk'
import Newsletter from '../components/Newsletter'
import StoryCard from '../components/StoryCard'
import VideoModal from '../components/VideoModal'
import { storiesForLens } from '../data/articles'
import { signals, topics } from '../data/site'
import Icon from '../components/Icons'
import { useTitle } from '../useTitle'

const STORAGE_KEY = 'fw-lens'

export default function Home() {
  const [video, setVideo] = useState(false)
  const [lens, setLens] = useState('all')
  useTitle(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setLens(saved)
    } catch {
      /* ignore private-mode storage failures */
    }
  }, [])

  function onLens(next) {
    setLens(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  const board = storiesForLens(lens)

  return (
    <>
      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          <Cover variant="hero" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">The future is now</p>
          <h1>
            Discover Tomorrow’s
            <span>Technology Today</span>
          </h1>
          <p className="lede">
            AI, machines, space, and energy — briefed so you leave with a judgment, not another unread tab.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/news">
              Explore Latest News <Icon name="arrow" size={16} />
            </Link>
            <button className="btn btn-ghost" type="button" onClick={() => setVideo(true)}>
              <span className="play-dot">
                <Icon name="play" size={14} />
              </span>
              Watch Video
            </button>
          </div>
        </div>
        <p className="hero-rail" aria-hidden="true">
          <span>AI</span>
          <span>MACHINES</span>
          <span>SPACE</span>
          <span>FUTURE</span>
        </p>
      </section>

      <section className="ticker" aria-label="Technology signals">
        <div className="ticker-inner">
          <p className="live">
            <i /> Signal desk
          </p>
          <ul>
            {signals.map((signal) => (
              <li key={signal.label}>
                <Link to={signal.to}>
                  <strong>{signal.label}</strong>
                  <span>{signal.note}</span>
                </Link>
              </li>
            ))}
          </ul>
          <a href="#desk">Tune the desk →</a>
        </div>
      </section>

      <div className="home-wrap">
        <div className="home-main">
          <div className="story-row">
            {board.cards.map((article) => (
              <StoryCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mid-grid">
            <section>
              <h2 className="section-label">Latest News</h2>
              <div className="latest-list">
                {board.latest.map((article) => (
                  <StoryCard key={article.slug} article={article} variant="latest" />
                ))}
              </div>
            </section>
            <section>
              <div className="section-head">
                <h2 className="section-label">Featured</h2>
                <Link to="/news">View All News →</Link>
              </div>
              <StoryCard article={board.feature} variant="feature" />
            </section>
          </div>

          <section className="join-banner">
            <Cover variant="earth" />
            <div>
              <h2>The Future Is Closer Than You Think</h2>
              <p>Explore. Learn. Build. A better tomorrow starts with knowledge.</p>
            </div>
            <Link className="btn btn-primary" to="/about#join">
              Join the Future <Icon name="arrow" size={16} />
            </Link>
          </section>
        </div>

        <aside className="sidebar">
          <BriefingDesk lens={lens} onLens={onLens} insights={board.insights} />
          <Newsletter />
          <section className="panel">
            <h2 className="section-label">Trending Topics</h2>
            <div className="topics">
              {topics.map((topic) => (
                <Link key={topic} to={`/search?q=${encodeURIComponent(topic)}`}>
                  {topic}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
      <VideoModal open={video} onClose={() => setVideo(false)} />
    </>
  )
}
