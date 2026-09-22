import { useState } from 'react'
import OnboardingFlow from './components/onboarding/OnboardingFlow'
import Button from './components/common/Button'

export default function App() {
  const [resetKey, setResetKey] = useState(0)

  function handleReplay() {
    window.localStorage.removeItem('ginclair.onboardingComplete')
    setResetKey((k) => k + 1)
  }

  return (
    <div className="min-h-screen bg-cream text-charcoal-text font-sans selection:bg-orange-accent selection:text-white pb-20">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-border-cream/70 bg-cream/90 backdrop-blur-md px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-charcoal text-cream font-serif font-bold text-base sm:text-lg shadow-subtle">
                G
              </div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-charcoal-text">
                Ginclair
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-text">
              <a href="#overview" className="text-charcoal-text hover:text-orange-accent transition-colors">
                Course Dashboard
              </a>
              <a href="#curriculum" className="hover:text-charcoal-text transition-colors">
                Modules
              </a>
              <a href="#schedule" className="hover:text-charcoal-text transition-colors">
                Leaderboard
              </a>
              <a href="#community" className="hover:text-charcoal-text transition-colors">
                Community
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-surface-beige/60 border border-border-cream px-3 py-1 text-xs font-semibold text-charcoal-text">
              <span className="h-2 w-2 rounded-full bg-orange-accent animate-pulse" />
              Enrolled: Systems Design
            </span>
            <Button onClick={handleReplay} variant="subtle" className="text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4">
              Replay Onboarding
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pt-6 sm:pt-12 lg:pt-16">
        {/* Page Hero Header */}
        <section className="mx-auto max-w-3xl text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] text-charcoal-text">
            Systems Design Foundations
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-muted-text max-w-2xl mx-auto leading-relaxed">
            Your course is ready. Track your progress, build daily streaks, test your knowledge, and connect with fellow engineers all in one place.
          </p>
        </section>

        {/* Asymmetric Bento Grid Layout for Course Features */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          
          {/* Card 1: Gamified Rewards (Tall Beige Card) */}
          <div className="md:col-span-5 lg:col-span-4 rounded-[20px] sm:rounded-[24px] border border-border-cream bg-surface-beige p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card min-h-0 sm:min-h-[420px]">
            <div className="relative w-full h-36 sm:h-56 flex items-center justify-center my-2">
              {/* 3D Reward Box Graphic */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                <div className="absolute bottom-2 w-28 sm:w-32 h-5 sm:h-6 bg-charcoal/15 rounded-full blur-md" />
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-charcoal rounded-2xl shadow-xl flex items-center justify-center transform -rotate-6 transition-transform hover:rotate-0 duration-300">
                  <div className="absolute inset-y-0 w-6 sm:w-8 bg-orange-accent rounded-sm" />
                  <div className="absolute inset-x-0 h-6 sm:h-8 bg-orange-accent rounded-sm" />
                  <div className="absolute -top-4 sm:-top-5 flex gap-1 z-10">
                    <div className="w-7 h-5 sm:w-9 sm:h-7 bg-orange-accent rounded-full border-2 border-orange-light transform -rotate-45 shadow-md" />
                    <div className="w-7 h-5 sm:w-9 sm:h-7 bg-orange-accent rounded-full border-2 border-orange-light transform rotate-45 shadow-md" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-text">
                Gamified Rewards
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-text leading-relaxed">
                Earn XP for every finished lesson. Level up your profile and unlock rewards as you master new concepts.
              </p>
            </div>
          </div>

          {/* Right Top & Middle Grid (7 cols desktop) */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-4 sm:gap-5 lg:gap-6">
            
            {/* Card 2: Interactive Course Schedule */}
            <div className="rounded-[20px] sm:rounded-[24px] bg-orange-accent p-5 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow overflow-hidden relative min-h-0 sm:min-h-[220px]">
              <div className="max-w-md z-10">
                <h3 className="font-serif text-2xl sm:text-4xl font-medium leading-tight">
                  Structured Schedule
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-base text-white/90 leading-relaxed">
                  Follow bite-sized daily modules, set learning goals, and complete your course with confidence.
                </p>
              </div>

              {/* 3D Calendar Graphic */}
              <div className="shrink-0 relative w-36 h-32 sm:w-44 sm:h-40 flex items-center justify-center">
                <div className="absolute bottom-1 w-28 sm:w-32 h-4 sm:h-5 bg-black/20 rounded-full blur-md" />
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-charcoal rounded-2xl p-2.5 sm:p-3 shadow-2xl flex flex-col justify-between transform rotate-3">
                  <div className="absolute -top-3 left-5 sm:left-6 flex gap-8 sm:gap-10 z-20">
                    <div className="w-3 h-5 sm:w-3.5 sm:h-6 bg-orange-accent rounded-full border-2 border-charcoal" />
                    <div className="w-3 h-5 sm:w-3.5 sm:h-6 bg-orange-accent rounded-full border-2 border-charcoal" />
                  </div>
                  <div className="h-5 sm:h-6 w-full bg-orange-accent rounded-lg mb-1.5 sm:mb-2" />
                  <div className="grid grid-cols-4 gap-1 sm:gap-1.5 flex-1 pt-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-md ${
                          i === 6
                            ? 'bg-orange-accent shadow-sm'
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Row: 2 equal cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              
              {/* Card 3: Custom Study Settings */}
              <div className="rounded-[20px] sm:rounded-[24px] border border-border-cream bg-surface-white p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card min-h-0 sm:min-h-[200px]">
                <div className="mb-3 sm:mb-4">
                  <div className="w-14 h-8 sm:w-16 sm:h-9 bg-charcoal rounded-full p-1 flex items-center justify-end shadow-md relative">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-orange-accent rounded-full shadow-md" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-charcoal-text">
                    Custom Player
                  </h3>
                  <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted-text leading-relaxed">
                    Set your video playback speeds, captions, and dark/light study themes.
                  </p>
                </div>
              </div>

              {/* Card 4: Multi-Device Sync */}
              <div className="rounded-[20px] sm:rounded-[24px] border border-border-cream bg-surface-beige p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card min-h-0 sm:min-h-[200px]">
                <div className="mb-3 sm:mb-4 flex justify-end">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-charcoal flex items-center justify-center overflow-hidden shadow-lg border border-charcoal/20">
                    <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal to-orange-accent/40" />
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-orange-accent/80 transform rotate-45 border-dashed" />
                    <div className="absolute w-10 h-5 sm:w-12 sm:h-6 bg-orange-accent/60 rounded-full transform -rotate-12 blur-[1px]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-charcoal-text">
                    Learn Anywhere
                  </h3>
                  <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted-text leading-relaxed">
                    Your progress automatically syncs across mobile, laptop, and tablet seamlessly.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Row: Notifications & Gincoins */}
          {/* Card 5: Daily Streak & Reminders */}
          <div className="md:col-span-7 rounded-[20px] sm:rounded-[24px] bg-charcoal p-5 sm:p-8 text-cream flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card min-h-0 sm:min-h-[200px]">
            <div className="max-w-xs sm:max-w-sm z-10">
              <h3 className="font-serif text-xl sm:text-3xl font-medium text-white">
                Daily Streak Reminders
              </h3>
              <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-cream/70 leading-relaxed">
                Receive helpful daily alerts so you never lose your practice streak or miss a lesson check.
              </p>
            </div>

            <div className="shrink-0 relative w-32 h-24 sm:w-36 sm:h-28 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-b from-[#33342E] to-[#1A1B17] rounded-t-full rounded-b-2xl shadow-2xl relative flex items-end justify-center pb-2 border-t border-white/10">
                  <div className="w-5 h-2.5 sm:w-6 sm:h-3 bg-orange-accent rounded-full" />
                </div>
                <div className="absolute -top-2 right-0 w-7 h-7 sm:w-8 sm:h-8 bg-orange-accent rounded-full text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-lg border-2 border-charcoal">
                  1
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Gincoin Store */}
          <div className="md:col-span-5 rounded-[20px] sm:rounded-[24px] border border-border-cream bg-surface-beige p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card min-h-0 sm:min-h-[200px]">
            <div className="z-10">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-text">
                Gincoin Rewards
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-text leading-relaxed">
                Trade earned coins for streak freezes, student badges, and course discounts.
              </p>
            </div>

            <div className="shrink-0 relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <div className="relative w-14 h-16 sm:w-16 sm:h-20 bg-charcoal rounded-t-full rounded-b-lg shadow-xl flex flex-col items-center justify-end pb-2.5 sm:pb-3">
                <div className="absolute -right-2 top-3 sm:top-4 w-3.5 h-5 sm:w-4 sm:h-6 bg-orange-accent rounded-sm shadow-sm" />
                <div className="w-8 h-5 sm:w-10 sm:h-6 bg-charcoal-card rounded-md border border-white/10" />
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border-cream/80 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-text gap-4">
          <p>© Ginclair Post-Purchase Onboarding. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-charcoal-text transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-charcoal-text transition-colors">Terms of Service</a>
            <a href="#support" className="hover:text-charcoal-text transition-colors">Student Support</a>
          </div>
        </footer>
      </main>

      {/* Onboarding Flow Modal */}
      <OnboardingFlow key={resetKey} />
    </div>
  )
}
