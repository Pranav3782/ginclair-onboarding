export default function XPClaimAnimation({ amount = 50 }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-1/2 flex justify-center z-50"
    >
      <span className="animate-floatUp rounded-full bg-orange-accent px-5 py-2 font-serif text-lg font-bold text-white shadow-subtle border border-orange-light">
        +{amount} XP
      </span>
    </div>
  )
}
