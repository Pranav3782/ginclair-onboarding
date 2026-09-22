import { useState } from 'react'

const PACES = [
  { id: 'casual', label: '15 mins / day', desc: 'Light & steady', xpBonus: '+10 XP daily' },
  { id: 'standard', label: '30 mins / day', desc: 'Recommended pace', xpBonus: '+25 XP daily', recommended: true },
  { id: 'intensive', label: '45 mins / day', desc: 'Fast-track mastery', xpBonus: '+50 XP daily' },
]

const FOCUS_AREAS = [
  'Systems Architecture',
  'Distributed Databases',
  'High Availability',
]

export default function StepGoalSelector({ onGoalSelected }) {
  const [selectedPace, setSelectedPace] = useState('standard')
  const [selectedFocus, setSelectedFocus] = useState('Systems Architecture')

  function handlePaceSelect(id) {
    setSelectedPace(id)
    onGoalSelected?.({ pace: id, focus: selectedFocus })
  }

  function handleFocusSelect(focus) {
    setSelectedFocus(focus)
    onGoalSelected?.({ pace: selectedPace, focus })
  }

  return (
    <div className="animate-slideInRight">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-orange-accent">
        Custom Learning Path
      </p>
      <h2 className="mt-1 font-serif text-lg sm:text-2xl font-medium leading-snug text-charcoal-text">
        Set your daily goal & focus area
      </h2>
      <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-muted-text">
        Customize your study schedule to stay consistent without burnout.
      </p>

      {/* Pace Options */}
      <div className="mt-3.5 sm:mt-4 space-y-2">
        <label className="text-xs font-semibold text-charcoal-text uppercase tracking-wide">Daily Commitment</label>
        <div className="grid grid-cols-3 gap-2">
          {PACES.map((pace) => {
            const isSelected = selectedPace === pace.id
            return (
              <button
                key={pace.id}
                type="button"
                onClick={() => handlePaceSelect(pace.id)}
                className={`relative rounded-xl border p-2.5 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-orange-accent bg-orange-accent/10 shadow-subtle'
                    : 'border-border-cream bg-surface-white hover:border-orange-accent/50'
                }`}
              >
                {pace.recommended && (
                  <span className="absolute -top-2 right-2 rounded-full bg-orange-accent px-1.5 py-0.5 text-[9px] font-bold text-white uppercase">
                    Best
                  </span>
                )}
                <div className={`text-xs font-bold ${isSelected ? 'text-orange-accent' : 'text-charcoal-text'}`}>
                  {pace.label}
                </div>
                <div className="text-[10px] text-muted-text">{pace.desc}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Focus Area Selection */}
      <div className="mt-3.5 sm:mt-4">
        <label className="text-xs font-semibold text-charcoal-text uppercase tracking-wide">Primary Target Focus</label>
        <div className="mt-1.5 flex flex-wrap gap-2">
          {FOCUS_AREAS.map((focus) => {
            const isSelected = selectedFocus === focus
            return (
              <button
                key={focus}
                type="button"
                onClick={() => handleFocusSelect(focus)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-charcoal text-cream shadow-sm'
                    : 'bg-surface-beige border border-border-cream text-charcoal-text hover:bg-cream'
                }`}
              >
                {isSelected ? '✓ ' : ''}{focus}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
