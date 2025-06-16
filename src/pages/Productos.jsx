import { motion } from 'framer-motion';

const productos = [
  {
    nombre: "Herbicida Total",
    marca: "Marca1",
    descripcion: "Control efectivo contra malezas de hoja ancha y angosta.",
    imagen: "/images/herbicida.png"
  },
  {
    nombre: "Fungicida Max",
    marca: "Marca2",
    descripcion: "Previene enfermedades fúngicas como roya y mildiu.",
    imagen: "/images/herbicida.png"
  },
  {
    nombre: "Insecticida Plus",
    marca: "Marca3",
    descripcion: "Alta eficacia contra pulgones y mosca blanca.",
    imagen: "/images/herbicida.png"
  },
  {
    nombre: "Fertilizante NPK",
    marca: "Marca4",
    descripcion: "Fórmula equilibrada para cultivos de alto rendimiento.",
    imagen: "/images/herbicida.png"
  }
];

// Animaciones para framer-motion
const productoVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

export default function Productos() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Catálogo de Productos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {productos.map((prod, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={productoVariants}
            className="bg-white border rounded-lg shadow hover:shadow-lg transition overflow-hidden text-center"
          >
            <img
              src={prod.imagen}
              alt={prod.nombre}
              className="w-full h-40 object-contain p-4"
            />
            <div className="px-4 pb-6">
              <h3 className="font-semibold text-lg text-gray-800">{prod.nombre}</h3>
              <p className="text-sm text-gray-500 mb-1">{prod.marca}</p>
              <p className="text-sm text-gray-600 mb-4">{prod.descripcion}</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                Solicitar info
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

