import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const links = [
    { href: '#about', id: 'about', label: 'About' },
    { href: '#skills', id: 'skills', label: 'Skills' },
    { href: '#experience', id: 'experience', label: 'Experience' },
    { href: '#projects', id: 'projects', label: 'Projects' },
    { href: '#education', id: 'education', label: 'Education' },
    { href: '#contact', id: 'contact', label: 'Contact' },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}>
            <span className="logo-badge">MK</span>
            <div className="logo-details">
              <span className="logo-text">Manish Kumar</span>
              <span className="logo-role-tag">Laravel Developer</span>
            </div>
          </a>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`${activeSection === l.id ? 'active' : ''} ${l.id === 'contact' ? 'nav-cta' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(l.href);
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
