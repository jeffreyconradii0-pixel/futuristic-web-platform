import { Link } from 'react-router-dom'
import { lenses } from '../data/articles'

export default function BriefingDesk({ lens, onLens, insights }) {
  return (
    <section className="panel desk" id="desk">
      <div className="section-head">
        <h2 className="section-label">Your desk</h2>
      </div>
      <p className="desk-lead">Pick a lane. The homepage reorders around the judgment, not a feed of everything.</p>
      <div className="lens-row" role="tablist" aria-label="Reading lens">
        {lenses.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === lens}
            className={item.id === lens ? 'on' : ''}
            onClick={() => onLens(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <ol className="insight-list">
        {insights.map((article, index) => (
          <li key={article.slug}>
            <span>{index + 1}</span>
            <p>
              <strong>{article.insight}</strong>
              <Link to={`/article/${article.slug}`}>{article.title}</Link>
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
