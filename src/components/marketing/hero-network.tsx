export function HeroNetwork() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full opacity-90"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#4CC9E8" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#10243A" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#081321" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#8FCBFF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#8FCBFF" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#C5D4E3" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#glow)" />
        <g stroke="url(#line)" strokeWidth="1.2" fill="none">
          <path d="M120 720 C 280 520, 420 380, 620 260 S 980 180, 1220 120" />
          <path d="M80 560 C 260 420, 380 360, 560 300 S 900 220, 1320 200" />
          <path d="M200 820 C 360 640, 520 500, 720 420 S 1040 340, 1280 320" />
          <path d="M360 140 C 520 220, 640 300, 800 380 S 1080 500, 1240 580" />
        </g>
        {[
          [620, 260],
          [980, 180],
          [560, 300],
          [900, 220],
          [720, 420],
          [1040, 340],
          [800, 380],
          [360, 640],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="18" fill="#10243A" stroke="#8FCBFF" strokeOpacity="0.5" />
            <circle cx={cx} cy={cy} r="6" fill="#4CC9E8" />
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" />
    </div>
  );
}