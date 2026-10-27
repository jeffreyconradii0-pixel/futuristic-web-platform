import { useId } from 'react'

export default function Logo({ size = 36 }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 36 36" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b9bff" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="10" fill={`url(#${id})`} />
      <path d="M10.5 8.5h13.2a1.15 1.15 0 0 1 0 2.3H12.8v6.1h8.4a1.15 1.15 0 0 1 0 2.3h-8.4v7.8h-2.3V8.5z" fill="#fff" />
      <path d="M21 25.8c3.2-1.4 5.2-4 6-7.6" fill="none" stroke="#d7e6ff" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
