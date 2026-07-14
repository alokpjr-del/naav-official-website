export default function FeatureCard({
  className,
  iconClassName,
  icon,
  title,
  description,
  style,
  children,
}) {
  return (
    <div className={className} style={style}>
      <div className={iconClassName}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}
