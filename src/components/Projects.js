export default function Projects() {
  const projects = [
    {
      title: 'Linkodart',
      subtitle: 'QR Campaign Management Platform',
      status: 'Production',
      category: 'Enterprise Platform',
      points: [
        'Contributed to backend functionality for campaign creation, dynamic QR code generation, and customizable QR campaigns.',
        'Integrated Stripe subscription payments and wallet functionality, allowing users to fund wallets and pay for campaigns.',
      ],
      techs: ['Laravel', 'PHP', 'MySQL', 'Stripe', 'REST APIs'],
      icon: '🔗',
    },
    {
      title: 'WeConsent',
      subtitle: 'Consent & Privacy Platform',
      status: 'Production',
      category: 'Privacy & Security',
      points: [
        'Contributed to backend functionality for consent workflows, identity verification, and secure user interactions.',
        'Structured database entities and authorization policies for compliance workflows.',
      ],
      techs: ['Laravel', 'PHP', 'REST APIs', 'MySQL'],
      icon: '🛡️',
    },
    {
      title: 'LA Skill Academy',
      subtitle: 'Student Onboarding Platform',
      status: 'Production',
      category: 'EdTech Platform',
      points: [
        'Implemented backend workflows supporting student registration and onboarding through a web-based platform.',
        'Integrated Inertia.js with Laravel for seamless client-server interaction and responsive user journeys.',
      ],
      techs: ['Laravel', 'Inertia.js', 'PHP', 'MySQL'],
      icon: '🎓',
    },
    {
      title: 'Mafatihul Jinan',
      subtitle: 'Religious Content Platform',
      status: 'Production',
      category: 'Mobile API & CMS',
      points: [
        'Built backend content management modules for Quran-related content with Blade templates.',
        'Designed and optimized high-performance REST APIs for retrieving content in the mobile application.',
      ],
      techs: ['Laravel', 'PHP', 'MySQL', 'Blade', 'REST APIs'],
      icon: '📖',
    },
    {
      title: 'Clinic Appointment Booking System',
      subtitle: 'Personal Project',
      status: 'In Progress',
      category: 'Healthcare Management',
      points: [
        'Developing a comprehensive clinic appointment platform with configurable doctor availability slots.',
        'Implementing appointment scheduling, patient intake, and clinic management workflows.',
      ],
      techs: ['Laravel', 'PHP', 'MySQL', 'REST APIs'],
      icon: '🩺',
    },
  ];

  return (
    <section className="section section-alt" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subtext">
            Key web applications, platforms, and backend systems I have developed and contributed to.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-card-top">
                <div className="project-title-area">
                  <span className="project-emoji-icon">{p.icon}</span>
                  <div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-subtitle">{p.subtitle}</p>
                  </div>
                </div>
                <span className={`status-pill ${p.status === 'In Progress' ? 'status-pill-progress' : 'status-pill-prod'}`}>
                  {p.status}
                </span>
              </div>

              <div className="project-bullets">
                {p.points.map((pt, i) => (
                  <p key={i} className="project-point">
                    <span className="point-bullet">•</span>
                    <span>{pt}</span>
                  </p>
                ))}
              </div>

              <div className="project-tech-chips">
                {p.techs.map((t) => (
                  <span className="tech-chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
