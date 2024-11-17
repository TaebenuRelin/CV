import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header/");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);

  return (
    <header>
      <nav className="container">
        <div className="logo"></div>
        <div className="nav-links">
          <a href="#home">{header.title}</a>
          <a href="#skills">{header.title1}</a>
          <a href="#education">{header.title2}</a>
          <a href="#contact">{header.title3}</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
