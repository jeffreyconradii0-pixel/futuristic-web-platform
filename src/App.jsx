import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import ArticlePage from './pages/Article'
import CategoryPage from './pages/Category'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SearchPage from './pages/Search'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<CategoryPage slug="all" />} />
        <Route path="ai-news" element={<CategoryPage slug="ai-news" />} />
        <Route path="latest-tech" element={<CategoryPage slug="latest-tech" />} />
        <Route path="future-trends" element={<CategoryPage slug="future-trends" />} />
        <Route path="guides" element={<CategoryPage slug="guides" />} />
        <Route path="article/:slug" element={<ArticlePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
