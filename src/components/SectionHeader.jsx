export default function SectionHeader({
  className,
  eyebrowClassName,
  eyebrow,
  title,
  description,
}) {
  return (
    <div className={className}>
      {eyebrow && <span className={eyebrowClassName}>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
