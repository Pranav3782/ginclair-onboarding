const VARIANTS = {
  primary:
    'bg-charcoal text-cream shadow-subtle hover:bg-[#1a1b18] hover:shadow-card active:translate-y-0.5',
  accent:
    'bg-orange-accent text-surface-white shadow-subtle hover:bg-orange-dark active:translate-y-0.5',
  ghost:
    'bg-transparent text-muted-text hover:text-charcoal-text hover:bg-surface-beige/40 border border-transparent',
  subtle:
    'bg-surface-white text-charcoal-text border border-border-cream shadow-subtle hover:bg-cream-dark hover:border-[#c9bca9]',
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
  ariaLabel,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`transition-smooth inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
