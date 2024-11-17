import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
