import { useState } from 'react'
import { swipeQuestion } from '../../data/swipeQuestions'

export default function StepSwipeTest({ onAnswered }) {
  const [selectedId, setSelectedId] = useState(null)
  const isCorrect = selectedId === swipeQuestion.correct

  function handleChoice(id) {
    if (selectedId) return
    setSelectedId(id)
    onAnswered?.()
  }

  return (
    <div className="animate-slideInRight">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-orange-accent">
        Lesson Check Preview
      </p>
      <h2 className="mt-1 font-serif text-lg sm:text-2xl font-medium leading-snug text-charcoal-text">
        Try your first practice question
      </h2>
      <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-muted-text">
        Short questions after each video help lock concepts in your memory. Pick an answer below:
      </p>

      <div
        className={`mt-3 sm:mt-5 rounded-[16px] sm:rounded-[20px] border p-3 sm:p-5 transition-all duration-300 ${
          selectedId
            ? isCorrect
              ? 'border-emerald-500/50 bg-emerald-50/50'
              : 'border-rose-400/50 bg-rose-50/50 animate-shake'
            : 'border-border-cream bg-surface-beige/30'
        }`}
      >
        <p className="text-xs sm:text-sm font-semibold text-charcoal-text">{swipeQuestion.prompt}</p>

        <div className="mt-2.5 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
          {swipeQuestion.choices.map((choice) => {
            const isChosen = selectedId === choice.id
            const isRightAnswer = choice.id === swipeQuestion.correct
            let stateClasses = 'border-border-cream bg-surface-white text-charcoal-text hover:border-orange-accent/60 hover:bg-cream/50 shadow-subtle'
            if (selectedId) {
              if (isRightAnswer) {
                stateClasses = 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold shadow-subtle'
              } else if (isChosen) {
                stateClasses = 'border-rose-500 bg-rose-50 text-rose-900 font-semibold'
              } else {
                stateClasses = 'border-border-cream bg-surface-white/60 text-muted-text opacity-40'
              }
            }
            return (
              <button
                key={choice.id}
                onClick={() => handleChoice(choice.id)}
                disabled={!!selectedId}
                className={`transition-all duration-200 rounded-[12px] sm:rounded-[14px] border px-2.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium disabled:cursor-default ${stateClasses}`}
              >
                {choice.label}
              </button>
            )
          })}
        </div>

        {selectedId && (
          <div className="mt-2.5 sm:mt-4 flex items-start gap-2 text-xs sm:text-sm animate-popIn pt-2 border-t border-border-cream/60">
            <span className="mt-0.5 text-xs sm:text-base">{isCorrect ? '✅' : '❌'}</span>
            <div>
              <p className={isCorrect ? 'font-semibold text-emerald-700 text-xs sm:text-sm' : 'font-semibold text-rose-600 text-xs sm:text-sm'}>
                {isCorrect ? 'Correct!' : 'Not quite.'}
              </p>
              <p className="mt-0.5 text-[11px] sm:text-xs text-muted-text">{swipeQuestion.explainer}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
