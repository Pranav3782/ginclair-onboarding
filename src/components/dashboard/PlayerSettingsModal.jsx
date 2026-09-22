import Modal from '../common/Modal'
import Button from '../common/Button'

export default function PlayerSettingsModal({ isOpen, onClose, speed, onSpeedChange, isDarkTheme, onToggleTheme }) {
  if (!isOpen) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="player-modal-heading">
      <div className="p-5 sm:p-6 bg-surface-white text-charcoal-text">
        <div className="flex items-center justify-between border-b border-border-cream pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-charcoal text-cream font-serif font-bold text-lg">
              ⚙️
            </span>
            <div>
              <h2 id="player-modal-heading" className="font-serif text-xl font-bold text-charcoal-text">
                Custom Video Player Settings
              </h2>
              <p className="text-xs text-muted-text">Tailor your viewing experience</p>
            </div>
          </div>
          <button onClick={onClose} className="text-muted-text hover:text-charcoal-text text-sm">
            ✕
          </button>
        </div>

        <div className="mt-5 space-y-4">
          {/* Playback Speed */}
          <div>
            <label className="text-xs font-semibold text-charcoal-text uppercase tracking-wide">
              Default Playback Speed
            </label>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {['1.0x', '1.25x', '1.5x', '2.0x'].map((s) => {
                const isActive = speed === s
                return (
                  <button
                    key={s}
                    onClick={() => onSpeedChange(s)}
                    className={`rounded-xl border py-2 text-xs font-bold transition-all ${
                      isActive
                        ? 'border-orange-accent bg-orange-accent text-white shadow-subtle'
                        : 'border-border-cream bg-surface-beige/60 text-charcoal-text hover:border-orange-accent/50'
                    }`}
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between rounded-xl border border-border-cream bg-surface-beige/40 p-4">
            <div>
              <h4 className="text-xs font-semibold text-charcoal-text">Study Mode Theme</h4>
              <p className="text-[11px] text-muted-text">Toggle between Warm Cream and Deep Dark mode</p>
            </div>
            <button
              onClick={onToggleTheme}
              className={`relative h-7 w-13 rounded-full transition-colors duration-200 ${
                isDarkTheme ? 'bg-charcoal' : 'bg-orange-accent'
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 transform ${
                  isDarkTheme ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-3 border-t border-border-cream flex justify-end">
          <Button variant="accent" onClick={onClose} className="text-xs py-2 px-5">
            Save Preferences
          </Button>
        </div>
      </div>
    </Modal>
  )
}
