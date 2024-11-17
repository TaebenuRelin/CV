const Contact = () => {
  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-info">
        <p>Feel free to reach out to me via:</p>
        <ul>
          <li>
            <a href="mailto:john.doe@example.com">
              Email: john.doe@example.com
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: +1 234 567 890
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Contact;
