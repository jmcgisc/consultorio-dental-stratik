import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import ThemeToggle from "./ThemeToggle.jsx"

function ToothLogo({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7.5 21c-.5-3 .5-6-3-9-2.5-2.3-2.4-7.2 2.1-8.8 2.8-1 5.3.3 5.4.4.1-.1 2.6-1.4 5.4-.4 4.5 1.6 4.6 6.5 2.1 8.8-3.5 3-2.5 6-3 9-.4 2-2.3 2-3 .7-.8-1.6-1.1-4.5-1.5-5.8-.4 1.3-.7 4.2-1.5 5.8-.7 1.3-2.6 1.3-3-.7Z"/>
    </svg>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Efecto scroll borde
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Cerrar dropdown si clic fuera o Esc
  useEffect(() => {
    function onDocClick(e) {
      if (!dropdownRef.current) return
      if (!dropdownRef.current.contains(e.target)) setServicesOpen(false)
    }
    function onEsc(e) {
      if (e.key === 'Escape') { setServicesOpen(false); setMobileOpen(false) }
    }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [])

  const linkBase = 'px-4 py-2 rounded-xl text-sm font-medium hover:bg-brand-50 dark:hover:bg-neutral-800 transition'
  const isHome = location.pathname === '/'
  const link = (active) =>
    active ? `${linkBase} text-brand-600` : `${linkBase} text-neutral-600 dark:text-neutral-300`

  const anchors = {
    servicios: "/#servicios",
    limpieza: "/#servicio-limpieza",
    ortodoncia: "/#servicio-ortodoncia",
    resinas: "/#servicio-resinas",
    implantes: "/#servicio-implantes",
    antesDespues: "/#antes-despues",
    agendar: "/#agendar",
    testimonios: "/#testimonios",
    ubicacion: "/#ubicacion",
    faq: "/#faq",
  }

  return (
    <header className={`sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/60 border-b transition
      ${scrolled ? 'border-neutral-200 dark:border-neutral-800' : 'border-transparent'}`}>
      <nav className="container-px flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
            <ToothLogo className="h-5 w-5" />
          </span>
          <span className="text-lg">Clínica Dental</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1" ref={dropdownRef}>
          {/* Dropdown Servicios */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(v => !v)}
              className={link(isHome)}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              Servicios ▾
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg p-2">
                <a className={`${link(false)} block`} href={anchors.servicios}>Todos los servicios</a>
                <a className={`${link(false)} block`} href={anchors.limpieza}>Limpieza profesional</a>
                <a className={`${link(false)} block`} href={anchors.ortodoncia}>Ortodoncia</a>
                <a className={`${link(false)} block`} href={anchors.resinas}>Resinas y coronas</a>
                <a className={`${link(false)} block`} href={anchors.implantes}>Implantes dentales</a>
              </div>
            )}
          </div>

          <a className={link(isHome)} href={anchors.antesDespues}>Antes/Después</a>
          <a className={link(isHome)} href={anchors.agendar}>Agendar</a>
          <a className={link(isHome)} href={anchors.testimonios}>Testimonios</a>
          <a className={link(isHome)} href={anchors.ubicacion}>Ubicación</a>
          <a className={link(isHome)} href={anchors.faq}>FAQ</a>

          <Link to="/citas" className="btn btn-primary ml-2">Reservar cita</Link>
        </div>

        <ThemeToggle />
        {/* Mobile toggle */}
        <button
          className="md:hidden btn"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95">
          <div className="container-px py-3 grid gap-2">
            <details className="group">
              <summary className={`${link(isHome)} cursor-pointer list-none`}>Servicios</summary>
              <div className="pl-2 grid">
                <a className={`${link(false)} block`} href={anchors.servicios} onClick={() => setMobileOpen(false)}>Todos</a>
                <a className={`${link(false)} block`} href={anchors.limpieza} onClick={() => setMobileOpen(false)}>Limpieza</a>
                <a className={`${link(false)} block`} href={anchors.ortodoncia} onClick={() => setMobileOpen(false)}>Ortodoncia</a>
                <a className={`${link(false)} block`} href={anchors.resinas} onClick={() => setMobileOpen(false)}>Resinas/Coronas</a>
                <a className={`${link(false)} block`} href={anchors.implantes} onClick={() => setMobileOpen(false)}>Implantes</a>
              </div>
            </details>

            <a className={link(isHome)} href={anchors.antesDespues} onClick={() => setMobileOpen(false)}>Antes/Después</a>
            <a className={link(isHome)} href={anchors.agendar} onClick={() => setMobileOpen(false)}>Agendar</a>
            <a className={link(isHome)} href={anchors.testimonios} onClick={() => setMobileOpen(false)}>Testimonios</a>
            <a className={link(isHome)} href={anchors.ubicacion} onClick={() => setMobileOpen(false)}>Ubicación</a>
            <a className={link(isHome)} href={anchors.faq} onClick={() => setMobileOpen(false)}>FAQ</a>
            <Link to="/citas" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Reservar cita</Link>
          </div>
        </div>
      )}
    </header>
  )
}
