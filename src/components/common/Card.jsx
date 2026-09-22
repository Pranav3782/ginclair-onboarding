export default function Card({
  icon,
  title,
  description,
  variant = 'beige',
  className = '',
}) {
  const variantStyles = {
    beige: 'bg-surface-beige border-border-cream text-charcoal-text',
    white: 'bg-surface-white border-border-cream text-charcoal-text',
    orange: 'bg-orange-accent border-orange-light text-white',
    charcoal: 'bg-charcoal border-charcoal-border text-cream',
  }

  const isDark = variant === 'orange' || variant === 'charcoal'

  return (
    <div
      className={`card-hover rounded-[22px] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${variantStyles[variant] || variantStyles.beige} ${className}`}
    >
      {icon && (
        <div
          className={`mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl text-xl ${
            isDark
              ? 'bg-white/15 text-white'
              : 'bg-cream/70 text-charcoal-text border border-border-cream/60'
          }`}
        >
          {icon}
        </div>
      )}
      <h3
        className={`font-serif text-lg font-medium leading-snug ${
          isDark ? 'text-white' : 'text-charcoal-text'
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-1.5 text-xs sm:text-sm leading-relaxed ${
          isDark ? 'text-white/80' : 'text-muted-text'
        }`}
      >
        {description}
      </p>
    </div>
  )
}
