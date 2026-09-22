import Modal from '../common/Modal'
import Button from '../common/Button'

const REWARDS = [
  {
    id: 'freeze',
    icon: '❄️',
    title: 'Streak Freeze',
    cost: 25,
    description: 'Protect your daily learning streak for 1 missed day.',
    badge: 'Popular',
  },
  {
    id: 'badge',
    icon: '🛡️',
    title: 'Systems Architect Badge',
    cost: 50,
    description: 'Unlock exclusive profile badge in student community leaderboards.',
  },
  {
    id: 'booster',
    icon: '⚡',
    title: '2x XP Booster (24h)',
    cost: 75,
    description: 'Earn double XP on all lesson checks for the next 24 hours.',
    badge: 'Hot',
  },
  {
    id: 'mentorship',
    icon: '🎟️',
    title: '1-on-1 Mentorship Pass',
    cost: 150,
    description: 'Pass for a live 20-minute system design review with a senior engineer.',
  },
]

export default function GincoinStoreModal({ isOpen, onClose, coinBalance, onRedeem }) {
  if (!isOpen) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="store-modal-heading">
      <div className="p-5 sm:p-6 bg-surface-white text-charcoal-text">
        <div className="flex items-center justify-between border-b border-border-cream pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-accent/15 text-xl">
              🪙
            </span>
            <div>
              <h2 id="store-modal-heading" className="font-serif text-xl sm:text-2xl font-bold text-charcoal-text">
                Gincoin Reward Store
              </h2>
              <p className="text-xs text-muted-text">Redeem your hard-earned coins for perks</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-surface-beige px-3 py-1.5 border border-border-cream">
            <span className="text-sm">🪙</span>
            <span className="font-serif text-base font-bold text-orange-accent">{coinBalance}</span>
            <span className="text-xs text-muted-text">Coins</span>
          </div>
        </div>

        <div className="mt-4 space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {REWARDS.map((item) => {
            const canAfford = coinBalance >= item.cost
            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-border-cream bg-surface-beige/40 p-4 transition-all hover:bg-surface-beige/70"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-white text-xl shadow-subtle border border-border-cream">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-sm font-semibold text-charcoal-text">{item.title}</h3>
                      {item.badge && (
                        <span className="rounded-full bg-orange-accent/15 px-2 py-0.5 text-[9px] font-bold text-orange-accent uppercase">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-text">{item.description}</p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-border-cream/50">
                  <span className="font-serif text-sm font-bold text-orange-accent flex items-center gap-1">
                    🪙 {item.cost} Coins
                  </span>
                  <Button
                    variant={canAfford ? 'accent' : 'subtle'}
                    disabled={!canAfford}
                    onClick={() => onRedeem(item)}
                    className="text-xs py-1.5 px-3 mt-1"
                  >
                    {canAfford ? 'Redeem' : 'Need Coins'}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-5 pt-3 border-t border-border-cream flex justify-end">
          <Button variant="ghost" onClick={onClose} className="text-xs py-2 px-4">
            Close Store
          </Button>
        </div>
      </div>
    </Modal>
  )
}
