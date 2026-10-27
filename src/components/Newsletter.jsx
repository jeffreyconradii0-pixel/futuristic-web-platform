import { useState } from 'react'
import { perks } from '../data/site'

export default function Newsletter({ compact = false }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setDone(false)
      setError('Enter a valid email address.')
      return
    }
    setError('')
    setDone(true)
  }

  return (
    <section className={compact ? 'newsletter newsletter-compact' : 'newsletter'}>
      <h2>Stay Ahead of the Curve</h2>
      <p>Get the latest AI, robotics, space, and energy briefings in one short note.</p>
      {done ? (
        <p className="form-success" role="status">
          Thanks. This frontend does not store email yet, so nothing was saved. Connect an email service before launch, or write hello@futuristicworld.us.
        </p>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            aria-label="Email address"
            autoComplete="email"
          />
          <button className="btn btn-primary btn-sm" type="submit">
            Subscribe →
          </button>
        </form>
      )}
      {error ? <p className="form-error">{error}</p> : null}
      <ul className="perks">
        {perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>
    </section>
  )
}
