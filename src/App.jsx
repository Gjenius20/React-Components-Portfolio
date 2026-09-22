import "./css/style.css";

import Navs from "./components/Navs";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navs />
      <Hero />

      <About />
      <Skills />
      <Portfolio />

      <Footer />
    </>
  );
}

export default App;
