import { motion } from 'framer-motion';

const productos = [
  {
    id: 1,
    nombre: "Herbicida Total",
    marca: "Syngenta",
    descripcion: "Control efectivo contra malezas de hoja ancha y angosta.",
    imagen: "/images/herbicida.jpg"
  },
  {
    id: 2,
    nombre: "Fungicida Max",
    marca: "BASF",
    descripcion: "Previene enfermedades fúngicas como roya y mildiu.",
    imagen: "/images/fungicida.jpg"
  },
  {
    id: 3,
    nombre: "Insecticida Plus",
    marca: "Adama",
    descripcion: "Alta eficacia contra pulgones y mosca blanca.",
    imagen: "/images/insecticida.jpg"
  },
  {
    id: 4,
    nombre: "Fertilizante NPK",
    marca: "FMC",
    descripcion: "Fórmula equilibrada para cultivos de alto rendimiento.",
    imagen: "/images/fertilizante.jpg"
  },
];

export default function Productos() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Catálogo de Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map(producto => (
          <motion.div
            key={producto.id}
            className="border rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{producto.nombre}</h3>
              <p className="text-sm text-gray-600 mb-2">{producto.marca}</p>
              <p className="text-sm mb-4">{producto.descripcion}</p>
              <a href="/contacto" className="block text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">Solicitar info</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

