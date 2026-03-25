import { useEffect, useRef } from 'react';

export default function Education() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="education" ref={ref}>
      <div className="section-inner">
        <div className="section-tag fade-in-up">Background</div>
        <h2 className="section-title fade-in-up">
          Education & <span>Achievements</span>
        </h2>
        <p className="section-subtitle fade-in-up">
          Academic foundation and recognition received throughout my professional journey.
        </p>

        <div className="edu-ach-grid">
          {/* Education */}
          <div className="edu-card fade-in-up">
            <div className="card-header-icon">🎓</div>
            <div className="edu-degree">B.Tech — Electrical Engineering</div>
            <div className="edu-uni">Maulana Abul Kalam Azad University of Technology</div>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Strong foundation in engineering principles combined with self-taught full-stack
              web development skills, with a focus on backend systems.
            </p>
          </div>

          {/* Achievements */}
          <div className="ach-card fade-in-up" style={{ transitionDelay: '0.1s' }}>
            <div className="card-header-icon">🏆</div>
            <div className="edu-degree" style={{ marginBottom: '1.25rem' }}>Achievements</div>
            <ul className="ach-list">
              <li>
                <span className="ach-icon">⭐</span>
                <span>
                  <strong>Efficiency Expert Award</strong> — Recognized by the company for
                  outstanding performance and consistently delivering high-quality work.
                </span>
              </li>
              <li>
                <span className="ach-icon">🌱</span>
                <span>
                  <strong>Eagerness to Learn Award</strong> — Awarded for proactively learning
                  new technologies and taking initiative on challenging projects.
                </span>
              </li>
              <li>
                <span className="ach-icon">🚀</span>
                <span>
                  Self-taught AWS, Azure, Cloudflare, and Stripe integrations in a production
                  environment, handling real-world infrastructure at scale.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
