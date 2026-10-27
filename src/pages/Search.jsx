import { Link, useSearchParams } from 'react-router-dom'
import { Meta } from '../components/StoryCard'
import { searchArticles } from '../data/articles'
import { site } from '../data/site'
import { useTitle } from '../useTitle'

export default function SearchPage() {
  const [params] = useSearchParams()
  const query = params.get('q') || ''
  const results = searchArticles(query)
  useTitle(query ? `Search “${query}”` : 'Search')

  return (
    <div className="page narrow">
      <header className="page-hero">
        <p className="eyebrow">{site.domain}</p>
        <h1>{query ? `Results for “${query}”` : 'Search Futuristic World'}</h1>
        <p>{query ? `${results.length} ${results.length === 1 ? 'story' : 'stories'}` : 'Use the search field in the header.'}</p>
      </header>
      <div className="search-results">
        {results.map((article) => (
          <Link key={article.slug} to={`/article/${article.slug}`} className="panel search-hit">
            <p className="eyebrow">{article.category}</p>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <Meta article={article} />
          </Link>
        ))}
        {query && results.length === 0 ? <p className="empty">No stories match that search.</p> : null}
      </div>
    </div>
  )
}
