export default function GenAICover() {
  return (
    <svg width="100%" height="160" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="genai-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <linearGradient id="doc-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#genai-bg)" />

      {/* Document / repair order */}
      <rect x="30" y="25" width="80" height="100" rx="5" fill="url(#doc-grad)" opacity="0.95" />
      <line x1="42" y1="45" x2="98" y2="45" stroke="#6366f1" strokeWidth="2" opacity="0.5" />
      <line x1="42" y1="56" x2="98" y2="56" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
      <line x1="42" y1="67" x2="85" y2="67" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
      <line x1="42" y1="78" x2="98" y2="78" stroke="#6366f1" strokeWidth="2" opacity="0.3" />
      <line x1="42" y1="89" x2="72" y2="89" stroke="#6366f1" strokeWidth="2" opacity="0.3" />
      {/* Small car icon on doc */}
      <rect x="42" y="98" width="36" height="16" rx="3" fill="#a5b4fc" opacity="0.6" />
      <ellipse cx="49" cy="114" rx="5" ry="5" fill="#6366f1" opacity="0.8" />
      <ellipse cx="71" cy="114" rx="5" ry="5" fill="#6366f1" opacity="0.8" />

      {/* Arrow */}
      <path d="M118,80 L152,80" stroke="#a5b4fc" strokeWidth="2.5" markerEnd="url(#arrow)" opacity="0.8" />
      <polygon points="150,75 162,80 150,85" fill="#a5b4fc" opacity="0.8" />

      {/* Brain / AI circle */}
      <circle cx="220" cy="80" r="42" fill="#4338ca" opacity="0.3" />
      <circle cx="220" cy="80" r="32" fill="#4338ca" opacity="0.4" />
      {/* Brain lobes */}
      <path d="M200,72 Q208,58 220,65 Q232,58 240,72 Q248,86 240,96 Q232,106 220,102 Q208,106 200,96 Q192,86 200,72Z"
        fill="none" stroke="#a5b4fc" strokeWidth="1.5" opacity="0.9" />
      <line x1="220" y1="65" x2="220" y2="102" stroke="#a5b4fc" strokeWidth="1" opacity="0.5" />
      <path d="M205,76 Q212,70 220,74" fill="none" stroke="#c7d2fe" strokeWidth="1" opacity="0.7" />
      <path d="M220,74 Q228,70 235,76" fill="none" stroke="#c7d2fe" strokeWidth="1" opacity="0.7" />
      <path d="M203,86 Q210,92 220,88" fill="none" stroke="#c7d2fe" strokeWidth="1" opacity="0.6" />
      <path d="M220,88 Q230,92 237,86" fill="none" stroke="#c7d2fe" strokeWidth="1" opacity="0.6" />

      {/* Arrow out */}
      <polygon points="262,75 274,80 262,85" fill="#a5b4fc" opacity="0.8" />

      {/* Output text lines */}
      <rect x="280" y="45" width="90" height="70" rx="5" fill="#ffffff" opacity="0.08" />
      <line x1="290" y1="62" x2="360" y2="62" stroke="#a5b4fc" strokeWidth="2" opacity="0.6" />
      <line x1="290" y1="73" x2="355" y2="73" stroke="#a5b4fc" strokeWidth="2" opacity="0.5" />
      <line x1="290" y1="84" x2="362" y2="84" stroke="#a5b4fc" strokeWidth="2" opacity="0.5" />
      <line x1="290" y1="95" x2="348" y2="95" stroke="#a5b4fc" strokeWidth="2" opacity="0.4" />
      {/* Checkmark */}
      <polyline points="290,104 298,112 312,98" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />

      {/* Label */}
      <text x="200" y="150" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#a5b4fc" opacity="0.7">
        Vision-Language · Prompt Optimization
      </text>
    </svg>
  );
}
