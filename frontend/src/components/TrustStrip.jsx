export default function TrustStrip() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200/60 dark:border-neutral-800">
      <div className="container-px py-2 flex flex-wrap items-center gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="i-material-symbols-kid-star text-xl" aria-hidden />
          <strong>4.8/5</strong> en Google
        </div>
        <span className="h-4 w-px bg-neutral-300/60 hidden sm:inline-block" />
        <div>+1,200 pacientes atendidos</div>
        <span className="h-4 w-px bg-neutral-300/60 hidden sm:inline-block" />
        <div>Primera valoración sin costo*</div>
      </div>
    </div>
  )
}
