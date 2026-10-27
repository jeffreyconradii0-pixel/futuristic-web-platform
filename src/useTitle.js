import { useEffect } from 'react'
import { site } from './data/site'

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : `${site.name} — ${site.domain}`
  }, [title])
}
