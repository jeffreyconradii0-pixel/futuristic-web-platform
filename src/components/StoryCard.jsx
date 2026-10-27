import { Link } from 'react-router-dom'
import Icon from './Icons'
import Cover from './Covers'

export function Meta({ article, mode = 'card' }) {
  if (mode === 'latest') {
    return (
      <p className="meta">
        <span>{article.kicker}</span>
        <span>
          <Icon name="calendar" size={13} /> {article.displayDate}
        </span>
        <span>
          <Icon name="clock" size={13} /> {article.readTime}
        </span>
      </p>
    )
  }

  return (
    <p className="meta">
      <span>
        <Icon name="user" size={13} /> {article.author}
      </span>
      <span>
        <Icon name="calendar" size={13} /> {article.displayDate}
      </span>
      <span>
        <Icon name="clock" size={13} /> {article.readTime}
      </span>
    </p>
  )
}

export default function StoryCard({ article, variant = 'card' }) {
  if (variant === 'latest') {
    return (
      <Link to={`/article/${article.slug}`} className="latest-item">
        <Cover variant={article.cover} />
        <span>
          <strong>{article.title}</strong>
          <Meta article={article} mode="latest" />
        </span>
      </Link>
    )
  }

  const featured = variant === 'feature'
  return (
    <Link to={`/article/${article.slug}`} className={featured ? 'story-card feature-story' : 'story-card'}>
      <Cover variant={article.cover} kicker={article.kicker} />
      <span className="story-body">
        <strong>{article.title}</strong>
        {featured ? <em>{article.excerpt}</em> : null}
        <Meta article={article} />
      </span>
    </Link>
  )
}
