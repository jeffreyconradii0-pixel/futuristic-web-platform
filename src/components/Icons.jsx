export default function Icon({ name, size = 16 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (name) {
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16.5 20.5 21" />
        </svg>
      )
    case 'moon':
      return (
        <svg {...common}>
          <path d="M16.5 13.2A6.5 6.5 0 0 1 10.8 4 7 7 0 1 0 20 13.7a6.4 6.4 0 0 1-3.5-.5z" />
        </svg>
      )
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M5.8 5.8l1.4 1.4M16.8 16.8l1.4 1.4M18.2 5.8l-1.4 1.4M7.2 16.8l-1.4 1.4" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      )
    case 'play':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M9 7.5v9l8-4.5-8-4.5z" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )
    case 'user':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3.5V7M16 3.5V7M4 10h16" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4.5l3 2" />
        </svg>
      )
    case 'youtube':
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <path d="M11 10.5v3l3-1.5-3-1.5z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'x':
      return (
        <svg {...common}>
          <path d="M5 5l14 14M19 5 5 19" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 11v5M8 8h.01M12 16v-3.2a2 2 0 0 1 4 0V16" />
        </svg>
      )
    default:
      return null
  }
}
