import { useState } from 'react'

const DAYS = [
  { day: 'M', full: 'Mon', completed: true },
  { day: 'T', full: 'Tue', completed: true },
  { day: 'W', full: 'Wed', completed: true },
  { day: 'T', full: 'Thu', completed: true },
  { day: 'F', full: 'Fri', completed: false, isToday: true },
  { day: 'S', full: 'Sat', completed: false },
  { day: 'S', full: 'Sun', completed: false },
]

export default function StreakTracker({ streakCount = 4, onCheckIn }) {
  const [daysState, setDaysState] = useState(DAYS)
  const todayDone = daysState.find((d) => d.isToday)?.completed

  function handleCheckInToday() {
    if (todayDone) return
    setDaysState((prev) =>
      prev.map((d) => (d.isToday ? { ...d, completed: true } : d))
    )
    onCheckIn?.()
  }

  return (
    <div className="rounded-[24px] bg-charcoal p-5 sm:p-7 text-cream flex flex-col justify-between shadow-subtle">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-accent text-white text-base font-bold shadow-md">
            🔥
          </span>
          <div>
            <h3 className="font-serif text-lg font-medium text-white leading-tight">Daily Streak Tracker</h3>
            <p className="text-[11px] text-cream/70">Keep your practice momentum active</p>
          </div>
        </div>
        <span className="rounded-full bg-orange-accent/20 border border-orange-accent/40 px-3 py-1 text-xs font-bold text-orange-accent">
          {streakCount + (todayDone ? 1 : 0)} Day Streak!
        </span>
      </div>

      {/* 7-Day Dots Grid */}
      <div className="mt-4 grid grid-cols-7 gap-2 text-center">
        {daysState.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-semibold text-cream/60">{item.day}</span>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold transition-all ${
                item.completed
                  ? 'bg-orange-accent text-white shadow-md scale-105'
                  : item.isToday
                  ? 'border-2 border-dashed border-orange-accent bg-white/10 text-orange-accent animate-pulse'
                  : 'bg-white/10 text-cream/40'
              }`}
            >
              {item.completed ? '✓' : item.isToday ? '★' : '•'}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
        <p className="text-xs text-cream/80">
          {todayDone ? '🎉 Today check-in completed!' : 'Complete 1 lesson check today to extend streak'}
        </p>
        {!todayDone && (
          <button
            onClick={handleCheckInToday}
            className="text-xs font-bold text-white bg-orange-accent hover:bg-orange-dark px-3 py-1.5 rounded-xl transition-all shadow-md"
          >
            Check In Now
          </button>
        )}
      </div>
    </div>
  )
}
