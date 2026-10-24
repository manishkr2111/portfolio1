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
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="logo-badge">MK</span>
              <div>
                <div className="footer-name">Manish Kumar</div>
                <div className="footer-tagline">Laravel / PHP Backend Developer</div>
              </div>
            </div>

            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>

            <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll back to top">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
            </button>
          </div>

          <div className="footer-bottom">
            <p>© {currentYear} Manish Kumar. All rights reserved.</p>
            <p className="footer-email">manishkr211120002@gmail.com · +91 9507262310</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
