import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import StoryCard from '../components/StoryCard'
import { articlesByCategory, getAllArticles } from '../data/articles'
import { categories, site } from '../data/site'
import { useTitle } from '../useTitle'

export default function CategoryPage({ slug }) {
  const category = categories[slug]
  const items = slug === 'all' ? getAllArticles() : articlesByCategory(slug)
  const title = slug === 'all' ? 'Latest News' : category.label
  useTitle(title)

  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">{site.domain}</p>
        <h1>{title}</h1>
        <p>
          {slug === 'all'
            ? 'Every briefing on Futuristic World, newest first.'
            : category.description}
        </p>
      </header>
      <div className="page-grid">
        <div className="story-row">
          {items.map((article) => (
            <StoryCard key={article.slug} article={article} />
          ))}
        </div>
        <aside className="sidebar">
          <Newsletter />
          <section className="panel link-list">
            <h2 className="section-label">Desks</h2>
            {Object.entries(categories).map(([key, value]) => (
              <Link key={key} to={`/${key}`}>
                {value.label}
              </Link>
            ))}
          </section>
        </aside>
      </div>
    </div>
  )
}
