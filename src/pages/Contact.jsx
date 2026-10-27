import { useState } from 'react'
import { site } from '../data/site'
import { useTitle } from '../useTitle'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'News tip', message: '' })
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  useTitle('Contact')

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.message.trim().length < 12) {
      setDone(false)
      setError('Add your name, a valid email, and a message of at least a sentence.')
      return
    }
    setError('')
    setDone(true)
  }

  return (
    <div className="page contact-page">
      <header className="page-hero">
        <p className="eyebrow">{site.domain}</p>
        <h1>Contact</h1>
        <p>Write the Futuristic World desk. This form stays in the browser until you connect it to mail.</p>
      </header>
      <div className="contact-grid">
        <section className="panel">
          <h2>Direct</h2>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            Tips <a href={`mailto:${site.tips}`}>{site.tips}</a>
          </p>
          <p>
            Partners <a href={`mailto:${site.partners}`}>{site.partners}</a>
          </p>
          <p className="fine-print">Futuristic World · {site.url}</p>
        </section>
        <form className="panel contact-form" onSubmit={onSubmit}>
          {done ? (
            <p className="form-success" role="status">
              Thanks, {form.name}. Nothing was sent. Email {site.email} directly until this form is connected.
            </p>
          ) : (
            <>
              <label>
                Name
                <input name="name" value={form.name} onChange={update} autoComplete="name" />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
              </label>
              <label>
                Topic
                <select name="topic" value={form.topic} onChange={update}>
                  <option>News tip</option>
                  <option>Correction</option>
                  <option>Partnership</option>
                  <option>Something else</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="6" value={form.message} onChange={update} />
              </label>
              {error ? <p className="form-error">{error}</p> : null}
              <button className="btn btn-primary" type="submit">
                Send message
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  )
}
