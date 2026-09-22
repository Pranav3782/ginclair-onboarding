const STATS = [
  { label: 'XP Points', value: '0' },
  { label: 'Daily Streak', value: '0' },
  { label: 'Bonus Coins', value: '25', highlight: true },
]

export default function StepWelcome() {
  return (
    <div className="animate-slideInRight">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-orange-accent">
        Welcome to Ginclair
      </p>
      <h2
        id="onboarding-heading"
        className="mt-1 font-serif text-lg sm:text-2xl font-medium leading-snug text-charcoal-text"
      >
        Your course is unlocked! Here's your starting balance:
      </h2>
      <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-muted-text">
        Every video lesson you finish gives you XP. Practicing every day builds your daily streak.
      </p>

      <div className="mt-3.5 sm:mt-5 grid grid-cols-3 gap-2 sm:gap-3">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-[14px] sm:rounded-[18px] border p-2 sm:p-4 text-center transition-all duration-200 ${
              stat.highlight
                ? 'border-orange-accent/40 bg-surface-beige/80 shadow-subtle'
                : 'border-border-cream bg-cream/50'
            }`}
          >
            <div
              className={`font-serif text-xl sm:text-2xl font-semibold ${
                stat.highlight ? 'text-orange-accent' : 'text-charcoal-text'
              }`}
            >
              {stat.value}
            </div>
            <div className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs font-medium text-muted-text">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 sm:mt-5 flex items-center gap-2.5 sm:gap-3.5 rounded-[14px] sm:rounded-[18px] border border-border-cream bg-surface-beige/40 p-2.5 sm:p-4">
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-orange-accent/15 text-sm sm:text-lg">
          🪙
        </div>
        <p className="text-[11px] sm:text-sm text-charcoal-text leading-snug sm:leading-relaxed">
          <span className="font-semibold text-charcoal-text">How coins work:</span>{' '}
          Earn 1,000 XP to get 100 Gincoins. Trade coins for streak freezes and course discounts!
        </p>
      </div>
    </div>
  )
}
