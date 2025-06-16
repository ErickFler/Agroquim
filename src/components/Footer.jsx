export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm">
        {/* Logo / Nombre */}
        <div>
          <h4 className="text-lg font-bold text-green-400 mb-2">Agroquímicos Buenavista</h4>
          <p>Distribuyendo calidad, confianza y resultados en el campo.</p>
        </div>

        {/* Navegación */}
        <div>
          <h5 className="font-semibold text-green-300 mb-2">Navegación</h5>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/productos" className="hover:underline">Productos</a></li>
            <li><a href="/nosotros" className="hover:underline">Nosotros</a></li>
            <li><a href="/contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h5 className="font-semibold text-green-300 mb-2">Contáctanos</h5>
          <p>📍 Zacualpan, Nayarit</p>
          <p>📞 (327) 978 5383</p>
          <p>✉️ contacto@agrobuenavista.com</p>
          <p>💬 <a href="https://wa.me/523279785383" className="underline hover:text-green-400">WhatsApp directo</a></p>
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-gray-400">
        © {new Date().getFullYear()} Agroquímicos Buenavista. Todos los derechos reservados.
      </div>
    </footer>
  );
}
