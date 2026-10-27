import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { useTitle } from '../useTitle'

export default function NotFound() {
  useTitle('Page not found')
  return (
    <div className="page narrow">
      <header className="page-hero">
        <p className="eyebrow">{site.domain}</p>
        <h1>That page isn’t on {site.name}.</h1>
        <p>The link may be old, or the story has not been published here.</p>
        <Link className="btn btn-primary" to="/">
          Back to the homepage
        </Link>
      </header>
    </div>
  )
}
