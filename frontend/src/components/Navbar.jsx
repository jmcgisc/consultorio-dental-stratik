import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import ThemeToggle from "./ThemeToggle.jsx"

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState(null)
  
  const dropdownRef = useRef(null)
  const dropdownContentRef = useRef(null)

  // Efecto para detectar scroll
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

  // Event listeners para cerrar dropdowns
  useEffect(() => {
    function onDocClick(e) {
      if (!dropdownRef.current) return
      if (!dropdownRef.current.contains(e.target)) setServicesOpen(false)
    }
    
    function onEsc(e) {
      if (e.key === 'Escape') { 
        setServicesOpen(false)
        setMobileOpen(false) 
      }
    }
    
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onEsc)
    
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [])

  // Handlers para hover del dropdown
  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false)
    }, 500)
    setCloseTimeout(timeout)
  }

  const handleDropdownEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false)
    }, 300)
    setCloseTimeout(timeout)
  }

  // Estilos base para los enlaces
  const linkBase = 'px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:scale-105'
  const isHome = location.pathname === '/'
  
  const link = (active) =>
    active 
      ? `${linkBase} text-brand-600 bg-brand-50 dark:bg-neutral-800 shadow-md border border-brand-100` 
      : `${linkBase} text-neutral-700 dark:text-neutral-300 hover:bg-brand-50 dark:hover:bg-neutral-800 hover:shadow-lg border border-transparent`

  // Definición de anchors
  const anchors = {
    servicios: "/#servicios",
    limpieza: "/servicios/limpieza",
    ortodonciaAvanzada: "/servicios/ortodoncia",
    resinas: "/servicios/resinas",
    implantesDentales: "/servicios/implantes",
    protesisDental: "/servicios/protesis-dental",
    odontologiaEstetica: "/servicios/odontologia-estetica",
    cirugiaMaxilofacial: "/servicios/cirugia-maxilofacial",
    odontopediatria: "/servicios/odontopediatria",
    periodoncia: "/servicios/periodoncia",
    endodoncia: "/servicios/endodoncia",
    antesDespues: "/#antes-despues",
    agendar: "/#agendar",
    testimonios: "/#testimonios",
    ubicacion: "/#ubicacion",
    faq: "/#faq",
  }

  return (
    <header 
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 shadow-2xl border-b border-neutral-200/80 dark:border-neutral-800/80' 
          : 'bg-white/90 dark:bg-neutral-950/70'
      }`}
    >
      {/* Barra de gradiente superior */}
      <div className="w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 shadow-lg"></div>
      
      <nav className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Izquierda */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Ir al inicio"
          >
            <div className="relative">
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <img
                src="/images/logo-especialistas-en-salud-bucal.png"
                alt="Especialistas en salud bucal"
                className="h-12 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                width="160"
                height="48"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="hidden lg:block">
              <div className="text-lg font-semibold text-brand-600 dark:text-brand-400 bg-gradient-to-r from-brand-600 to-teal-600 bg-clip-text text-transparent">
                Especialistas en Salud Bucal
              </div>
            </div>
          </Link>

          {/* Navegación desktop - Distribuida */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center" ref={dropdownRef}>
            
            {/* Dropdown Servicios */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setServicesOpen(v => !v)}
                className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                  servicesOpen 
                    ? 'bg-green-600 text-white shadow-xl scale-105' 
                    : 'text-green-700 dark:text-green-400 hover:text-green-800 bg-green-50/80 dark:bg-green-900/30 hover:shadow-lg border border-green-100/50'
                }`}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
              >
                <span>Servicios</span>
                <span className={`transform transition-all duration-300 text-sm ${
                  servicesOpen ? 'rotate-180 scale-110' : ''
                }`}>
                  ▼
                </span>
              </button>

              {servicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-72 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-2xl p-4 animate-in fade-in-0 zoom-in-95"
                  ref={dropdownContentRef}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white dark:bg-neutral-900 border-t border-l border-neutral-200/80 dark:border-neutral-800/80 transform rotate-45 backdrop-blur-xl"></div>
                  
                  <div className="relative space-y-2 z-10">
                    <a 
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 text-neutral-800 dark:text-neutral-200 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
                      href={anchors.servicios}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="w-2.5 h-2.5 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></span>
                      <span className="font-medium">Vista general</span>
                    </a>

                    {/* Lista de servicios */}
                    {[
                      { label: 'Limpieza profesional', href: anchors.limpieza, color: 'bg-cyan-500' },
                      { label: 'Ortodoncia Avanzada', href: anchors.ortodonciaAvanzada, color: 'bg-purple-500' },
                      { label: 'Resinas y Coronas', href: anchors.resinas, color: 'bg-emerald-500' },
                      { label: 'Implantes Dentales', href: anchors.implantesDentales, color: 'bg-orange-500' },
                      { label: 'Protesis Dental', href: anchors.protesisDental, color: 'bg-amber-500' },
                      { label: 'Odontologia Estética', href: anchors.odontologiaEstetica, color: 'bg-pink-500' },
                      { label: 'Cirugia maxilofacial', href: anchors.cirugiaMaxilofacial, color: 'bg-slate-500' },
                      { label: 'Odontopediatria', href: anchors.odontopediatria, color: 'bg-sky-500' },
                      { label: 'Periodoncia', href: anchors.periodoncia, color: 'bg-teal-500' },
                      { label: 'Endodoncia', href: anchors.endodoncia, color: 'bg-red-500' },
                    ].map((item, index) => (
                      <a 
                        key={index}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-white/50 hover:to-transparent dark:hover:from-neutral-800/50 text-neutral-700 dark:text-neutral-300 transition-all duration-300 hover:scale-105 group"
                        href={item.href} 
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className={`w-2.5 h-2.5 ${item.color} rounded-full group-hover:scale-125 transition-transform shadow-sm`}></span>
                        <span className="font-medium">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Enlaces principales */}
            <a className={link(isHome)} href={anchors.antesDespues}>
              Antes/Después
            </a>
            
            <a className={link(isHome)} href={anchors.agendar}>
              Agendar
            </a>
            
            <a className={link(isHome)} href={anchors.testimonios}>
              Testimonios
            </a>
            
            <a className={link(isHome)} href={anchors.ubicacion}>
              Ubicación
            </a>
            
            <a className={link(isHome)} href={anchors.faq}>
              FAQ
            </a>
          </div>

          {/* CTA y tema - Derecha */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/citas" 
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Reservar cita
            </Link>
            
            <ThemeToggle />
          </div>

          {/* Navegación móvil */}
          <div className="lg:hidden flex items-center gap-3">
            <Link 
              to="/citas" 
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold px-4 py-2.5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm whitespace-nowrap"
            >
              Reservar
            </Link>
            
            <ThemeToggle />
            
            <button
              className="p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Abrir menú"
            >
              <div className={`w-6 h-6 relative transition-transform duration-500 ${
                mobileOpen ? 'rotate-180' : ''
              }`}>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-neutral-700 dark:bg-neutral-300 rounded-full transition-all duration-500 ${
                  mobileOpen ? 'rotate-45 translate-y-0 scale-125' : '-translate-y-1.5'
                }`}></span>
                
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-neutral-700 dark:bg-neutral-300 rounded-full transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-neutral-700 dark:bg-neutral-300 rounded-full transition-all duration-500 ${
                  mobileOpen ? '-rotate-45 translate-y-0 scale-125' : 'translate-y-1.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl shadow-2xl">
          <div className="max-w-8xl mx-auto px-6 py-6 animate-in fade-in-0 slide-in-from-top-4 duration-500">
            <div className="space-y-4">
              
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center justify-between px-6 py-4 bg-white/60 dark:bg-neutral-800/60 rounded-xl border border-neutral-200/60 dark:border-neutral-700/60 hover:shadow-lg transition-all duration-300">
                  <span className="font-semibold text-green-800 dark:text-green-400">Servicios</span>
                  <span className="transform transition-transform duration-500 group-open:rotate-180 text-green-600 dark:text-green-400">▼</span>
                </summary>
                
                <div className="pl-5 mt-4 space-y-3 border-l-2 border-green-200 dark:border-green-800 ml-4">
                  {[
                    { label: 'Vista general', href: anchors.servicios, color: 'bg-blue-500' },
                    { label: 'Limpieza profesional', href: anchors.limpieza, color: 'bg-cyan-500' },
                    { label: 'Ortodoncia Avanzada', href: anchors.ortodonciaAvanzada, color: 'bg-purple-500' },
                    { label: 'Resinas y Coronas', href: anchors.resinas, color: 'bg-emerald-500' },
                    { label: 'Implantes Dentales', href: anchors.implantesDentales, color: 'bg-orange-500' },
                    { label: 'Protesis Dental', href: anchors.protesisDental, color: 'bg-amber-500' },
                    { label: 'Odontologia Estética', href: anchors.odontologiaEstetica, color: 'bg-pink-500' },
                    { label: 'Cirugia maxilofacial', href: anchors.cirugiaMaxilofacial, color: 'bg-slate-500' },
                    { label: 'Odontopediatria', href: anchors.odontopediatria, color: 'bg-sky-500' },
                    { label: 'Periodoncia', href: anchors.periodoncia, color: 'bg-teal-500' },
                    { label: 'Endodoncia', href: anchors.endodoncia, color: 'bg-red-500' },
                  ].map((item, index) => (
                    <a 
                      key={index} 
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent dark:hover:from-blue-900/20 text-neutral-700 dark:text-neutral-300 transition-all duration-300 hover:scale-105 group"
                      href={item.href} 
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className={`w-2.5 h-2.5 ${item.color} rounded-full group-hover:scale-125 transition-transform shadow-sm`}></span>
                      <span className="font-medium">{item.label}</span>
                    </a>
                  ))}
                </div>
              </details>

              {/* Enlaces móviles */}
              {[
                { label: 'Antes/Después', href: anchors.antesDespues },
                { label: 'Agendar', href: anchors.agendar },
                { label: 'Testimonios', href: anchors.testimonios },
                { label: 'Ubicación', href: anchors.ubicacion },
                { label: 'FAQ', href: anchors.faq },
              ].map((item, index) => (
                <a 
                  key={index}
                  className="block px-6 py-4 text-center font-medium bg-white/60 dark:bg-neutral-800/60 rounded-xl border border-neutral-200/60 dark:border-neutral-700/60 hover:shadow-lg transition-all duration-300 hover:scale-105 text-neutral-700 dark:text-neutral-300"
                  href={item.href} 
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* CTA móvil */}
              <Link 
                to="/citas" 
                className="block bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center mt-4"
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