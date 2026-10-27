import { useId } from 'react'

export default function Cover({ variant = 'ai', kicker }) {
  const uid = useId().replace(/:/g, '')
  return (
    <div className={`cover cover-${variant}`}>
      <svg viewBox={variant === 'hero' ? '0 0 800 640' : '0 0 640 400'} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#07111f" />
            <stop offset="0.55" stopColor="#12315f" />
            <stop offset="1" stopColor="#071018" />
          </linearGradient>
          <radialGradient id={`${uid}-glow`} cx="50%" cy="45%" r="45%">
            <stop offset="0" stopColor="#7dd3ff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#7dd3ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <Scene variant={variant} uid={uid} />
      </svg>
      {kicker ? <span className="kicker">{kicker}</span> : null}
    </div>
  )
}

function Scene({ variant, uid }) {
  if (variant === 'transport') {
    return (
      <>
        <rect width="640" height="400" fill={`url(#${uid}-sky)`} />
        <circle cx="500" cy="90" r="70" fill="#ffb36b" opacity="0.85" />
        <path d="M0 280h640v120H0z" fill="#071018" />
        {[40, 90, 140, 210, 270, 340, 410, 480, 540].map((x, i) => (
          <rect key={x} x={x} y={180 - (i % 4) * 28} width={36 + (i % 3) * 10} height={120 + (i % 4) * 20} fill="#0c1c33" />
        ))}
        <g transform="translate(150 150)">
          <path d="M20 70h250c40 0 70-24 80-50l18-8H70L20 70z" fill="#d7ecff" />
          <path d="M70 40h150l30 28H60z" fill="#183153" />
          <circle cx="90" cy="78" r="12" fill="#07111f" />
          <circle cx="230" cy="78" r="12" fill="#07111f" />
        </g>
      </>
    )
  }

  if (variant === 'chip' || variant === 'quantum') {
    return (
      <>
        <rect width="640" height="400" fill="#061226" />
        <g stroke="#3ec6ff" strokeWidth="2" opacity="0.8">
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={i} d={`M${40 + i * 70} 20v70M${40 + i * 70} 310v70M20 ${50 + i * 40}h70M540 ${50 + i * 40}h80`} />
          ))}
        </g>
        <rect x="170" y="80" width="300" height="230" rx="28" fill="#0b1d3a" stroke="#67e8f9" strokeWidth="3" />
        <rect x="230" y="130" width="180" height="130" rx="16" fill="#12315c" />
        <circle cx="320" cy="195" r="34" fill="none" stroke="#7dd3fc" strokeWidth="6" />
        <circle cx="320" cy="195" r="8" fill="#e0f2fe" />
        {variant === 'quantum' && (
          <ellipse cx="320" cy="195" rx="110" ry="36" fill="none" stroke="#a78bfa" strokeWidth="2" />
        )}
      </>
    )
  }

  if (variant === 'nasa' || variant === 'earth') {
    return (
      <>
        <rect width="640" height="400" fill="#050b16" />
        <circle cx="180" cy="430" r="260" fill="#1d4ed8" />
        <circle cx="180" cy="430" r="260" fill="#38bdf8" opacity="0.25" />
        <path d="M40 250c80-30 150-10 220 16 70 26 140 8 220-20" fill="none" stroke="#93c5fd" strokeWidth="8" opacity="0.5" />
        <g transform="translate(400 90)">
          <rect x="0" y="40" width="120" height="16" rx="4" fill="#dbeafe" />
          <rect x="48" y="10" width="24" height="76" rx="4" fill="#93c5fd" />
          <circle cx="60" cy="48" r="10" fill="#38bdf8" />
        </g>
      </>
    )
  }

  if (variant === 'robots') {
    return (
      <>
        <rect width="640" height="400" fill={`url(#${uid}-sky)`} />
        <g transform="translate(180 70)" fill="#dbeafe">
          <rect x="70" y="0" width="140" height="110" rx="28" />
          <circle cx="115" cy="52" r="10" fill="#07111f" />
          <circle cx="165" cy="52" r="10" fill="#07111f" />
          <rect x="110" y="120" width="60" height="90" rx="16" />
          <rect x="40" y="130" width="60" height="16" rx="8" />
          <rect x="180" y="130" width="60" height="16" rx="8" />
          <rect x="90" y="210" width="22" height="70" rx="8" />
          <rect x="160" y="210" width="22" height="70" rx="8" />
        </g>
      </>
    )
  }

  if (variant === 'gpt') {
    return (
      <>
        <rect width="640" height="400" fill="#071428" />
        <circle cx="320" cy="200" r="120" fill={`url(#${uid}-glow)`} />
        <text x="320" y="228" textAnchor="middle" fontSize="120" fontWeight="800" fill="#e0f2fe">
          AI
        </text>
      </>
    )
  }

  if (variant === 'energy') {
    return (
      <>
        <rect width="640" height="400" fill="#07120c" />
        <circle cx="470" cy="120" r="60" fill="#fbbf24" />
        <path d="M80 300h80l30-70 40 110 36-150 30 110h220" fill="none" stroke="#4ade80" strokeWidth="6" />
      </>
    )
  }

  if (variant === 'guide') {
    return (
      <>
        <rect width="640" height="400" fill="#10182b" />
        <rect x="170" y="70" width="300" height="250" rx="18" fill="#1e293b" />
        <path d="M210 130h220M210 170h180M210 210h200M210 250h120" stroke="#93c5fd" strokeWidth="8" strokeLinecap="round" />
      </>
    )
  }

  if (variant === 'hero') {
    return (
      <>
        <rect width="800" height="640" fill="#06101c" />
        <circle cx="560" cy="150" r="150" fill="#1d4ed8" />
        <circle cx="590" cy="130" r="120" fill="#7dd3fc" opacity="0.28" />
        <circle cx="520" cy="120" r="46" fill="#dbeafe" opacity="0.18" />
        <path d="M80 390c120-70 220-30 340 16 80 30 180 10 300-36v270H80z" fill="#0c2344" />
        {[180, 240, 300, 360, 430, 500, 560, 630, 700].map((x, index) => (
          <g key={x}>
            <rect x={x} y={210 - (index % 5) * 26} width={42} height={250} rx="4" fill={index % 2 ? '#102848' : '#16325c'} />
            <rect x={x + 8} y={230} width="8" height="8" fill="#7dd3fc" opacity="0.8" />
            <rect x={x + 22} y={250} width="8" height="8" fill="#fbbf24" opacity="0.7" />
            <rect x={x + 8} y={280} width="8" height="8" fill="#7dd3fc" opacity="0.55" />
          </g>
        ))}
        <ellipse cx="430" cy="180" rx="46" ry="14" fill="#e0f2fe" opacity="0.85" />
        <ellipse cx="300" cy="230" rx="28" ry="8" fill="#bfdbfe" opacity="0.55" />
      </>
    )
  }

  return (
    <>
      <rect width="640" height="400" fill={`url(#${uid}-sky)`} />
      <circle cx="430" cy="190" r="120" fill={`url(#${uid}-glow)`} />
      <g transform="translate(210 70)" fill="none" stroke="#bfe9ff" strokeWidth="3">
        <ellipse cx="120" cy="120" rx="78" ry="96" />
        <path d="M70 110h100M80 150h80" />
        <circle cx="120" cy="118" r="16" />
        <path d="M40 80c30-40 130-40 160 0" />
        <path d="M30 40h30M220 40h-30M50 200h24M190 200h-20" />
      </g>
      <g stroke="#67e8f9" strokeWidth="1.5" opacity="0.7">
        <path d="M80 40h40v24M520 60h50M500 300h80M60 320h90" />
      </g>
    </>
  )
}
