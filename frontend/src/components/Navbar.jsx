import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import ThemeToggle from "./ThemeToggle.jsx"

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Efecto scroll con gradiente
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
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

  // Estilos originales mejorados
  const linkBase = 'px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300'
  const isHome = location.pathname === '/'
  const link = (active) =>
    active 
      ? `${linkBase} text-brand-600 bg-brand-50 dark:bg-neutral-800` 
      : `${linkBase} text-neutral-600 dark:text-neutral-300 hover:bg-brand-50 dark:hover:bg-neutral-800`

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
    <header className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 shadow-lg border-b border-neutral-200 dark:border-neutral-800' 
        : 'bg-white/80 dark:bg-neutral-950/60'
    }`}>
      
      {/* Barra decorativa superior */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>
      
      <nav className="container px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo con texto y más espacio */}
          <Link
            to="/"
            className="flex items-center gap-4 shrink-0 group mr-8"
            aria-label="Ir al inicio"
          >
            <div className="relative">
              {/* Badge decorativo */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <img
                src="/images/logo-especialistas-en-salud-bucal.png"
                alt="Especialistas en salud bucal"
                className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                width="160"
                height="48"
                loading="eager"
                decoding="async"
              />
            </div>
            
            {/* Texto junto al logo */}
            <div className="hidden sm:block">
              <div className="text-brand-600 dark:text-neutral-200">Especialistas en Salud Bucal</div>
            </div>
          </Link>

          {/* Desktop Navigation con más espacio entre enlaces */}
          <div className="hidden lg:flex items-center gap-6 text-brand-600" ref={dropdownRef}>
            
            {/* Dropdown Servicios - CON PUNTOS DE COLORES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(v => !v)}
                className={`${link(false)} flex items-center gap-1' ${
                  servicesOpen ? 'bg-brand-600 dark:bg-neutral-800 text-brand-600' : ''
                }`}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
              >
                <span className="text-brand-600'">Servicios</span>
                <span className={`transform transition-transform duration-300 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}>▼</span>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg p-3 animate-in fade-in-0 zoom-in-95">
                  <div className="space-y-1">
                    <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition-all group" 
                       href={anchors.servicios}>
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Vista general</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition-all group" 
                       href={anchors.limpieza}>
                      <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                      <span>Limpieza profesional</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition-all group" 
                       href={anchors.ortodoncia}>
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>Ortodoncia</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition-all group" 
                       href={anchors.resinas}>
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      <span>Resinas y coronas</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition-all group" 
                       href={anchors.implantes}>
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Implantes dentales</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Enlaces principales con más separación */}
            <a className={link(isHome)} href={anchors.antesDespues}>Antes/Después</a>
            <a className={link(isHome)} href={anchors.agendar}>Agendar</a>
            <a className={link(isHome)} href={anchors.testimonios}>Testimonios</a>
            <a className={link(isHome)} href={anchors.ubicacion}>Ubicación</a>
            <a className={link(isHome)} href={anchors.faq}>FAQ</a>

            {/* Botón CTA con más margen */}
            <Link to="/citas" className="btn btn-primary ml-4 px-6 py-3 whitespace-nowrap">Reservar cita</Link>

            {/* Toggle de tema */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: ThemeToggle + botón menú */}
          <div className="lg:hidden flex items-center gap-4">
            <Link 
              to="/citas" 
              className="btn btn-primary px-4 py-2 text-sm whitespace-nowrap"
            >
              Reservar
            </Link>
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Abrir menú"
            >
              <div className={`w-6 h-6 relative transition-transform duration-300 ${mobileOpen ? 'rotate-90' : ''}`}>
                <span className={`absolute top-2 left-0 w-6 h-0.5 bg-neutral-600 dark:bg-neutral-300 rounded transition-all ${mobileOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'}`}></span>
                <span className={`absolute top-2 left-0 w-6 h-0.5 bg-neutral-600 dark:bg-neutral-300 rounded transition-all ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute top-2 left-0 w-6 h-0.5 bg-neutral-600 dark:bg-neutral-300 rounded transition-all ${mobileOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu con más espacio entre items */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 animate-in fade-in-0 slide-in-from-top-2">
            <div className="grid gap-3">
              
              {/* Sección Servicios móvil - CON PUNTOS DE COLORES */}
              <details className="group">
                <summary className={`${link(false)} cursor-pointer list-none flex items-center justify-between`}>
                  <span>Servicios</span>
                  <span className="transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="pl-4 mt-3 grid gap-2 border-l-2 border-neutral-200 dark:border-neutral-700 ml-3">
                  {[
                    { label: 'Vista general', href: anchors.servicios, color: 'bg-blue-500' },
                    { label: 'Limpieza profesional', href: anchors.limpieza, color: 'bg-cyan-500' },
                    { label: 'Ortodoncia', href: anchors.ortodoncia, color: 'bg-purple-500' },
                    { label: 'Resinas y coronas', href: anchors.resinas, color: 'bg-emerald-500' },
                    { label: 'Implantes dentales', href: anchors.implantes, color: 'bg-orange-500' },
                  ].map((item, index) => (
                    <a key={index} 
                       className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 text-neutral-700 dark:text-neutral-300 transition-all"
                       href={item.href} 
                       onClick={() => setMobileOpen(false)}>
                      <span className={`w-2 h-2 ${item.color} rounded-full`}></span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </details>

              <a className={link(isHome)} href={anchors.antesDespues} onClick={() => setMobileOpen(false)}>Antes/Después</a>
              <a className={link(isHome)} href={anchors.agendar} onClick={() => setMobileOpen(false)}>Agendar</a>
              <a className={link(isHome)} href={anchors.testimonios} onClick={() => setMobileOpen(false)}>Testimonios</a>
              <a className={link(isHome)} href={anchors.ubicacion} onClick={() => setMobileOpen(false)}>Ubicación</a>
              <a className={link(isHome)} href={anchors.faq} onClick={() => setMobileOpen(false)}>FAQ</a>
              
              {/* Botón CTA móvil */}
              <Link 
                to="/citas" 
                className="btn btn-primary mt-4 text-center py-3"
                onClick={() => setMobileOpen(false)}
              >
                Reservar cita
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}