import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Hero = () => {
  const [hero, setHero] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const heroRef = ref(db, "hero/");

    onValue(heroRef, (snapshot) => {
      const data = snapshot.val();
      setHero(data);
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img
          src={`data:image/jpeg;base64, ${hero.image}`}
          alt="John Doe"
          className="profile-image"
        />

        <h1>{hero.title}</h1>
        <p>{hero.subTitle}</p>
        <a href="#contact" className="cta-button">
          Get in touch
        </a>
      </div>
    </section>
  );
};
export default Hero;
