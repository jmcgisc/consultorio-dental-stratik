// import { Routes, Route } from "react-router-dom"
// import useHashScroll from "./hooks/useHashScroll.js"
// import Navbar from "./components/Navbar.jsx"
// import PromoBanner from "./components/PromoBanner.jsx"
// import StickyCta from "./components/StickyCta.jsx"

// import Footer from "./components/Footer.jsx"         
// import Home from "./pages/Home.jsx"
// import Servicios from "./pages/Servicios.jsx"

// import Privacidad from "./pages/Privacidad.jsx"     
// import Terminos from "./pages/Terminos.jsx"         
// import NotFound from "./pages/NotFound.jsx"
// import TrustStrip from "./components/TrustStrip.jsx" 
// import ServicioDetalle from "./pages/ServicioDetalle.jsx"
// import AvisoPrivacidad from "./pages/AvisoPrivacidad.jsx"
// import Nosotros from "./pages/Nosotros.jsx"

// export default function App() {
//   useHashScroll()
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />      
//       <TrustStrip />   
//       <PromoBanner />  

//       <main className="flex-1">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/servicios" element={<Servicios />} />
//           <Route path="/politica-privacidad" element={<Privacidad />} />
//           <Route path="/terminos-servicio" element={<Terminos />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/servicios/:slug" element={<ServicioDetalle />} />
//           <Route path="/politica-privacidad" element={<AvisoPrivacidad />} />
//           <Route path="/nosotros" element={<Nosotros />} />

//         </Routes>
//       </main>
//       <Footer />
//       <StickyCta />     
//     </div>
//   )
// }

// frontend/src/App.jsx
import React from 'react';
import './App.css'; // Asegúrate de que tienes un archivo CSS para estilos globales

function App() {
  return (
    <div className="construction-page ">
      <main className="construction-content">
        <img
          src="/images/sitio-en-construccion-dental.jpg" // Ruta relativa a la carpeta 'public'
          alt="Sitio web en construcción - Consultorio Dental"
          className="construction-image  "
        />
         </main>
      <footer className="construction-footer">
        {/* Opcional: Algún texto de copyright o redes sociales */}
      </footer>
    </div>
  );
}

export default App;