type LogoProps = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * PartyCiti crest, redrawn as vector from the brand badge: deep maroon disc,
 * double gold ring, arched serif lockup and the script wordmark.
 */
export default function Logo({
  size = 44,
  className = "",
  title = "PartyCiti Event Catering Services, Cebu",
}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`logo ${className}`.trim()}
      role="img"
      aria-label={title}
    >
      <defs>
        <radialGradient id="pc-disc" cx="50%" cy="40%" r="66%">
          <stop offset="0%" stopColor="#8a1a24" />
          <stop offset="58%" stopColor="#5c0d15" />
          <stop offset="100%" stopColor="#330509" />
        </radialGradient>
        <linearGradient id="pc-gold" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#f8e7b6" />
          <stop offset="38%" stopColor="#d6a74f" />
          <stop offset="70%" stopColor="#b07c2c" />
          <stop offset="100%" stopColor="#f2d99a" />
        </linearGradient>
        <path id="pc-arc" d="M 27 100 A 73 73 0 0 1 173 100" />
      </defs>

      <circle cx="100" cy="100" r="99" fill="url(#pc-disc)" />
      <circle cx="100" cy="100" r="96" fill="none" stroke="url(#pc-gold)" strokeWidth="2.4" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="url(#pc-gold)" strokeWidth="0.9" opacity="0.85" />

      <text
        fill="url(#pc-gold)"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="12.5"
        fontWeight="600"
        letterSpacing="4.4"
      >
        <textPath href="#pc-arc" startOffset="50%" textAnchor="middle">
          EVENT CATERING SERVICES
        </textPath>
      </text>

      <g stroke="url(#pc-gold)" strokeWidth="0.9" opacity="0.45">
        <line x1="56" y1="128" x2="144" y2="128" strokeDasharray="1 3" />
      </g>

      <text
        x="100"
        y="118"
        textAnchor="middle"
        fill="url(#pc-gold)"
        fontFamily="'Pinyon Script', 'Segoe Script', cursive"
        fontSize="44"
      >
        PartyCiti
      </text>

      <text
        x="100"
        y="150"
        textAnchor="middle"
        fill="url(#pc-gold)"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="7.4"
        fontWeight="600"
        letterSpacing="2.6"
        opacity="0.92"
      >
        CEBU · PHILIPPINES
      </text>

      <g fill="url(#pc-gold)" opacity="0.75">
        <circle cx="52" cy="112" r="1.1" />
        <circle cx="148" cy="112" r="1.1" />
        <circle cx="100" cy="170" r="1.15" />
      </g>
    </svg>
  );
}
