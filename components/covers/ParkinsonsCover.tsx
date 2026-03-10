export default function ParkinsonsCover() {
  return (
    <svg width="100%" height="160" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="park-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1f0a14" />
          <stop offset="100%" stopColor="#4c0519" />
        </linearGradient>
        <linearGradient id="brain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#park-bg)" />

      {/* Human silhouette head + shoulders */}
      <ellipse cx="72" cy="55" rx="22" ry="26" fill="#be123c" opacity="0.4" />
      <path d="M50,80 Q55,100 72,108 Q89,100 94,80" fill="#be123c" opacity="0.3" />
      {/* Neck */}
      <rect x="65" y="80" width="14" height="16" fill="#be123c" opacity="0.3" />
      {/* Brain highlight on head */}
      <ellipse cx="72" cy="50" rx="16" ry="18" fill="url(#brain-grad)" opacity="0.55" />
      {/* Brain folds */}
      <path d="M60,48 Q66,40 72,46 Q78,40 84,48" fill="none" stroke="#fda4af" strokeWidth="1.2" opacity="0.7" />
      <path d="M59,56 Q65,64 72,58 Q79,64 85,56" fill="none" stroke="#fda4af" strokeWidth="1.2" opacity="0.6" />
      <line x1="72" y1="38" x2="72" y2="68" stroke="#fda4af" strokeWidth="0.8" opacity="0.4" />

      {/* Tremor / shaky hand */}
      <path d="M94,100 Q98,94 96,100 Q94,106 98,100 Q102,94 100,100 Q98,106 102,100 Q106,94 104,100"
        fill="none" stroke="#fb7185" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />

      {/* Acoustic waveform — voice features */}
      <text x="130" y="22" fontSize="9" fill="#fda4af" opacity="0.6" fontFamily="monospace">Acoustic Features (UPDRS)</text>
      <path
        d="M130,55 L145,55 L150,35 L155,75 L160,25 L165,85 L170,40 L175,70 L180,48 L185,62 L190,52 L195,58 L200,55 L215,55"
        fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinejoin="round" opacity="0.85"
      />
      {/* Second softer wave */}
      <path
        d="M215,55 L225,55 L230,42 L235,68 L240,32 L245,78 L250,44 L255,66 L260,50 L265,60 L270,55 L290,55"
        fill="none" stroke="#fb7185" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5"
      />
      <line x1="125" y1="55" x2="295" y2="55" stroke="#fda4af" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />

      {/* Model comparison table */}
      <rect x="305" y="18" width="85" height="125" rx="5" fill="#7f1d1d" opacity="0.3" stroke="#fb7185" strokeWidth="1" />
      <text x="347" y="32" textAnchor="middle" fontSize="8" fill="#fda4af" opacity="0.8" fontFamily="monospace">Models</text>
      {[
        { name: "XGBoost", bar: 72, best: true },
        { name: "LASSO", bar: 58 },
        { name: "CART", bar: 50 },
        { name: "OLS", bar: 44 },
        { name: "MIO", bar: 62 },
      ].map(({ name, bar, best }, i) => (
        <g key={name}>
          <text x="312" y={48 + i * 20} fontSize="7.5" fill={best ? "#fda4af" : "#fb7185"} opacity={best ? 1 : 0.6} fontFamily="monospace">{name}</text>
          <rect x="312" y={52 + i * 20} width={bar * 0.7} height="6" rx="2" fill={best ? "#f43f5e" : "#be123c"} opacity={best ? 0.85 : 0.5} />
        </g>
      ))}

      <text x="200" y="152" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#fda4af" opacity="0.5">
        ML · Acoustic Features · UPDRS Prediction
      </text>
    </svg>
  );
}
