const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* Menambahkan gambar profil */}
        <img
          src="/path/to/your/profile-image.jpg"
          alt="John Doe"
          className="profile-image"
        />

        <h1>Hi, I'm John Doe</h1>
        <p>
          I'm a passionate web developer creating amazing digital experiences.
        </p>
        <a href="#contact" className="cta-button">
          Get in touch
        </a>
      </div>
    </section>
  );
};
export default Hero;
