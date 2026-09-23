import { useState } from 'react'
import { sound } from '../../utils/audio'

const PERSONAS = [
  { id: 'architect', title: 'System Architect', icon: '🏛️', tag: 'Scalability & Design' },
  { id: 'fullstack', title: 'Full-Stack Artisan', icon: '⚡', tag: 'Frontend + API Master' },
  { id: 'backend', title: 'Backend Specialist', icon: '🛡️', tag: 'High Performance & DBs' },
  { id: 'devops', title: 'Infra & Cloud Pro', icon: '☁️', tag: 'Kubernetes & CI/CD' },
]

export default function StepAvatarSelector({ onSelectPersona }) {
  const [selectedId, setSelectedId] = useState('architect')

  function handlePick(p) {
    sound.playPop()
    setSelectedId(p.id)
    onSelectPersona?.(p)
  }

  return (
    <div className="animate-slideInRight">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-accent/10 border border-orange-accent/30 px-2.5 py-0.5 text-[10px] font-bold text-orange-accent uppercase tracking-wider mb-1">
        <span>Step 2</span> • Gamified Profile
      </div>
      <h2 className="font-serif text-lg sm:text-2xl font-medium leading-snug text-charcoal-text">
        Choose your Engineering Persona
      </h2>
      <p className="mt-1 text-xs sm:text-sm text-muted-text leading-relaxed">
        Select a specialization badge for your student leaderboard profile.
      </p>

      <div className="mt-3.5 sm:mt-5 grid grid-cols-2 gap-2.5">
        {PERSONAS.map((p) => {
          const isSelected = selectedId === p.id
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => handlePick(p)}
              className={`group relative flex flex-col items-center justify-between rounded-xl sm:rounded-2xl border p-3 text-center transition-all duration-200 ${
                isSelected
                  ? 'border-orange-accent bg-orange-accent/10 shadow-md scale-[1.02]'
                  : 'border-border-cream bg-surface-white hover:border-orange-accent/40 hover:bg-surface-beige/40'
              }`}
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-surface-beige text-2xl shadow-subtle group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <div className="mt-2">
                <h3 className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-orange-accent' : 'text-charcoal-text'}`}>
                  {p.title}
                </h3>
                <p className="mt-0.5 text-[10px] text-muted-text">{p.tag}</p>
              </div>
              {isSelected && (
                <div className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-accent text-white text-[9px] font-bold">
                  ✓
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
