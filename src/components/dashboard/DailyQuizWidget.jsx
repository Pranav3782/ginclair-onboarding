import { useState } from 'react'

const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    prompt: 'In a distributed system, what does the PACELC theorem state about latency when there is NO partition (Else)?',
    choices: [
      { id: 'a', label: 'Trade off Latency (L) vs Consistency (C)' },
      { id: 'b', label: 'Trade off Availability (A) vs Partition tolerance (P)' },
    ],
    correct: 'a',
    explainer: 'Spot on! PACELC states: If Partition, choose Availability vs Consistency; Else, choose Latency vs Consistency.',
  },
  {
    id: 'q2',
    prompt: 'Which caching strategy writes data directly to BOTH cache and database synchronously before returning success?',
    choices: [
      { id: 'a', label: 'Write-Through Cache' },
      { id: 'b', label: 'Write-Behind / Write-Back Cache' },
    ],
    correct: 'a',
    explainer: 'Correct! Write-Through writes to both synchronously, ensuring high data durability at the cost of write latency.',
  },
]

export default function DailyQuizWidget({ onEarnXP }) {
  const [qIndex, setQIndex] = useState(0)
  const [selectedId, setSelectedId] = useState(null)
  const [answeredCount, setAnsweredCount] = useState(0)

  const currentQ = QUIZ_QUESTIONS[qIndex]
  const isCorrect = selectedId === currentQ.correct

  function handleSelect(id) {
    if (selectedId) return
    setSelectedId(id)
    if (id === currentQ.correct) {
      onEarnXP?.(15, 'Completed Daily Practice Question (+15 XP)')
    }
    setAnsweredCount((c) => c + 1)
  }

  function handleNext() {
    setSelectedId(null)
    setQIndex((i) => (i + 1) % QUIZ_QUESTIONS.length)
  }

  return (
    <div className="rounded-[24px] border border-border-cream bg-surface-beige/70 p-5 sm:p-7 shadow-subtle flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-accent">
            Daily Practice Check
          </span>
          <span className="text-xs font-semibold text-muted-text bg-cream/70 px-2.5 py-0.5 rounded-full border border-border-cream">
            +15 XP Reward
          </span>
        </div>

        <h3 className="mt-2 font-serif text-xl font-medium text-charcoal-text leading-snug">
          {currentQ.prompt}
        </h3>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {currentQ.choices.map((choice) => {
            const isChosen = selectedId === choice.id
            const isRight = choice.id === currentQ.correct
            let btnStyle = 'border-border-cream bg-surface-white text-charcoal-text hover:border-orange-accent/60'
            if (selectedId) {
              if (isRight) {
                btnStyle = 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
              } else if (isChosen) {
                btnStyle = 'border-rose-500 bg-rose-50 text-rose-900 font-semibold'
              } else {
                btnStyle = 'border-border-cream bg-surface-white/50 text-muted-text opacity-40'
              }
            }
            return (
              <button
                key={choice.id}
                onClick={() => handleSelect(choice.id)}
                disabled={!!selectedId}
                className={`transition-all duration-200 rounded-xl border p-3 text-xs font-medium text-left disabled:cursor-default ${btnStyle}`}
              >
                {choice.label}
              </button>
            )
          })}
        </div>

        {selectedId && (
          <div className="mt-3.5 pt-3 border-t border-border-cream/80 flex items-start justify-between gap-3 animate-popIn">
            <div className="text-xs">
              <span className="font-bold text-charcoal-text">{isCorrect ? '✅ Correct! (+15 XP)' : '❌ Not quite.'}</span>
              <p className="mt-0.5 text-muted-text">{currentQ.explainer}</p>
            </div>
            <button
              onClick={handleNext}
              className="shrink-0 text-xs font-semibold text-orange-accent bg-orange-accent/15 px-3 py-1.5 rounded-lg border border-orange-accent/30 hover:bg-orange-accent hover:text-white transition-all"
            >
              Next Question →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
