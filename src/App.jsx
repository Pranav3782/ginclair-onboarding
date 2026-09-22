import { useState } from 'react'
import OnboardingFlow from './components/onboarding/OnboardingFlow'
import Button from './components/common/Button'
import ModuleNavigator from './components/dashboard/ModuleNavigator'
import DailyQuizWidget from './components/dashboard/DailyQuizWidget'
import GincoinStoreModal from './components/dashboard/GincoinStoreModal'
import PlayerSettingsModal from './components/dashboard/PlayerSettingsModal'
import LeaderboardModal from './components/dashboard/LeaderboardModal'
import CertificateModal from './components/dashboard/CertificateModal'
import StreakTracker from './components/dashboard/StreakTracker'
import Toast from './components/common/Toast'
import { sound } from './utils/audio'

export default function App() {
  const [resetKey, setResetKey] = useState(0)
  const [userXP, setUserXP] = useState(50)
  const [gincoins, setGincoins] = useState(25)
  const [streakDays, setStreakDays] = useState(4)
  const [isStoreOpen, setIsStoreOpen] = useState(false)
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false)
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false)
  const [isCertOpen, setIsCertOpen] = useState(false)
  const [playerSpeed, setPlayerSpeed] = useState('1.25x')
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [toast, setToast] = useState(null)

  function showToast(message, type = 'success') {
    setToast({ message, type })
  }

  function handleReplay() {
    sound.playPop()
    window.localStorage.removeItem('ginclair.onboardingComplete')
    setResetKey((k) => k + 1)
    showToast('Onboarding flow replayed! Take the guided tour.', 'info')
  }

  function handleEarnXP(amount, reason) {
    sound.playSuccess()
    setUserXP((prev) => prev + amount)
    showToast(reason || `+${amount} XP Earned!`, 'xp')
  }

  function handleCompleteLesson(lessonId) {
    handleEarnXP(20, 'Completed Lesson! (+20 XP)')
    setGincoins((c) => c + 5)
  }

  function handleRedeemReward(reward) {
    if (gincoins < reward.cost) return
    sound.playCoin()
    setGincoins((prev) => prev - reward.cost)
    showToast(`Successfully redeemed ${reward.title}!`, 'coin')
  }

  return (
    <div className={`min-h-screen font-sans selection:bg-orange-accent selection:text-white pb-20 transition-colors duration-300 ${
      isDarkTheme ? 'bg-[#181816] text-cream' : 'bg-cream text-charcoal-text'
    }`}>
      {/* Top Navbar */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-md px-4 sm:px-6 lg:px-12 py-3 sm:py-4 transition-colors ${
        isDarkTheme ? 'border-white/10 bg-[#181816]/90' : 'border-border-cream/70 bg-cream/90'
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => sound.playPop()}>
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-orange-accent text-white font-serif font-bold text-base sm:text-lg shadow-subtle">
                G
              </div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                Ginclair
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-muted-text">
              <a href="#overview" className="text-orange-accent font-semibold">Course Dashboard</a>
              <a href="#curriculum" className="hover:text-charcoal-text transition-colors">Modules</a>
              <button onClick={() => { sound.playPop(); setIsLeaderboardOpen(true); }} className="hover:text-charcoal-text transition-colors">
                Leaderboard 🏆
              </button>
              <button onClick={() => { sound.playPop(); setIsCertOpen(true); }} className="hover:text-charcoal-text transition-colors">
                Certificate 🎓
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Stats Pills */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-full bg-orange-accent/15 border border-orange-accent/30 px-2.5 py-1 text-xs font-bold text-orange-accent">
                ⚡ <span>{userXP} XP</span>
              </div>
              <button
                onClick={() => { sound.playPop(); setIsStoreOpen(true); }}
                className="flex items-center gap-1 rounded-full bg-surface-beige border border-border-cream px-2.5 py-1 text-xs font-bold text-charcoal-text hover:border-orange-accent transition-all"
              >
                🪙 <span>{gincoins}</span>
              </button>
              <button
                onClick={() => { sound.playPop(); setIsLeaderboardOpen(true); }}
                className="hidden xs:flex items-center gap-1 rounded-full bg-charcoal text-cream px-2.5 py-1 text-xs font-bold hover:bg-orange-accent transition-all"
              >
                🔥 <span>{streakDays}d</span>
              </button>
            </div>

            <Button onClick={handleReplay} variant="subtle" className="text-xs py-1.5 px-3 sm:py-2 sm:px-4">
              Replay Flow
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pt-6 sm:pt-10 lg:pt-14 space-y-8">
        
        {/* Page Hero Header */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-accent/10 border border-orange-accent/30 px-3.5 py-1 text-xs font-bold text-orange-accent mb-3">
            <span className="h-2 w-2 rounded-full bg-orange-accent animate-pulse" />
            Systems Design Foundations • Enrolled
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15]">
            Systems Design Foundations
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
            Your course dashboard is active. Complete daily practice questions, track module lessons, and level up your engineering skills.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => { sound.playPop(); setIsCertOpen(true); }}
              className="text-xs font-semibold text-orange-accent bg-orange-accent/10 hover:bg-orange-accent hover:text-white px-4 py-2 rounded-xl border border-orange-accent/30 transition-all shadow-subtle"
            >
              🎓 View Course Certificate
            </button>
            <button
              onClick={() => { sound.playPop(); setIsLeaderboardOpen(true); }}
              className="text-xs font-semibold text-charcoal-text bg-surface-white hover:bg-surface-beige px-4 py-2 rounded-xl border border-border-cream transition-all shadow-subtle"
            >
              🏆 View Leaderboard Rank
            </button>
          </div>
        </section>

        {/* Dynamic Curriculum Module Navigator */}
        <section id="curriculum">
          <ModuleNavigator onCompleteLesson={handleCompleteLesson} />
        </section>

        {/* Interactive Practice Check & Bento Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Daily Practice Quiz Widget */}
          <div className="md:col-span-6 flex flex-col">
            <DailyQuizWidget onEarnXP={(amt, reason) => handleEarnXP(amt, reason)} />
          </div>

          {/* Right Column: Gamified Rewards & Store Entry */}
          <div
            onClick={() => { sound.playPop(); setIsStoreOpen(true); }}
            className="md:col-span-6 rounded-[24px] border border-border-cream bg-surface-beige p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-accent">
                Gincoin Reward Store
              </span>
              <span className="text-xs font-bold text-orange-accent group-hover:underline">
                Open Store →
              </span>
            </div>

            <div className="my-4 flex items-center justify-center gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-charcoal text-2xl shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform">
                ❄️
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-accent text-3xl shadow-xl transform rotate-6 group-hover:rotate-0 transition-transform">
                🪙
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-charcoal text-2xl shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform">
                🛡️
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-medium text-charcoal-text">
                Redeem Perks & Streak Freezes
              </h3>
              <p className="mt-1 text-xs text-muted-text leading-relaxed">
                You currently have <strong className="text-orange-accent">{gincoins} Gincoins</strong>. Click here to trade coins for streak freezes, badges, and mentorship passes.
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic 7-Day Streak Tracker & Custom Player */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          
          <div className="md:col-span-7 flex flex-col">
            <StreakTracker
              streakCount={streakDays}
              onCheckIn={() => {
                sound.playSuccess()
                setStreakDays((s) => s + 1)
                handleEarnXP(25, 'Streak Checked In! (+25 XP)')
              }}
            />
          </div>

          <div
            onClick={() => { sound.playPop(); setIsPlayerModalOpen(true); }}
            className="md:col-span-5 rounded-[24px] border border-border-cream bg-surface-white p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-card group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-beige text-xl border border-border-cream">
                ⚙️
              </div>
              <span className="text-xs font-bold text-orange-accent bg-orange-accent/15 px-2.5 py-1 rounded-full border border-orange-accent/30">
                Speed: {playerSpeed}
              </span>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-charcoal-text group-hover:text-orange-accent transition-colors">
                Custom Video Player Settings
              </h3>
              <p className="mt-1 text-xs text-muted-text leading-relaxed">
                Configure default playback speeds, video captions, and dark/light study themes.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-border-cream/80 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-text gap-4">
          <p>© Ginclair Post-Purchase Onboarding. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-charcoal-text transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-charcoal-text transition-colors">Terms of Service</a>
            <a href="#support" className="hover:text-charcoal-text transition-colors">Student Support</a>
          </div>
        </footer>
      </main>

      {/* Onboarding Flow Modal */}
      <OnboardingFlow
        key={resetKey}
        onComplete={(goal) => {
          showToast(`Learning path set to ${goal.focus} (${goal.pace})!`, 'success')
        }}
      />

      {/* Gincoin Reward Store Modal */}
      <GincoinStoreModal
        isOpen={isStoreOpen}
        onClose={() => setIsStoreOpen(false)}
        coinBalance={gincoins}
        onRedeem={handleRedeemReward}
      />

      {/* Custom Video Player Settings Modal */}
      <PlayerSettingsModal
        isOpen={isPlayerModalOpen}
        onClose={() => setIsPlayerModalOpen(false)}
        speed={playerSpeed}
        onSpeedChange={(spd) => {
          sound.playPop()
          setPlayerSpeed(spd)
          showToast(`Playback speed set to ${spd}`, 'info')
        }}
        isDarkTheme={isDarkTheme}
        onToggleTheme={() => {
          sound.playPop()
          setIsDarkTheme((d) => !d)
          showToast(isDarkTheme ? 'Switched to Light Theme' : 'Switched to Dark Theme', 'info')
        }}
      />

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
      />

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isCertOpen}
        onClose={() => setIsCertOpen(false)}
        userName="Surya Pranav"
        xp={userXP}
      />

      {/* Active Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}
