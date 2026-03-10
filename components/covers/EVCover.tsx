export default function EVCover() {
  // Simplified NY state outline points
  const nyOutline = "M 170,30 L 230,25 L 260,35 L 275,50 L 265,65 L 280,75 L 270,90 L 250,95 L 240,85 L 220,100 L 200,95 L 185,105 L 170,95 L 155,100 L 145,85 L 150,70 L 140,55 L 155,40 Z";
  const stations = [
    { x: 195, y: 60 }, { x: 220, y: 50 }, { x: 240, y: 70 },
    { x: 210, y: 80 }, { x: 255, y: 82 }, { x: 175, y: 75 },
    { x: 230, y: 90 }, { x: 197, y: 88 },
  ];
  return (
    <svg width="100%" height="160" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ev-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c1200" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#ev-bg)" />

      {/* NY state shape */}
      <path d={nyOutline} fill="#92400e" opacity="0.4" stroke="#f59e0b" strokeWidth="1.5" />

      {/* Charging station dots + small lightning */}
      {stations.map(({ x, y }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="5" fill="#fbbf24" opacity="0.85" />
          <circle cx={x} cy={y} r="9" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.3" />
        </g>
      ))}

      {/* Network edges between stations */}
      {[
        [0, 1], [1, 2], [2, 4], [0, 3], [3, 6], [5, 3], [3, 7], [6, 7],
      ].map(([a, b], i) => (
        <line key={i}
          x1={stations[a].x} y1={stations[a].y}
          x2={stations[b].x} y2={stations[b].y}
          stroke="#fbbf24" strokeWidth="1" opacity="0.3" strokeDasharray="3 2"
        />
      ))}

      {/* EV car (left side) */}
      <g transform="translate(20, 65)">
        {/* Car body */}
        <rect x="0" y="20" width="90" height="30" rx="6" fill="#d97706" opacity="0.8" />
        {/* Cabin */}
        <path d="M18,20 Q25,5 65,5 L75,20Z" fill="#f59e0b" opacity="0.7" />
        {/* Windows */}
        <rect x="22" y="8" width="20" height="12" rx="2" fill="#fef3c7" opacity="0.5" />
        <rect x="46" y="8" width="20" height="12" rx="2" fill="#fef3c7" opacity="0.5" />
        {/* Wheels */}
        <circle cx="20" cy="50" r="11" fill="#1c1200" stroke="#d97706" strokeWidth="2" />
        <circle cx="20" cy="50" r="5" fill="#d97706" opacity="0.6" />
        <circle cx="70" cy="50" r="11" fill="#1c1200" stroke="#d97706" strokeWidth="2" />
        <circle cx="70" cy="50" r="5" fill="#d97706" opacity="0.6" />
        {/* Charging port */}
        <rect x="86" y="28" width="6" height="14" rx="2" fill="#fbbf24" opacity="0.9" />
      </g>

      {/* Charging cable */}
      <path d="M116,87 Q130,87 140,78" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

      {/* Lightning bolt (large, right) */}
      <polygon
        points="340,18 322,72 338,72 318,138 362,65 344,65 366,18"
        fill="#fbbf24" opacity="0.8"
      />
      <polygon
        points="340,18 322,72 338,72 318,138 362,65 344,65 366,18"
        fill="none" stroke="#fef3c7" strokeWidth="1" opacity="0.5"
      />

      {/* Budget label */}
      <text x="340" y="148" textAnchor="middle" fontSize="9" fill="#fbbf24" opacity="0.7" fontFamily="monospace">$1B · NY ZIP codes</text>
      <text x="200" y="153" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#fbbf24" opacity="0.45">
        MIP · Gurobi · Adaptive Optimization
      </text>
    </svg>
  );
}
