export default function FraudCover() {
  return (
    <svg width="100%" height="160" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fraud-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#022c22" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#fraud-bg)" />

      {/* Credit card */}
      <rect x="25" y="35" width="130" height="82" rx="8" fill="#065f46" stroke="#34d399" strokeWidth="1.5" opacity="0.9" />
      <rect x="25" y="55" width="130" height="18" fill="#059669" opacity="0.5" />
      {/* Chip */}
      <rect x="40" y="40" width="22" height="18" rx="3" fill="#fbbf24" opacity="0.8" />
      <line x1="51" y1="40" x2="51" y2="58" stroke="#d97706" strokeWidth="1" opacity="0.6" />
      <line x1="40" y1="49" x2="62" y2="49" stroke="#d97706" strokeWidth="1" opacity="0.6" />
      {/* Card number dots */}
      {[40, 58, 76, 94].map((x) => (
        <g key={x}>
          <circle cx={x} cy="85" r="3" fill="#6ee7b7" opacity="0.7" />
          <circle cx={x + 8} cy="85" r="3" fill="#6ee7b7" opacity="0.7" />
          <circle cx={x + 16} cy="85" r="3" fill="#6ee7b7" opacity="0.7" />
        </g>
      ))}
      {/* Bank name line */}
      <rect x="40" y="100" width="60" height="7" rx="2" fill="#6ee7b7" opacity="0.3" />

      {/* Alert triangle on card */}
      <polygon points="120,38 136,65 104,65" fill="#ef4444" opacity="0.9" />
      <text x="120" y="59" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">!</text>

      {/* Imbalance bar chart */}
      <g transform="translate(175, 20)">
        <text x="55" y="12" textAnchor="middle" fontSize="9" fill="#6ee7b7" opacity="0.7">Fraud vs. Legit</text>
        {/* Legit bar (tall) */}
        <rect x="10" y="20" width="30" height="95" rx="3" fill="#059669" opacity="0.6" />
        <text x="25" y="17" textAnchor="middle" fontSize="8" fill="#6ee7b7" opacity="0.6">96%</text>
        {/* Fraud bar (short) */}
        <rect x="55" y="100" width="30" height="15" rx="3" fill="#ef4444" opacity="0.8" />
        <text x="70" y="97" textAnchor="middle" fontSize="8" fill="#fca5a5" opacity="0.8">4%</text>
        {/* Baseline */}
        <line x1="0" y1="115" x2="110" y2="115" stroke="#6ee7b7" strokeWidth="1" opacity="0.3" />
        <text x="25" y="128" textAnchor="middle" fontSize="8" fill="#6ee7b7" opacity="0.5">Legit</text>
        <text x="70" y="128" textAnchor="middle" fontSize="8" fill="#fca5a5" opacity="0.6">Fraud</text>
      </g>

      {/* CatBoost label + shield */}
      <circle cx="340" cy="70" r="30" fill="#065f46" stroke="#34d399" strokeWidth="1.5" opacity="0.7" />
      <path d="M340,48 L356,56 L356,72 Q356,86 340,92 Q324,86 324,72 L324,56 Z" fill="#059669" opacity="0.5" />
      <path d="M340,48 L356,56 L356,72 Q356,86 340,92 Q324,86 324,72 L324,56 Z" fill="none" stroke="#34d399" strokeWidth="1.5" opacity="0.8" />
      <polyline points="330,70 337,78 352,62" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" opacity="0.95" />

      <text x="200" y="152" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#6ee7b7" opacity="0.6">
        CatBoost · Feature Engineering · Imbalanced Data
      </text>
    </svg>
  );
}
