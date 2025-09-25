import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function StickyCta() {
  const [show, setShow] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Ocultar en la página de /citas o cuando ya estás en #agendar
    if (pathname === "/citas" || hash === "#agendar") {
      setShow(false); return
    }
    const onScroll = () => setShow(window.scrollY > 320 && !hidden)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname, hash, hidden])

  if (!show) return null

  return (
    <div
      className="fixed bottom-4 inset-x-0 z-50"
      role="region" aria-label="Acción rápida para agendar"
    >
      <div className="container-px">
        <div className="rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur p-3 flex items-center justify-between gap-3">
          <div className="text-sm">
            <p className="font-semibold">¿Listo para agendar?</p>
            <p className="text-neutral-600 dark:text-neutral-300">Reserva en menos de 1 minuto.</p>
          </div>
          <div className="flex items-center gap-2">
            <a href="/#agendar" className="btn btn-primary">Agendar ahora</a>
            <a href="tel:+525500000000" className="btn" aria-label="Llamar a la clínica">Llamar</a>
            <button
              className="btn"
              aria-label="Cerrar"
              onClick={() => { setHidden(true); setShow(false) }}
              title="Cerrar"
            >✕</button>
          </div>
        </div>
      </div>
    </div>
  )
}
