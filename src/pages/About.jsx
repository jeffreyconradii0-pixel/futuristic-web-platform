import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import { categories, site } from '../data/site'
import { useTitle } from '../useTitle'

const pillars = [
  ['AI News', 'Models, agents, and the workflows they actually change.', '/ai-news'],
  ['Latest Tech', 'Devices, energy, space, and the systems under the demo.', '/latest-tech'],
  ['Future Trends', 'The industries that will look different if the work ships.', '/future-trends'],
  ['Guides', 'A short method for leaving a story with one usable sentence.', '/guides'],
]

export default function About() {
  useTitle('About')

  return (
    <div className="page about">
      <header className="page-hero">
        <p className="eyebrow">{site.domain}</p>
        <h1>{site.name}</h1>
        <p className="lede">
          {site.tagline}. {site.name} is an independent technology publication at {site.domain}. We explain AI, machines, space, and energy in language you can finish.
        </p>
      </header>

      <section className="about-grid">
        <article className="panel">
          <h2>What we publish</h2>
          <p>
            Briefings you can finish. Guides you can reuse. Each story carries a “why it matters” line so the homepage can reorder around what you care about, and remember that choice in this browser.
          </p>
          <p>
            The newsroom name on bylines is the Futuristic World desk, alongside Tech Journal and Space Desk.
          </p>
        </article>
        <article className="panel">
          <h2>How to read us</h2>
          <p>
            Start on the homepage, pick a lane, and open the story whose judgment you want to test. Leave with a sentence you could repeat.
          </p>
          <Link className="btn btn-primary" to="/guides">
            Read the guides
          </Link>
        </article>
      </section>

      <section>
        <h2 className="section-label">Coverage</h2>
        <div className="pillar-grid">
          {pillars.map(([title, copy, href]) => (
            <Link key={title} to={href} className="panel pillar">
              <h3>{title}</h3>
              <p>{copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="panel standards">
        <h2>Editorial standards</h2>
        <ul>
          <li>We separate a demo from a deployment.</li>
          <li>Every briefing should survive the sentence “this matters because.”</li>
          <li>Guides tell you what this frontend can and cannot do.</li>
          <li>Corrections go to {site.tips}.</li>
        </ul>
      </section>

      <section id="join" className="join-block">
        <div>
          <p className="eyebrow">{site.tagline}</p>
          <h2>Join the Future</h2>
          <p>
            {site.domain} is the home of this desk. Partnerships: {site.partners}. Tips: {site.tips}.
          </p>
          <Link className="text-link" to="/contact">
            Contact the desk →
          </Link>
        </div>
        <Newsletter />
      </section>

      <p className="fine-print">
        Sections: {Object.values(categories).map((item) => item.label).join(', ')}.
      </p>
    </div>
  )
}
