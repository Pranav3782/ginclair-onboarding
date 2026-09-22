import { useEffect } from 'react'

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.()
    }, 3200)
    return () => clearTimeout(timer)
  }, [onClose])

  const icons = {
    success: '🎉',
    xp: '⚡',
    coin: '🪙',
    info: '💡',
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-border-cream/80 bg-charcoal text-cream px-4 py-3 shadow-2xl animate-popIn">
      <span className="text-xl">{icons[type] || '✨'}</span>
      <p className="text-xs sm:text-sm font-medium tracking-tight text-white">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 text-cream/60 hover:text-white text-xs p-1"
        aria-label="Dismiss toast"
      >
        ✕
      </button>
    </div>
  )
}
