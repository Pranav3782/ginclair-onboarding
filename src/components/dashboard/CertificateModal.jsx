import Modal from '../common/Modal'
import Button from '../common/Button'

export default function CertificateModal({ isOpen, onClose, userName = 'Surya Pranav', xp = 1950 }) {
  if (!isOpen) return null

  function handlePrint() {
    window.print()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="cert-modal-heading">
      <div className="p-5 sm:p-7 bg-surface-white text-charcoal-text text-center">
        <div className="flex items-center justify-between border-b border-border-cream pb-3 mb-4">
          <h2 id="cert-modal-heading" className="font-serif text-lg font-bold text-charcoal-text">
            Course Certificate Preview
          </h2>
          <button onClick={onClose} className="text-muted-text hover:text-charcoal-text text-sm">
            ✕
          </button>
        </div>

        {/* Certificate Card Printable Container */}
        <div className="relative rounded-2xl border-4 border-orange-accent/40 bg-cream/60 p-6 sm:p-8 text-center shadow-lg overflow-hidden">
          <div className="absolute top-3 left-3 h-10 w-10 border-t-2 border-l-2 border-orange-accent" />
          <div className="absolute top-3 right-3 h-10 w-10 border-t-2 border-r-2 border-orange-accent" />
          <div className="absolute bottom-3 left-3 h-10 w-10 border-b-2 border-l-2 border-orange-accent" />
          <div className="absolute bottom-3 right-3 h-10 w-10 border-b-2 border-r-2 border-orange-accent" />

          <div className="flex justify-center mb-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal text-cream font-serif font-bold text-2xl shadow-md">
              G
            </div>
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-widest text-orange-accent">
            Certificate of Accomplishment
          </span>
          <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-charcoal-text tracking-tight">
            Systems Design Foundations
          </h3>
          <p className="mt-3 text-xs text-muted-text">This certifies that</p>
          <div className="mt-1 text-xl sm:text-2xl font-bold font-serif text-orange-accent underline decoration-orange-accent/40">
            {userName}
          </div>
          <p className="mt-2 text-xs text-muted-text max-w-sm mx-auto leading-relaxed">
            has successfully completed the post-purchase onboarding curriculum, demonstrating proficiency in distributed architecture, load balancing, and database scaling.
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-border-cream/80 pt-4 text-[10px] text-muted-text">
            <div>
              <span className="font-bold text-charcoal-text">Total XP Earned:</span> {xp} XP
            </div>
            <div>
              <span className="font-bold text-charcoal-text">Verified ID:</span> GIN-2026-9821
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-end gap-3">
          <Button variant="ghost" onClick={onClose} className="text-xs py-2 px-4">
            Close
          </Button>
          <Button variant="accent" onClick={handlePrint} className="text-xs py-2 px-5">
            🖨️ Print / Save PDF
          </Button>
        </div>
      </div>
    </Modal>
  )
}
