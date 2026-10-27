import { Link, useParams } from 'react-router-dom'
import Cover from '../components/Covers'
import Newsletter from '../components/Newsletter'
import { Meta } from '../components/StoryCard'
import StoryCard from '../components/StoryCard'
import { getArticle, relatedArticles } from '../data/articles'
import { site } from '../data/site'
import { useTitle } from '../useTitle'
import { useState } from 'react'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticle(slug)
  useTitle(article ? article.title : 'Story not found')
  const [copied, setCopied] = useState(false)

  if (!article) {
    return (
      <div className="page narrow">
        <h1>That story isn’t on {site.name}.</h1>
        <Link className="btn btn-primary" to="/news">
          Browse latest news
        </Link>
      </div>
    )
  }

  async function copyLink() {
    const url = `${site.url}/article/${article.slug}`
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const related = relatedArticles(article)

  return (
    <div className="page">
      <article className="article-layout">
        <div>
          <p className="crumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to={`/${article.categorySlug}`}>{article.category}</Link>
          </p>
          <p className="eyebrow">{article.kicker}</p>
          <h1>{article.title}</h1>
          <Meta article={article} />
          {article.insight ? (
            <p className="why">
              <span>Why it matters</span>
              {article.insight}
            </p>
          ) : null}
          <Cover variant={article.cover} />
          <div className="article-body">
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {article.steps ? (
              <ol className="steps">
                {article.steps.map((step, index) => (
                  <li key={step.title}>
                    <span>{index + 1}</span>
                    <div>
                      <h2>{step.title}</h2>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
          <div className="tag-row">
            {article.tags?.map((tag) => (
              <Link key={tag} to={`/search?q=${encodeURIComponent(tag)}`}>
                {tag}
              </Link>
            ))}
            <button type="button" className="text-btn" onClick={copyLink}>
              {copied ? 'Link copied' : 'Copy link'}
            </button>
          </div>
        </div>
        <aside className="sidebar">
          <section className="panel">
            <h2 className="section-label">More stories</h2>
            <div className="latest-list">
              {related.map((item) => (
                <StoryCard key={item.slug} article={item} variant="latest" />
              ))}
            </div>
          </section>
          <Newsletter compact />
        </aside>
      </article>
    </div>
  )
}
