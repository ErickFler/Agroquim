export default function Contacto() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Contáctanos</h2>

      <form
        action="mailto:tu-correo@ejemplo.com"
        method="POST"
        encType="text/plain"
        className="space-y-6 bg-white shadow-md rounded p-6"
      >
        <div>
          <label className="block mb-1 font-medium">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            required
            className="w-full border px-4 py-2 rounded outline-green-600"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            required
            className="w-full border px-4 py-2 rounded outline-green-600"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Mensaje</label>
          <textarea
            name="mensaje"
            rows="5"
            required
            className="w-full border px-4 py-2 rounded outline-green-600"
          ></textarea>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded"
          >
            Enviar mensaje
          </button>

          <a
            href="https://wa.me/52XXXXXXXXXX?text=Hola%2C%20me%20gustaría%20más%20información%20sobre%20sus%20productos."
            target="_blank"
            className="text-green-700 hover:underline"
          >
            O contáctanos por WhatsApp
          </a>
        </div>
      </form>
    </section>
  );
}
