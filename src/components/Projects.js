import { useEffect, useRef } from 'react';

const projects = [
  {
    icon: '⚖️',
    name: 'LegalTech Assistant Platform',
    status: 'Active',
    statusClass: 'status-active',
    desc: 'Built Laravel backend APIs powering a legal assistant web platform with authentication, structured content delivery, and API integrations.',
    techs: ['Laravel', 'PHP', 'REST API', 'MySQL', 'Auth'],
    alt: false,
  },
  {
    icon: '🤖',
    name: 'AI Therapist-Style Chatbot',
    status: 'Active',
    statusClass: 'status-active',
    desc: 'Developed an AI stress-relief application using Azure Functions + Azure OpenAI; hosted and monitored on Azure with scalable serverless architecture.',
    techs: ['Azure Functions', 'Azure OpenAI', 'PHP', 'REST API'],
    alt: true,
  },
  {
    icon: '📖',
    name: 'Religious Content Platform',
    status: 'Active',
    statusClass: 'status-active',
    desc: 'Created backend APIs for Duas/Quran reading experience including optimized content access and search with high-performance endpoints.',
    techs: ['Laravel', 'MySQL', 'REST API', 'Caching'],
    alt: false,
  },
  {
    icon: '🔒',
    name: 'Consent & Privacy Platform',
    status: 'Active',
    statusClass: 'status-active',
    desc: 'Implemented backend modules/APIs for consent workflows, user activity tracking, and role-based access control for enterprise use.',
    techs: ['Laravel', 'PHP', 'RBAC', 'MySQL', 'Stripe'],
    alt: true,
  },
  {
    icon: '🎓',
    name: 'Student Onboarding & Registration',
    status: 'In Progress',
    statusClass: 'status-progress',
    desc: 'Developing secure onboarding, registration flows, and related REST APIs in Laravel with form validation and data integrity checks.',
    techs: ['Laravel', 'PHP', 'REST API', 'MySQL'],
    alt: false,
  },
];

export default function Projects() {
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
    <section className="section projects-section" id="projects" ref={ref}>
      <div className="section-inner">
        <div className="section-tag fade-in-up">Projects</div>
        <h2 className="section-title fade-in-up">
          Things I've <span>Built</span>
        </h2>
        <p className="section-subtitle fade-in-up">
          A selection of backend systems and APIs built at IB Arts Pvt Ltd. These are company-confidential projects.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className={`project-card${p.alt ? ' project-card-alt' : ''} fade-in-up`}
              key={p.name}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="project-header">
                <div className="project-icon">{p.icon}</div>
                <span className={`project-status ${p.statusClass}`}>{p.status}</span>
              </div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-techs">
                {p.techs.map(t => (
                  <span className="project-tech" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
