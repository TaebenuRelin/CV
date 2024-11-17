import { FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Import ikon dari react-icons

const Contact = () => {
  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-info">
        <p className="contact-description">
          Feel free to reach out to me through the following channels:
        </p>
        <ul className="contact-list">
          <li className="contact-item">
            <a href="mailto:relintaebenu@gmail.com" className="contact-link">
              <FaEnvelope className="contact-icon" /> Email:
              relintaebenu@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaWhatsapp className="contact-icon" /> WhatsApp: 0821-4571-5515
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
