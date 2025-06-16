import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="text-gray-800">
      {/* HERO */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/herbicida.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">El mejor nutriente es usted mismo</h1>
          <p className="text-lg md:text-2xl mb-6">Distribuimos productos de calidad</p>
          <a
            href="/contacto"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Contáctanos
          </a>
        </motion.div>
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
          <img src="/images/herbicida.png" alt="Syngenta" className="h-12 grayscale hover:grayscale-0 transition" />
          <img src="/images/herbicida.png" alt="BASF" className="h-12 grayscale hover:grayscale-0 transition" />
          <img src="/images/herbicida.png" alt="Adama" className="h-12 grayscale hover:grayscale-0 transition" />
          <img src="/images/herbicida.png" alt="FMC" className="h-12 grayscale hover:grayscale-0 transition" />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-12 bg-white">
        <h3 className="text-2xl font-bold text-center mb-8">¿Por qué elegirnos?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[
            { icon: '⚡', title: 'Rapidez', desc: 'Entregas puntuales y eficientes para tu tranquilidad.' },
            { icon: '🔒', title: 'Confianza', desc: 'Productos originales de marcas reconocidas.' },
            { icon: '📍', title: 'Cobertura', desc: 'Presencia y distribución en distintas regiones.' },
            { icon: '🤝', title: 'Trato directo', desc: 'Atención personalizada por expertos del agro.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center border p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
