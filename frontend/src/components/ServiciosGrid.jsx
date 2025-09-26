import { Link } from "react-router-dom"

// Iconos mejorados y más profesionales
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

const servicios = [
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
            <div key={id} id={id} className="group relative scroll-mt-28">
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className={`relative inline-flex mb-4 p-3 rounded-2xl ${bgGradient} group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center shadow-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {t}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">{d}</p>

                  {/* Link a la página del servicio */}
                  <Link
                    to={`/servicios/${slug}`}
                    className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2 group-hover:shadow-inner"
                  >
                    <span>Saber más</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>

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
