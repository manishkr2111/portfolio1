import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 'linkodart',
      title: 'Linkodart',
      subtitle: 'QR Campaign Management Platform',
      status: 'Production',
      type: 'Production Platform',
      category: 'Fintech & Marketing',
      description: 'A full-scale marketing platform allowing businesses to build, track, and monetize dynamic QR campaigns with integrated wallet funding.',
      points: [
        'Contributed to backend functionality for campaign creation, dynamic QR code generation, and customizable QR campaigns.',
        'Integrated Stripe subscription payments and wallet functionality, allowing users to fund wallets and pay for campaigns seamlessly.',
        'Structured transactional database architecture in MySQL to maintain precise credit balances and transaction histories.',
      ],
      techs: ['Laravel', 'PHP', 'MySQL', 'Stripe', 'REST APIs', 'Queue Workers'],
      icon: '🔗',
    },
    {
      id: 'weconsent',
      title: 'WeConsent',
      subtitle: 'Consent & Privacy Platform',
      status: 'Production',
      type: 'Production Platform',
      category: 'Privacy & Compliance',
      description: 'An enterprise privacy platform facilitating compliant user consent workflows, proof generation, and secured interactions.',
      points: [
        'Contributed to backend functionality for consent workflows, identity verification, and secure user interactions.',
        'Engineered tamper-evident data models and authorization gates ensuring robust privacy compliance.',
        'Created optimized endpoints consumed by web clients with comprehensive request validation.',
      ],
      techs: ['Laravel', 'PHP', 'REST APIs', 'MySQL', 'Security & Auth'],
      icon: '🛡️',
    },
    {
      id: 'laskill',
      title: 'LA Skill Academy',
      subtitle: 'Student Onboarding Platform',
      status: 'Production',
      type: 'Production Platform',
      category: 'EdTech Platform',
      description: 'An educational management system streamlining course discovery, student registrations, and self-service onboarding.',
      points: [
        'Implemented backend workflows supporting student registration and onboarding through a web-based platform.',
        'Leveraged Inertia.js with Laravel to deliver single-page application responsiveness without sacrificing Laravel backend security.',
        'Designed database entities handling enrollments, profiles, and student verification stages.',
      ],
      techs: ['Laravel', 'Inertia.js', 'PHP', 'MySQL', 'Blade'],
      icon: '🎓',
    },
    {
      id: 'mafatihul',
      title: 'Mafatihul Jinan',
      subtitle: 'Religious Content Platform',
      status: 'Production',
      type: 'Production Platform',
      category: 'Mobile API & Content CMS',
      description: 'A multi-tier content publishing portal and high-throughput mobile API backend for religious literature and Quranic content.',
      points: [
        'Built backend content management modules for Quran-related content and scripture cataloging.',
        'Designed and optimized high-performance REST APIs for retrieving categorized content in the mobile application.',
        'Implemented database caching and query tuning to ensure minimal latency for mobile app end-users.',
      ],
      techs: ['Laravel', 'PHP', 'MySQL', 'Blade', 'REST APIs'],
      icon: '📖',
    },
    {
      id: 'clinic',
      title: 'Clinic Appointment Booking System',
      subtitle: 'Personal Project',
      status: 'In Progress',
      type: 'In Progress',
      category: 'Healthcare Management',
      description: 'A complete clinic management system supporting flexible physician scheduling, slot reservation, and patient workflow tracking.',
      points: [
        'Developing a clinic appointment platform with configurable doctor availability slots and double-booking prevention.',
        'Building appointment scheduling, patient record intake, and automated notification workflows.',
        'Implementing modular REST API services for appointment statuses and practitioner dashboard.',
      ],
      techs: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Relational Schema'],
      icon: '🩺',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.type === activeFilter);

  return (
    <section className="section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subtext">
            Production web applications, client platforms, and personal backend architectures.
          </p>

          {/* Filter Tabs */}
          <div className="project-filter-tabs">
            <button
              className={`filter-tab ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => setActiveFilter('All')}
            >
              All Projects ({projects.length})
            </button>
            <button
              className={`filter-tab ${activeFilter === 'Production Platform' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Production Platform')}
            >
              Production Systems (4)
            </button>
            <button
              className={`filter-tab ${activeFilter === 'In Progress' ? 'active' : ''}`}
              onClick={() => setActiveFilter('In Progress')}
            >
              In Progress (1)
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((p) => (
            <div className="project-card" key={p.id}>
              <div className="project-card-header">
                <div className="project-identity">
                  <span className="project-icon-badge">{p.icon}</span>
                  <div>
                    <h3 className="project-title">{p.title}</h3>
                    <div className="project-sub-line">
                      <span className="project-subtitle">{p.subtitle}</span>
                      <span className="project-cat-pill">{p.category}</span>
                    </div>
                  </div>
                </div>

                <span className={`status-pill ${p.status === 'In Progress' ? 'status-pill-progress' : 'status-pill-prod'}`}>
                  {p.status}
                </span>
              </div>

              <p className="project-desc-text">{p.description}</p>

              <div className="project-bullets">
                {p.points.map((pt, i) => (
                  <div key={i} className="project-point-row">
                    <span className="point-dot">▸</span>
                    <span className="point-text">{pt}</span>
                  </div>
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
