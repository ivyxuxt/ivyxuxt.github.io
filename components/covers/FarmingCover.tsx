export default function FarmingCover() {
  return (
    <svg width="100%" height="160" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="farm-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0c4a6e" />
          <stop offset="60%" stopColor="#075985" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <linearGradient id="field-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#farm-sky)" />

      {/* Sun */}
      <circle cx="320" cy="38" r="20" fill="#fbbf24" opacity="0.75" />
      <circle cx="320" cy="38" r="26" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.25" />

      {/* Terraced rice field rows */}
      {[90, 105, 118, 130, 141, 151].map((y, i) => (
        <g key={y}>
          <rect x={0} y={y} width="400" height={12 - i * 0.5} fill="url(#field-grad)" opacity={0.5 + i * 0.08} />
          {/* Water shimmer */}
          <rect x={0} y={y} width="400" height={3} fill="#38bdf8" opacity={0.1 - i * 0.01} />
          {/* Row dividers */}
          <line x1="0" y1={y} x2="400" y2={y} stroke="#4ade80" strokeWidth="1" opacity="0.25" />
          {/* Rice stalks */}
          {Array.from({ length: 20 }).map((_, j) => (
            <g key={j}>
              <line
                x1={10 + j * 20} y1={y + 2}
                x2={10 + j * 20} y2={y - 6 + i}
                stroke="#86efac" strokeWidth="1.2" opacity="0.55"
              />
              <ellipse cx={10 + j * 20} cy={y - 6 + i} rx="2" ry="4" fill="#4ade80" opacity="0.5" />
            </g>
          ))}
        </g>
      ))}

      {/* Causal inference diagram (left panel) */}
      <rect x="15" y="18" width="140" height="65" rx="6" fill="#052e16" opacity="0.7" stroke="#4ade80" strokeWidth="1" />
      <text x="85" y="32" textAnchor="middle" fontSize="9" fill="#86efac" opacity="0.9" fontFamily="monospace">Causal Inference (RCT)</text>
      {/* Treatment vs Control */}
      <rect x="22" y="38" width="48" height="16" rx="3" fill="#15803d" opacity="0.7" />
      <text x="46" y="49" textAnchor="middle" fontSize="8" fill="#bbf7d0">Treatment</text>
      <rect x="100" y="38" width="48" height="16" rx="3" fill="#166534" opacity="0.5" />
      <text x="124" y="49" textAnchor="middle" fontSize="8" fill="#86efac">Control</text>
      {/* Arrow */}
      <line x1="70" y1="46" x2="100" y2="46" stroke="#4ade80" strokeWidth="1.5" opacity="0.6" />
      <polygon points="98,42 106,46 98,50" fill="#4ade80" opacity="0.6" />
      {/* Effect label */}
      <text x="85" y="72" textAnchor="middle" fontSize="8" fill="#86efac" opacity="0.7" fontFamily="monospace">DSR adoption ↑ 23%</text>

      {/* India map silhouette (simple triangle-ish shape) */}
      <path d="M240,15 L270,15 L285,35 L280,55 L270,70 L255,85 L245,75 L235,55 L228,40 Z"
        fill="#15803d" opacity="0.5" stroke="#4ade80" strokeWidth="1" />
      {/* Dot on farming region */}
      <circle cx="258" cy="45" r="5" fill="#fbbf24" opacity="0.85" />
      <circle cx="258" cy="45" r="10" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.35" />
      <text x="258" y="22" textAnchor="middle" fontSize="8" fill="#86efac" opacity="0.7" fontFamily="monospace">India</text>

      <text x="200" y="156" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#86efac" opacity="0.45">
        Causal Inference · RCT · Direct-Seeded Rice
      </text>
    </svg>
  );
}
