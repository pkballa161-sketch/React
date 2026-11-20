type LogoProps = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * PartyCiti crest — the brand artwork itself, cropped to the disc with the
 * white background knocked out. Small sizes use the 96px export so the gold
 * rim stays crisp; larger placements use the full 512px master.
 */
export default function Logo({
  size = 44,
  className = "",
  title = "PartyCiti Event Catering Services, Cebu",
}: LogoProps) {
  const src = size <= 64 ? "/images/logo-96.png" : "/images/logo.png";

  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={title}
      className={`logo ${className}`.trim()}
      decoding="async"
    />
  );
}
