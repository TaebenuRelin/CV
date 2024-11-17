import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo"></div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="profile">
            <img
              src="/profile-avatar.png"
              alt="Profile Avatar"
              className="profile-avatar"
            />
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Hi, I'm John Doe</h1>
            <p>
              I'm a passionate web developer creating amazing digital
              experiences.
            </p>
            <a href="#contact" className="cta-button">
              Get in touch
            </a>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-list">
              <span className="skill-item">HTML</span>
              <span className="skill-item">CSS</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Node.js</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">UI/UX Design</span>
            </div>
          </div>
        </section>

        <section id="education" className="education">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
              <div className="education-item">
                <h3>Bachelor of Computer Science</h3>
                <p>University of Example, 2019 - 2023</p>
                <p>
                  Focused on web development, software engineering, and design
                  principles.
                </p>
              </div>
              <div className="education-item">
                <h3>High School Diploma</h3>
                <p>Example High School, 2015 - 2019</p>
                <p>
                  Graduated with honors, specializing in mathematics and
                  computer science.
                </p>
              </div>
            </div>
          </div>
        </section>

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
      </main>

      <footer>
        <div className="container">
          <p>© 2023 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
