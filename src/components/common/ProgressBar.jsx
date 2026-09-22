export default function ProgressBar({ step, totalSteps }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={step}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-label={`Step ${step} of ${totalSteps}`}
      className="flex items-center gap-2"
    >
      {Array.from({ length: totalSteps }).map((_, i) => {
        const isActive = i < step
        return (
          <div
            key={i}
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-border-cream"
          >
            <div
              className="h-full rounded-full bg-orange-accent transition-all duration-500 ease-out"
              style={{ width: isActive ? '100%' : '0%' }}
            />
          </div>
        )
      })}
    </div>
  )
}
