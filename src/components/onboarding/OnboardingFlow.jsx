import { useState } from 'react'
import Modal from '../common/Modal'
import Button from '../common/Button'
import ProgressBar from '../common/ProgressBar'
import StepWelcome from './StepWelcome'
import StepAvatarSelector from './StepAvatarSelector'
import StepSwipeTest from './StepSwipeTest'
import StepGoalSelector from './StepGoalSelector'
import XPClaimAnimation from './XPClaimAnimation'
import ConfettiCanvas from './ConfettiCanvas'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { sound } from '../../utils/audio'

const TOTAL_STEPS = 4

const QUEST_TITLES = [
  'Quest 1: Claim Starter Loot Pack 🎁',
  'Quest 2: Pick Engineering Persona 🛡️',
  'Quest 3: 10-Second Practice Warmup 🎯',
  'Quest 4: Set Daily Commitment ⚡',
]

export default function OnboardingFlow({ onComplete }) {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useLocalStorage(
    'ginclair.onboardingComplete',
    false
  )
  const [isOpen, setIsOpen] = useState(!hasCompletedOnboarding)
  const [step, setStep] = useState(1)
  const [hasAnsweredPreview, setHasAnsweredPreview] = useState(false)
  const [persona, setPersona] = useState({ id: 'architect', title: 'System Architect' })
  const [userGoal, setUserGoal] = useState({ pace: 'standard', focus: 'Systems Architecture' })
  const [isClaiming, setIsClaiming] = useState(false)
  const [isClaimed, setIsClaimed] = useState(false)

  function goNext() {
    sound.playPop()
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }

  function goPrevious() {
    sound.playPop()
    setStep((s) => Math.max(s - 1, 1))
  }

  function handleClaim() {
    if (isClaiming || isClaimed) return
    sound.playCoin()
    setIsClaiming(true)
    window.setTimeout(() => {
      sound.playSuccess()
      setIsClaimed(true)
    }, 150)
    window.setTimeout(() => {
      setHasCompletedOnboarding(true)
      setIsOpen(false)
      onComplete?.({ ...userGoal, persona })
    }, 1800)
  }

  const canGoNext = step !== 3 || hasAnsweredPreview

  if (!isOpen) return null

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} labelledBy="onboarding-heading">
      <div className="relative bg-surface-white text-charcoal-text overflow-hidden">
        {isClaimed && <ConfettiCanvas />}
        {isClaiming && <XPClaimAnimation amount={50} />}

        {/* Post-Purchase Splash Top Verification Ribbon */}
        <div className="bg-charcoal text-cream px-4 py-2 flex items-center justify-between text-[11px] font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-bold">Purchase Verified</span>
            <span className="text-cream/40">• Order #GIN-8921</span>
          </div>
          <span className="text-orange-accent font-bold uppercase tracking-wider">Ginclair Pass</span>
        </div>

        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-border-cream/80 px-4 py-3 sm:px-6 sm:py-3.5 bg-cream/40">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-accent text-white font-serif font-bold text-sm shadow-subtle">
              G
            </div>
            <div>
              <span className="font-serif text-sm sm:text-base font-bold text-charcoal-text block leading-none">
                Ginclair Onboarding
              </span>
              <span className="text-[10px] text-muted-text font-medium">
                {QUEST_TITLES[step - 1]}
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close onboarding"
            className="transition-smooth rounded-full p-1.5 text-muted-text hover:bg-surface-beige/50 hover:text-charcoal-text"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="px-4 pt-3.5 sm:px-6 sm:pt-4">
          <ProgressBar step={step} totalSteps={TOTAL_STEPS} />
        </div>

        <div className="px-4 py-3.5 sm:px-6 sm:py-5 min-h-0 sm:min-h-[290px]">
          {isClaimed ? (
            <div className="flex flex-col items-center justify-center py-6 text-center animate-popIn">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-accent text-white shadow-lg animate-bounce">
                <span className="text-3xl">🏆</span>
              </div>
              <h2 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-charcoal-text">
                Level 1 Unlocked! Welcome Aboard 🎉
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-text max-w-sm mx-auto">
                Opening course player dashboard for <strong className="text-orange-accent">{persona.title}</strong>…
              </p>
            </div>
          ) : (
            <>
              {step === 1 && <StepWelcome />}
              {step === 2 && (
                <StepAvatarSelector onSelectPersona={(p) => setPersona(p)} />
              )}
              {step === 3 && (
                <StepSwipeTest onAnswered={() => setHasAnsweredPreview(true)} />
              )}
              {step === 4 && (
                <StepGoalSelector onGoalSelected={(goal) => setUserGoal(goal)} />
              )}
            </>
          )}
        </div>

        {!isClaimed && (
          <div className="flex items-center justify-between border-t border-border-cream/80 px-4 py-3 sm:px-6 sm:py-4 bg-cream/30">
            <Button
              variant="ghost"
              onClick={goPrevious}
              disabled={step === 1}
              ariaLabel="Go back to previous step"
              className="text-xs sm:text-sm py-2 px-3.5 sm:px-5"
            >
              Back
            </Button>

            {step < TOTAL_STEPS ? (
              <Button onClick={goNext} disabled={!canGoNext} ariaLabel="Continue to next step" className="text-xs sm:text-sm py-2 px-4 sm:px-5">
                Next Quest →
              </Button>
            ) : (
              <Button onClick={handleClaim} variant="accent" disabled={isClaiming} ariaLabel="Enter course player and claim 50 XP" className="text-xs sm:text-sm py-2 px-4 sm:px-5 animate-pulse">
                {isClaiming ? 'Claiming Loot…' : 'Claim 50 XP & Launch Dashboard 🚀'}
              </Button>
            )}
          </div>
        )}
      </div>
    </Modal>
  )
}
