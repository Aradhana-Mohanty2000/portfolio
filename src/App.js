import Navbar           from './components/Navbar';
import Hero             from './components/Hero';
import About            from './components/About';
import Skills           from './components/Skills';
import Education        from './components/Education';
import Experience       from './components/Experience';
import Projects         from './components/Projects';
import Contact          from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import './styles/main.css';

function App() {
  return (
    <>
      {/* Animated particle canvas — fixed behind all sections */}
      <AnimatedBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>
          Crafted with 💜 by <span>Aradhana Mohanty</span> · Cloud &amp; Full Stack Developer · Bhubaneswar, Odisha
        </p>
      </footer>
    </>
  );
}

export default App;