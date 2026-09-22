import { useState } from 'react'
import Modal from '../common/Modal'

const LEADERBOARD_DATA = [
  { rank: 1, name: 'Alex Chen', role: 'Staff Engineer @ Stripe', xp: 2450, streak: 28, badge: '🥇' },
  { rank: 2, name: 'Sophia Martinez', role: 'Backend Lead @ Vercel', xp: 2180, streak: 21, badge: '🥈' },
  { rank: 3, name: 'Surya Pranav (You)', role: 'Systems Design Student', xp: 1950, streak: 14, badge: '🥉', isUser: true },
  { rank: 4, name: 'Marcus Vance', role: 'DevOps Engineer @ AWS', xp: 1720, streak: 12 },
  { rank: 5, name: 'Elena Rostova', role: 'Infrastructure Lead @ Meta', xp: 1540, streak: 9 },
  { rank: 6, name: 'David Kim', role: 'Senior Engineer @ Airbnb', xp: 1390, streak: 7 },
  { rank: 7, name: 'Rachel Adams', role: 'Site Reliability Engineer @ Google', xp: 1210, streak: 5 },
]

export default function LeaderboardModal({ isOpen, onClose }) {
  const [filter, setFilter] = useState('weekly')
  const [search, setSearch] = useState('')

  if (!isOpen) return null

  const filteredData = LEADERBOARD_DATA.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="leaderboard-heading">
      <div className="p-5 sm:p-6 bg-surface-white text-charcoal-text">
        <div className="flex items-center justify-between border-b border-border-cream pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-accent text-white font-serif text-xl shadow-subtle">
              🏆
            </div>
            <div>
              <h2 id="leaderboard-heading" className="font-serif text-xl font-bold text-charcoal-text">
                Student Leaderboard
              </h2>
              <p className="text-xs text-muted-text">Top XP earners in Systems Design Foundations</p>
            </div>
          </div>
          <button onClick={onClose} className="text-muted-text hover:text-charcoal-text text-sm p-1">
            ✕
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center rounded-xl bg-surface-beige border border-border-cream p-1">
            <button
              onClick={() => setFilter('weekly')}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
                filter === 'weekly' ? 'bg-charcoal text-cream shadow-sm' : 'text-muted-text hover:text-charcoal-text'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setFilter('alltime')}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
                filter === 'alltime' ? 'bg-charcoal text-cream shadow-sm' : 'text-muted-text hover:text-charcoal-text'
              }`}
            >
              All Time
            </button>
          </div>

          <input
            type="text"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-border-cream bg-surface-beige/40 px-3 py-1.5 text-xs text-charcoal-text placeholder-muted-text focus:outline-none focus:border-orange-accent"
          />
        </div>

        {/* Leaderboard Table List */}
        <div className="mt-4 space-y-2 max-h-[50vh] overflow-y-auto pr-1">
          {filteredData.map((item) => (
            <div
              key={item.rank}
              className={`flex items-center justify-between gap-3 rounded-2xl border p-3.5 transition-all ${
                item.isUser
                  ? 'border-orange-accent/60 bg-orange-accent/10 shadow-subtle'
                  : 'border-border-cream bg-surface-beige/30 hover:bg-surface-beige/70'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center font-bold text-xs font-serif text-charcoal-text">
                  {item.badge || `#${item.rank}`}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className={`text-xs font-bold ${item.isUser ? 'text-orange-accent' : 'text-charcoal-text'}`}>
                      {item.name}
                    </h4>
                    {item.isUser && (
                      <span className="rounded-full bg-orange-accent text-white px-2 py-0.2 text-[9px] font-bold uppercase">
                        You
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-muted-text">{item.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="font-semibold text-muted-text">🔥 {item.streak}d streak</span>
                <span className="font-serif font-bold text-orange-accent bg-orange-accent/15 px-2.5 py-1 rounded-lg border border-orange-accent/30">
                  ⚡ {item.xp} XP
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}
