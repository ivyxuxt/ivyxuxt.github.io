export default function SpamCover() {
  const emails = [
    { y: 28, label: "Meeting tomorrow...", spam: false },
    { y: 52, label: "WINNER! Claim your prize", spam: true },
    { y: 76, label: "Re: project update", spam: false },
    { y: 100, label: "Buy now — 90% off!!!", spam: true },
    { y: 124, label: "Your invoice is ready", spam: false },
  ];
  return (
    <svg width="100%" height="160" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="spam-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#spam-bg)" />

      {/* Inbox panel */}
      <rect x="15" y="15" width="185" height="135" rx="6" fill="#1d4ed8" opacity="0.25" stroke="#3b82f6" strokeWidth="1" />
      <text x="107" y="30" textAnchor="middle" fontSize="9" fill="#93c5fd" opacity="0.8" fontFamily="monospace">INBOX</text>

      {emails.map(({ y, label, spam }) => (
        <g key={y}>
          <rect x="22" y={y + 2} width="170" height="20" rx="3"
            fill={spam ? "#7f1d1d" : "#1e40af"} opacity={spam ? 0.6 : 0.3} />
          {/* Dot */}
          <circle cx="33" cy={y + 12} r="4" fill={spam ? "#ef4444" : "#60a5fa"} opacity="0.9" />
          {/* Subject */}
          <text x="44" y={y + 15} fontSize="8.5" fill={spam ? "#fca5a5" : "#bfdbfe"} opacity="0.9" fontFamily="monospace">
            {label.length > 22 ? label.slice(0, 22) + "…" : label}
          </text>
          {spam && (
            <rect x="158" y={y + 5} width="26" height="12" rx="3" fill="#ef4444" opacity="0.8" />
          )}
          {spam && (
            <text x="171" y={y + 14} textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">SPAM</text>
          )}
        </g>
      ))}

      {/* Classifier panel */}
      <rect x="215" y="15" width="170" height="135" rx="6" fill="#1e3a8a" opacity="0.3" stroke="#3b82f6" strokeWidth="1" />
      <text x="300" y="32" textAnchor="middle" fontSize="9" fill="#93c5fd" opacity="0.8" fontFamily="monospace">CLASSIFIER</text>

      {/* BERT label */}
      <rect x="232" y="40" width="48" height="20" rx="4" fill="#2563eb" opacity="0.7" />
      <text x="256" y="53" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">BERT</text>

      {/* TF-IDF label */}
      <rect x="292" y="40" width="48" height="20" rx="4" fill="#1d4ed8" opacity="0.6" />
      <text x="316" y="53" textAnchor="middle" fontSize="8" fill="#bfdbfe">TF-IDF</text>

      {/* HAN label */}
      <rect x="262" y="68" width="44" height="20" rx="4" fill="#1e40af" opacity="0.6" />
      <text x="284" y="81" textAnchor="middle" fontSize="9" fill="#bfdbfe">HAN</text>

      {/* Accuracy bars */}
      <text x="232" y="104" fontSize="8" fill="#93c5fd" opacity="0.7">Accuracy</text>
      <rect x="232" y="108" width="120" height="7" rx="2" fill="#1e3a8a" />
      <rect x="232" y="108" width="110" height="7" rx="2" fill="#3b82f6" opacity="0.6" />
      <text x="347" y="116" fontSize="7" fill="#93c5fd" opacity="0.7">97%</text>

      <rect x="232" y="120" width="120" height="7" rx="2" fill="#1e3a8a" />
      <rect x="232" y="120" width="88" height="7" rx="2" fill="#60a5fa" opacity="0.5" />
      <text x="325" y="128" fontSize="7" fill="#93c5fd" opacity="0.6">73%</text>

      <rect x="232" y="132" width="120" height="7" rx="2" fill="#1e3a8a" />
      <rect x="232" y="132" width="103" height="7" rx="2" fill="#93c5fd" opacity="0.4" />
      <text x="340" y="140" fontSize="7" fill="#93c5fd" opacity="0.6">86%</text>

      <text x="200" y="155" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#93c5fd" opacity="0.5">
        NLP · BERT · Logistic Regression · HAN
      </text>
    </svg>
  );
}
