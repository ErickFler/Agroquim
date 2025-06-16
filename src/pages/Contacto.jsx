export default function Contacto() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-12 py-16">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        Contáctanos
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulario */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Mensaje enviado correctamente ✅");
          }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <label className="block mb-6">
            <span className="text-gray-700 font-semibold">Nombre completo</span>
            <input
              type="text"
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 px-4 py-2"
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-700 font-semibold">Correo electrónico</span>
            <input
              type="email"
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 px-4 py-2"
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-700 font-semibold">Mensaje</span>
            <textarea
              required
              minLength={10}
              rows={6}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 px-4 py-2"
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition w-full"
          >
            Enviar mensaje
          </button>

          <p className="mt-6 text-sm text-center text-gray-600">
            O contáctanos por{" "}
            <a
              href="https://wa.me/523279785383?text=Hola%2C%20quiero%20saber%20sobre%20sus%20productos."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 underline font-medium"
            >
              WhatsApp
            </a>
          </p>
        </form>
  
        {/* Mapa */}
        <div className="rounded-xl overflow-hidden shadow-lg min-h-[460px]">
          <iframe
            title="Ubicación Agroquímicos Buenavista"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14976.778022589716!2d-105.1633979!3d21.2362939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8420d6dd23284a47%3A0x4a6a446c2432b3bf!2sAgroquimicos%20Buena%20Vista!5e0!3m2!1ses!2smx!4v1718510576844!5m2!1ses!2smx"
            className="w-full h-full min-h-[460px] border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}


