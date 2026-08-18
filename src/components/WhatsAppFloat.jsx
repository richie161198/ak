import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/+919994031721?text=Hi"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}
