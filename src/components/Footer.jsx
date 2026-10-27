import { Link } from 'react-router-dom'
import { footerNav, site, socials } from '../data/site'
import Icon from './Icons'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="brand" aria-label={site.name}>
          <Logo />
          <span className="brand-text">
            <strong>{site.wordmark}</strong>
            <small>{site.tagline}</small>
          </span>
        </Link>
        <nav className="footer-nav" aria-label="Footer">
          {footerNav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-meta">
          <div className="socials">
            {socials.map((item) => (
              <a key={item.label} href={site.url} aria-label={item.label} title={item.label}>
                <Icon name={item.icon} size={16} />
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
      <p className="footer-note">
        {site.domain} publishes independent technology briefings. We separate a demo from a system that actually ships.
      </p>
    </footer>
  )
}
