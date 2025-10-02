import { Link } from "react-router-dom"

// Iconos mejorados y más profesionales (ORIGINALES)
function IconLimpieza(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21 12h-8V4a1 1 0 0 0-2 0v8H3a1 1 0 0 0 0 2h8v8a1 1 0 0 0 2 0v-8h8a1 1 0 0 0 0-2z" fill="currentColor"/>
    </svg>
  )
}
function IconOrtodoncia(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M20 8h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-6 10v-4h-4v4H8v-4h4v-4H8V8h4V4h4v4h4v4h-4v4h4v4z" fill="currentColor"/>
    </svg>
  )
}
function IconResinas(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" fill="currentColor"/>
      <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" fill="currentColor"/>
    </svg>
  )
}
function IconImplante(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M20 9h-6V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" fill="currentColor"/>
    </svg>
  )
}

/* Iconos extra para nuevas especialidades (simples y ligeros) */
function IconProtesis(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="3" y="8" width="18" height="8" rx="2" fill="currentColor"/>
      <circle cx="8" cy="12" r="1.6" fill="#fff"/>
      <circle cx="12" cy="12" r="1.6" fill="#fff"/>
      <circle cx="16" cy="12" r="1.6" fill="#fff"/>
    </svg>
  )
}
function IconEstetica(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 2l1.6 4.5L18 8.3l-4.3 1.6L12 14l-1.7-4.1L6 8.3l4.3-1.6L12 2Z" fill="currentColor"/>
      <path d="M18 16l.8 1.9.2 1.8-1.7-.6L15.8 19 18 16Z" fill="currentColor" opacity=".6"/>
    </svg>
  )
}
function IconMaxilofacial(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 3a7 7 0 0 0-7 7v2a7 7 0 0 0 7 7h1.5c1.5 0 2.9-1 3.3-2.5L18 13l-4 1-2-2 1-4 4-1-.7-1.5C15.7 3.9 13.9 3 12 3Z" fill="currentColor"/>
    </svg>
  )
}
function IconPediatria(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="9" r="4" fill="currentColor"/>
      <path d="M5 19a7 7 0 0 1 14 0H5Z" fill="currentColor" opacity=".85"/>
      <circle cx="10" cy="9" r=".7" fill="#fff"/>
      <circle cx="14" cy="9" r=".7" fill="#fff"/>
    </svg>
  )
}
function IconPeriodoncia(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M4 16c3-2 5-3 8-3s5 1 8 3v2c-3-2-5-3-8-3s-5 1-8 3v-2Z" fill="currentColor"/>
      <path d="M12 5a4 4 0 0 0-4 4v3h8V9a4 4 0 0 0-4-4Z" fill="currentColor" opacity=".8"/>
    </svg>
  )
}
function IconEndodoncia(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M8 3h8v6a6 6 0 1 1-12 0V7a4 4 0 0 1 4-4Z" fill="currentColor"/>
      <path d="M12 9c2 2 1 4-1 6s-3 4-1 6" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

/* ================== DATA ================== */
const servicios = [
  // —— TUS 4 ORIGINALES (sin cambios) ——
  { 
    id: 'servicio-limpieza',
    slug: 'limpieza',
    t: 'Limpieza Profesional',
    d: 'Eliminación de placa y sarro con tecnología ultrasónica. Previene caries y gingivitis.',
    Icon: IconLimpieza,
    gradient: 'from-blue-600 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  { 
    id: 'servicio-ortodoncia',
    slug: 'ortodoncia',
    t: 'Ortodoncia Avanzada',
    d: 'Brackets metálicos, estéticos y alineadores invisibles para una sonrisa perfecta.',
    Icon: IconOrtodoncia,
    gradient: 'from-purple-600 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  { 
    id: 'servicio-resinas',
    slug: 'resinas',
    t: 'Resinas y Coronas',
    d: 'Restauraciones estéticas que imitan el color y textura natural de tus dientes.',
    Icon: IconResinas,
    gradient: 'from-emerald-600 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50'
  },
  { 
    id: 'servicio-implantes',
    slug: 'implantes',
    t: 'Implantes Dentales',
    d: 'Soluciones permanentes con tecnología 3D para recuperar la funcionalidad y estética.',
    Icon: IconImplante,
    gradient: 'from-orange-600 to-red-600',
    bgGradient: 'from-orange-50 to-red-50'
  },

  // —— NUEVAS ESPECIALIDADES (añadidas) ——
  {
    id: 'servicio-protesis',
    slug: 'protesis-dental',
    t: 'Prótesis dental',
    d: 'Coronas, puentes y prótesis removibles para recuperar función, masticación y estética.',
    Icon: IconProtesis,
    gradient: 'from-amber-600 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50'
  },
  {
    id: 'servicio-estetica',
    slug: 'odontologia-estetica',
    t: 'Odontología estética',
    d: 'Carillas, blanqueamiento y contorneado para un diseño de sonrisa mínimamente invasivo.',
    Icon: IconEstetica,
    gradient: 'from-pink-600 to-fuchsia-600',
    bgGradient: 'from-pink-50 to-fuchsia-50'
  },
  {
    id: 'servicio-maxilofacial',
    slug: 'cirugia-maxilofacial',
    t: 'Cirugía maxilofacial',
    d: 'Extracciones complejas, terceros molares y procedimientos quirúrgicos de tejidos orales.',
    Icon: IconMaxilofacial,
    gradient: 'from-slate-600 to-gray-700',
    bgGradient: 'from-slate-50 to-gray-100'
  },
  {
    id: 'servicio-odontopediatria',
    slug: 'odontopediatria',
    t: 'Odontopediatría',
    d: 'Atención dental para niñas y niños: selladores, flúor, restauraciones y control conductual.',
    Icon: IconPediatria,
    gradient: 'from-sky-600 to-cyan-600',
    bgGradient: 'from-sky-50 to-cyan-50'
  },
  {
    id: 'servicio-ortodoncia-general',
    slug: 'ortodoncia-general', // para no chocar con 'ortodoncia'
    t: 'Ortodoncia',
    d: 'Corrección de alineación y mordida con distintos sistemas según tu caso y objetivos.',
    Icon: IconOrtodoncia,
    gradient: 'from-indigo-600 to-blue-600',
    bgGradient: 'from-indigo-50 to-blue-50'
  },
  {
    id: 'servicio-implantologia',
    slug: 'implantologia',
    t: 'Implantología',
    d: 'Planificación digital, cirugía guiada y rehabilitación protésica sobre implantes.',
    Icon: IconImplante,
    gradient: 'from-orange-600 to-red-600',
    bgGradient: 'from-orange-50 to-red-50'
  },
  {
    id: 'servicio-periodoncia',
    slug: 'periodoncia',
    t: 'Periodoncia',
    d: 'Tratamientos de encías: raspado y alisado radicular, mantenimiento y cirugía periodontal.',
    Icon: IconPeriodoncia,
    gradient: 'from-emerald-600 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50'
  },
  {
    id: 'servicio-endodoncia',
    slug: 'endodoncia',
    t: 'Endodoncia',
    d: 'Tratamiento de conductos para eliminar dolor y conservar piezas con técnicas rotatorias.',
    Icon: IconEndodoncia,
    gradient: 'from-blue-600 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
]

export default function ServiciosGrid() {
  return (
    <section id="servicios" className="relative py-20 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="text-sm font-medium">Servicios de Excelencia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tratamientos Dentales Especializados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Utilizamos tecnología de vanguardia y técnicas mínimamente invasivas para tu comodidad y bienestar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map(({id, slug, t, d, Icon, gradient, bgGradient}) => (
            <div key={id} id={id} className="group relative scroll-mt-28 h-full">
              {/* CARD = altura uniforme */}
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[380px] md:min-h-[410px] flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  {/* Icono */}
                  <div className={`relative inline-flex mb-4 p-3 rounded-2xl ${bgGradient} group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center shadow-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Texto */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {t}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {d}
                    </p>
                  </div>

                  {/* CTA fijo abajo */}
                  <Link
                    to={`/servicios/${slug}`}
                    className="mt-6 w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2 group-hover:shadow-inner"
                  >
                    <span>Saber más</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>

                {/* Borde inferior decorativo */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a href="/#agendar" className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl font-semibold hover:from-gray-800 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
              <span>📅</span>
              <span>Agendar cita de valoración</span>
            </a>
            <a href="https://wa.me/521000000000?text=Hola,%20quiero%20informes%20de%20servicios" target="_blank" rel="noreferrer" className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center gap-3">
              <span>💬</span>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Primera consulta sin costo • Planes de financiamiento disponibles
          </p>
        </div>
      </div>
    </section>
  )
}
