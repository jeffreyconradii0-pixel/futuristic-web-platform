import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
