import { useEffect, useRef } from 'react';

const experiences = [
  {
    role: 'Web Developer',
    company: 'IB Arts Pvt Ltd',
    period: 'Jul 2023 – Present',
    points: [
      'Develop and maintain Laravel/PHP backend services and REST APIs for multiple in-house and client platforms.',
      'Handle hosting/server operations: deployments, monitoring, domain/DNS updates, SSL renewals, SMTP configuration, and incident troubleshooting.',
      'Implement and maintain Stripe payment flows (checkout, subscriptions), ensuring secure and reliable transactions.',
      'Configure and manage Cloudflare (DNS, caching, security rules) to improve performance and availability.',
      'Deploy and operate workloads on AWS EC2 and Azure services (Azure Functions, Azure VM, Azure OpenAI).',
    ],
  },
];

export default function Experience() {
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
    <section className="section" id="experience" ref={ref}>
      <div className="section-inner">
        <div className="section-tag fade-in-up">Experience</div>
        <h2 className="section-title fade-in-up">
          Where I've <span>Made Impact</span>
        </h2>
        <p className="section-subtitle fade-in-up">
          Professional experience building and scaling real-world backend systems.
        </p>

        <div className="timeline fade-in-up">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.role}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-period">{exp.period}</div>
                </div>
                <div className="timeline-company">@ {exp.company}</div>
                <ul className="timeline-points">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
