import { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Built' },
    { number: '5+', label: 'Tech Stacks' },
    { number: '100%', label: 'Dedication' },
  ];

  return (
    <section className="section" id="about" ref={ref}>
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <div className="section-tag fade-in-up">About Me</div>
            <h2 className="section-title fade-in-up">
              Crafting Robust <span>Backend Systems</span>
            </h2>
            <div className="about-text fade-in-up">
              <p>
                I'm a Web Developer with 1+ year of experience in Laravel/PHP backend development,
                REST API design, and deployment/hosting management. I thrive on building scalable,
                reliable systems that power real-world applications.
              </p>
              <p>
                Hands-on experience with AWS EC2, Cloudflare CDN, Stripe payments, and Azure
                Functions/Azure OpenAI for AI-powered applications. I'm strong at troubleshooting
                production issues and maintaining scalable web systems.
              </p>
              <p>
                Currently working at <strong style={{ color: 'var(--accent-primary)' }}>IB Arts Pvt Ltd</strong>, where
                I develop and maintain Laravel/PHP backend services and REST APIs for multiple
                in-house and client platforms.
              </p>
            </div>
          </div>

          <div className="stats-grid fade-in-up">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
