export default function WhatsAppButton() {
  const phoneNumber = "919391717330";
  const message = "Hello! I am interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 bg-emerald-600 p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all transform hover:scale-110 z-40 flex items-center justify-center"
    >
      <img
        src="/Whatsapp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
}
