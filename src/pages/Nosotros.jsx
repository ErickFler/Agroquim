import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  })
};

export default function Nosotros() {
  const secciones = [
    {
      titulo: '🌱 Misión',
      descripcion: 'Brindar soluciones agrícolas eficientes y seguras que potencien el rendimiento de los cultivos de nuestros clientes, mediante productos de marcas reconocidas y asesoría técnica profesional.'
    },
    {
      titulo: '👁️ Visión',
      descripcion: 'Ser la empresa líder en distribución de agroquímicos en la región, reconocida por su compromiso con la calidad, la confianza y el respeto al medio ambiente.'
    },
    {
      titulo: '💡 Valores',
      descripcion: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Confianza</li>
          <li>Compromiso con el campo</li>
          <li>Responsabilidad ambiental</li>
          <li>Atención personalizada</li>
        </ul>
      )
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
        Sobre Agroquímicos Buenavista
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {secciones.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-green-600"
          >
            <h3 className="text-xl font-semibold mb-4">{item.titulo}</h3>
            <div className="text-gray-700 text-sm leading-relaxed">
              {item.descripcion}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
