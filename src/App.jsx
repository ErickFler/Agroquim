import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BotonWhatsApp from './components/BotonWhatsApp';

import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar fija */}
        <Navbar />

        {/* Contenido principal */}
        <main className="flex-grow px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        {/* Footer fijo abajo */}
        <Footer />

        {/* Botón flotante de WhatsApp */}
        <BotonWhatsApp />
      </div>
    </Router>
  );
}



