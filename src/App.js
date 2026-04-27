import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/main.css';

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Skills/>
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
