export default function Experience() {
  const experiences = [
    {
      role: 'Web Developer',
      company: 'iB Arts Pvt. Ltd.',
      period: '2023 – Present',
      type: 'Full-time',
      bullets: [
        'Develop and extend PHP and Laravel applications, implementing backend logic, database operations, and business workflows.',
        'Build REST APIs and backend modules to support web applications, mobile clients, and third-party integrations.',
        'Integrate Stripe subscription payments and wallet-based payment workflows for campaign and subscription management.',
        'Customize WordPress backends, configure website features, and support content management and e-commerce functionality.',
        'Manage website hosting, DNS records, SSL certificates, domain settings, and email configurations.',
        'Troubleshoot application, database, hosting, and deployment issues to support website functionality and reliability.',
      ],
      tags: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Stripe', 'WordPress', 'AWS EC2', 'Cloudflare', 'cPanel', 'DNS/SSL'],
    },
  ];

  return (
    <section className="section" id="experience">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Career</span>
          <h2 className="section-heading">Professional Experience</h2>
          <p className="section-subtext">
            My journey building production web applications, APIs, and backend architectures.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.company}>
              <div className="experience-card-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-company-line">
                    <span className="company-name">{exp.company}</span>
                    <span className="experience-type-pill">{exp.type}</span>
                  </div>
                </div>
                <div className="experience-date-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="experience-bullet-list">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="experience-bullet-item">
                    <span className="bullet-check">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="experience-tag-group">
                {exp.tags.map((tag) => (
                  <span className="tech-chip" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
