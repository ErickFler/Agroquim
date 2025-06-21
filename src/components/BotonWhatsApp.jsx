export default function BotonWhatsApp() {
  return (
    <a
      href="https://wa.me/523279785383?text=Hola%2C%20quiero%20saber%20sobre%20sus%20productos."
      className="fixed bottom-6 right-6 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="images/whatsapp-icon.webp"
        alt="WhatsApp"
        className="w-14 h-14 hover:scale-110 transition"
      />
    </a>
  );
}
