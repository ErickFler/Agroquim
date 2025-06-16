import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="text-gray-800">
      {/* HERO */}
      <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/hero-campo.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">El mejor nutriente es usted mismo</h1>
          <p className="text-lg md:text-2xl mb-6">Distribuimos productos de calidad</p>
          <a href="/contacto" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md">Contáctanos</a>
        </div>
      </section>

      {/* PRESENTACIÓN animada */}
      <motion.section
        className="py-12 px-6 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Quiénes somos?</h2>
        <p className="text-lg mb-4">
          Somos Agroquímicos Buenavista, una empresa dedicada a la distribución de productos agrícolas confiables y de las mejores marcas, enfocados en proteger y potenciar tus cultivos con soluciones efectivas.
        </p>
      </motion.section>

      {/* MARCAS */}
      <section className="py-6 px-6 bg-gray-100">
        <h3 className="text-xl font-semibold text-center mb-6">Distribuimos marcas líderes:</h3>
        <div className="flex justify-center items-center flex-wrap gap-8 max-w-4xl mx-auto">
          <img src="/images/logo-syngenta.png" alt="Syngenta" className="h-12" />
          <img src="/images/logo-basf.png" alt="BASF" className="h-12" />
          <img src="/images/logo-adama.png" alt="Adama" className="h-12" />
          <img src="/images/logo-fmc.png" alt="FMC" className="h-12" />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-12 bg-white">
        <h3 className="text-2xl font-bold text-center mb-8">¿Por qué elegirnos?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          <div className="text-center border p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-4xl mb-2">⚡</div>
            <h4 className="font-semibold text-lg mb-2">Rapidez</h4>
            <p>Entregas puntuales y eficientes para tu tranquilidad.</p>
          </div>
          <div className="text-center border p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-4xl mb-2">🔒</div>
            <h4 className="font-semibold text-lg mb-2">Confianza</h4>
            <p>Productos originales de marcas reconocidas.</p>
          </div>
          <div className="text-center border p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-4xl mb-2">📍</div>
            <h4 className="font-semibold text-lg mb-2">Cobertura</h4>
            <p>Presencia y distribución en distintas regiones.</p>
          </div>
          <div className="text-center border p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-4xl mb-2">🤝</div>
            <h4 className="font-semibold text-lg mb-2">Trato directo</h4>
            <p>Atención personalizada por expertos del agro.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

