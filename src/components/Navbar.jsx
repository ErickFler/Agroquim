import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Agroquímicos Buenavista</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:underline">Inicio</Link></li>
        <li><Link to="/productos" className="hover:underline">Productos</Link></li>
        <li><Link to="/nosotros" className="hover:underline">Nosotros</Link></li>
        <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
      </ul>
    </nav>
  );
}