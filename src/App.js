import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="footer">
        <p>
          Designed & Built with <span>♥</span> by <strong>Manish Kumar</strong> &nbsp;·&nbsp; © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
