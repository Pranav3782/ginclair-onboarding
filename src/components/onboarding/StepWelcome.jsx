import { sound } from '../../utils/audio'

const LOOT_ITEMS = [
  { label: 'Starter XP', value: '+50 XP', icon: '⚡', color: 'bg-orange-accent/15 border-orange-accent/30 text-orange-accent' },
  { label: 'Bonus Coins', value: '25 Coins', icon: '🪙', color: 'bg-amber-500/15 border-amber-500/30 text-amber-700' },
  { label: 'Daily Streak', value: 'Day 1 Started', icon: '🔥', color: 'bg-rose-500/15 border-rose-500/30 text-rose-700' },
]

export default function StepWelcome() {
  return (
    <div className="animate-slideInRight text-center sm:text-left">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-accent/10 border border-orange-accent/30 px-2.5 py-0.5 text-[10px] font-bold text-orange-accent uppercase tracking-wider mb-1">
        🎉 Course Unlocked!
      </div>
      <h2
        id="onboarding-heading"
        className="font-serif text-xl sm:text-2xl font-bold leading-snug text-charcoal-text"
      >
        Welcome to Systems Design Foundations!
      </h2>
      <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-text">
        Your course is ready. We've unlocked your starter loot pack to kickstart your journey:
      </p>

      {/* Gamified Loot Box Grid */}
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {LOOT_ITEMS.map((item) => (
          <div
            key={item.label}
            onClick={() => sound.playPop()}
            className={`cursor-pointer rounded-xl sm:rounded-2xl border p-2.5 sm:p-3.5 text-center transition-all duration-200 hover:scale-105 ${item.color}`}
          >
            <div className="text-xl sm:text-2xl">{item.icon}</div>
            <div className="mt-1 font-serif text-xs sm:text-base font-bold">
              {item.value}
            </div>
            <div className="mt-0.5 text-[9px] sm:text-[11px] font-medium text-muted-text">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-border-cream bg-surface-beige/50 p-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-accent text-white text-base">
          🎯
        </div>
        <p className="text-[11px] sm:text-xs text-charcoal-text leading-tight text-left">
          <span className="font-bold text-charcoal-text">Bite-sized learning:</span> Complete 1 short video daily to keep your streak burning and level up your engineering rank!
        </p>
      </div>
    </div>
  )
}
