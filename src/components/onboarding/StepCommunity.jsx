import Card from '../common/Card'

const COMMUNITY_FEATURES = [
  {
    icon: '🏆',
    title: 'Weekly Leaderboard',
    description: 'See top XP earners each week and win bonus coins.',
    variant: 'beige',
  },
  {
    icon: '⚔️',
    title: 'Quiz Battles',
    description: 'Challenge classmates to quick 1-on-1 lesson checks.',
    variant: 'white',
  },
  {
    icon: '🏠',
    title: 'Study Houses',
    description: 'Join a small study group to stay accountable together.',
    variant: 'beige',
  },
]

export default function StepCommunity() {
  return (
    <div className="animate-slideInRight">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-orange-accent">
        Student Community
      </p>
      <h2 className="mt-1 font-serif text-lg sm:text-2xl font-medium leading-snug text-charcoal-text">
        Learn faster alongside fellow engineers
      </h2>
      <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-muted-text">
        You don't have to study alone. Here is what is waiting inside your student hub:
      </p>

      <div className="mt-3.5 sm:mt-5 grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-3">
        {COMMUNITY_FEATURES.map((feature) => (
          <div
            key={feature.title}
            className={`rounded-[14px] sm:rounded-[22px] border p-2.5 sm:p-4 flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-0 transition-all duration-200 ${
              feature.variant === 'white'
                ? 'bg-surface-white border-border-cream'
                : 'bg-surface-beige/60 border-border-cream'
            }`}
          >
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-cream/80 text-base sm:text-xl border border-border-cream/60 sm:mb-3">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-serif text-xs sm:text-base font-semibold sm:font-medium text-charcoal-text">
                {feature.title}
              </h3>
              <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-muted-text leading-tight sm:leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
