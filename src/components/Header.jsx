import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { nav, site } from '../data/site'
import { useTheme } from '../context/Theme'
import Icon from './Icons'
import Logo from './Logo'

export default function Header() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function onSearch(event) {
    event.preventDefault()
    const next = query.trim()
    if (!next) return
    navigate(`/search?q=${encodeURIComponent(next)}`)
    setOpen(false)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label={`${site.name}, ${site.domain}`}>
          <Logo />
          <span className="brand-text">
            <strong>{site.wordmark}</strong>
            <small>{site.domain}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-tools">
          <form className="search" onSubmit={onSearch} role="search">
            <Icon name="search" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search anything..."
              aria-label="Search Futuristic World"
            />
          </form>
          <button className="icon-btn" type="button" onClick={toggle} aria-label="Toggle color theme">
            <Icon name={theme === 'dark' ? 'moon' : 'sun'} />
          </button>
          <button
            className="icon-btn"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button className="backdrop" type="button" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div className="drawer">
            <div className="drawer-head">
              <strong>{site.name}</strong>
              <span>{site.domain}</span>
            </div>
            <form className="search drawer-search" onSubmit={onSearch}>
              <Icon name="search" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search anything..."
                aria-label="Search stories"
              />
            </form>
            <nav className="drawer-nav" aria-label="Mobile">
              {nav.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  )
}
