export default function Experience() {
  const experienceData = {
    role: 'Web Developer',
    company: 'iB Arts Pvt. Ltd.',
    period: '2023 – Present',
    duration: '2+ Years',
    type: 'Full-time',
    summary:
      'Responsible for developing backend architecture, building secure REST APIs, implementing payment workflows, and managing live web hosting and server infrastructure.',
    responsibilities: [
      {
        area: 'Backend Logic & Architecture',
        text: 'Develop and extend PHP and Laravel applications, implementing robust backend logic, database operations, and automated business workflows.',
      },
      {
        area: 'REST APIs & Integrations',
        text: 'Build REST APIs and backend modules to support web applications, mobile clients, and third-party integrations with clean validation.',
      },
      {
        area: 'Payment Gateways & Wallets',
        text: 'Integrate Stripe subscription payments and wallet-based payment workflows for campaign and subscription management.',
      },
      {
        area: 'WordPress & CMS Customization',
        text: 'Customize WordPress backends, configure website features, and support content management and e-commerce functionality.',
      },
      {
        area: 'Hosting & Server Operations',
        text: 'Manage website hosting, DNS records, SSL certificates, domain settings, and email configurations (SPF, DKIM, SMTP).',
      },
      {
        area: 'Production Troubleshooting',
        text: 'Troubleshoot application, database, hosting, and deployment issues to support website functionality and high reliability.',
      },
    ],
    techStack: [
      'Laravel',
      'PHP',
      'MySQL',
      'REST APIs',
      'Stripe',
      'Subscription Billing',
      'WordPress',
      'AWS EC2',
      'Cloudflare',
      'cPanel',
      'aaPanel',
      'DNS / SSL',
      'Git',
    ],
  };

  return (
    <section className="section section-alt" id="experience">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Career History</span>
          <h2 className="section-heading">Professional Experience</h2>
          <p className="section-subtext">
            My journey building production web applications, APIs, payment systems, and server infrastructure.
          </p>
        </div>

        <div className="experience-wrapper">
          <div className="experience-card-enhanced">
            {/* Top Bar */}
            <div className="exp-enhanced-header">
              <div className="exp-role-block">
                <div className="exp-company-badge">
                  <span className="company-logo-pill">iB</span>
                  <div>
                    <h3 className="exp-role-title">{experienceData.role}</h3>
                    <div className="exp-company-sub">
                      <span className="exp-company-name">{experienceData.company}</span>
                      <span className="exp-dot">·</span>
                      <span className="exp-type">{experienceData.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="exp-date-box">
                <span className="exp-date-text">{experienceData.period}</span>
                <span className="exp-duration-badge">{experienceData.duration}</span>
              </div>
            </div>

            <p className="exp-summary-text">{experienceData.summary}</p>

            {/* Responsibilities Grid */}
            <div className="exp-resp-grid">
              {experienceData.responsibilities.map((r, i) => (
                <div className="exp-resp-item" key={i}>
                  <div className="exp-resp-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <span className="exp-resp-area">{r.area}</span>
                    <p className="exp-resp-desc">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies Used */}
            <div className="exp-tech-section">
              <span className="exp-tech-label">Key Technologies & Infrastructure:</span>
              <div className="exp-tech-chips">
                {experienceData.techStack.map((tech) => (
                  <span className="tech-chip" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
