export function ContactMap() {
  return (
    <div className="contact-map">
      <iframe
        title="Aktineu office location"
        src="https://maps.google.com/maps?q=Flat+No.+4,+Sri+Ganesh+Apartments,+3+Abhiramapuram+3rd+Street,+Chennai+600018&output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="contact-map__logo">
        <h3>Aktineu</h3>
      </div>
    </div>
  );
}
