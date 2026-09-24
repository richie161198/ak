import { useRef, useState } from "react";
import userIcon from "../assets/img/contact/user.png";
import envelopeIcon from "../assets/img/contact/envelope-open.png";
import phoneIcon from "../assets/img/contact/phone.png";
import penIcon from "../assets/img/contact/pen.png";
import { ContactMap } from "./map";
import "./Contact.css";

export function ContactUs() {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setResult("");

    try {
      const payload = new FormData();
      payload.append("access_key", "c63a851a-b6c1-4c20-a37a-d05dd5a83674");
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        setResult("Error: " + data.message);
      }
    } catch {
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact full-section" id="schedule">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__form-col card contact__panel">
            <header className="contact__content">
              <span className="eyebrow">Get in touch</span>
              <h2 className="contact__title">Schedule a call</h2>
              <p>
                If your portfolio feels scattered, or you're unsure where to
                begin, let's sit together. One meaningful conversation can shift
                the way you look at your money — forever.
              </p>
            </header>

            {result && (
              <p
                className={`contact__result ${result.startsWith("Error") || result.includes("wrong") ? "contact__result--error" : "contact__result--success"}`}
              >
                {result}
              </p>
            )}

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__fields">
                <div className="contact__field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  <img src={userIcon} alt="" />
                  {errors.name && (
                    <small className="contact__error">{errors.name}</small>
                  )}
                </div>

                <div className="contact__field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  <img src={envelopeIcon} alt="" />
                  {errors.email && (
                    <small className="contact__error">{errors.email}</small>
                  )}
                </div>

                <div className="contact__field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone no."
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  <img src={phoneIcon} alt="" />
                  {errors.phone && (
                    <small className="contact__error">{errors.phone}</small>
                  )}
                </div>

                <div className="contact__field contact__field--full">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    rows={4}
                  />
                  <img className="contact__pen-icon" src={penIcon} alt="" />
                  {errors.message && (
                    <small className="contact__error">{errors.message}</small>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="contact__submit"
                disabled={loading}
              >
                <span className="contact__submit-dot" />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="contact__map-col">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
