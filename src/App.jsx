import "./app.scss";
import Background from "./components/background/background";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skill from "./components/skill/Skill";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="Homepage">
        <Hero />
      </section>
      <section id="Protfolio">
        <Parallax type="service" />
      </section>
      <section id="Skill">
        <Skill />
      </section>
      <section id="Protfolio">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />
      <Background type="background" />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
