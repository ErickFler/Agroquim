import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

<a
  href="https://wa.me/52XXXXXXXXXX?text=Hola%2C%20quiero%20información%20sobre%20sus%20productos."
  className="fixed bottom-6 right-6 z-50"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/images/whatsapp-icon.png"
    alt="WhatsApp"
    className="w-14 h-14 hover:scale-110 transition"
  />
</a>
