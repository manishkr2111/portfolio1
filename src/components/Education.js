export default function Education() {
  const competencies = [
    {
      title: 'Scalable Architecture',
      desc: 'Building modular code bases following MVC principles, service layers, and repository patterns in Laravel.',
      icon: '🏛️',
    },
    {
      title: 'API & Data Security',
      desc: 'Implementing secure token authentication, input validation, CSRF protection, and error handling.',
      icon: '🔒',
    },
    {
      title: 'DevOps & Server Hosting',
      desc: 'Hands-on management of DNS, SSL renewals, Cloudflare proxying, EC2 server setups, and aaPanel/cPanel hosting.',
      icon: '🚀',
    },
    {
      title: 'Continuous Troubleshooting',
      desc: 'Diagnosing production incidents, database slow queries, email delivery bottlenecks, and API integrations.',
      icon: '🔍',
    },
  ];

  return (
    <section className="section" id="education">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Academic Background</span>
          <h2 className="section-heading">Education & Core Competencies</h2>
          <p className="section-subtext">
            Strong engineering foundation combined with specialized hands-on software development expertise.
          </p>
        </div>

        <div className="education-layout">
          <div className="education-main-card">
            <div className="education-badge">Graduated 2023</div>
            <div className="education-icon-box">🎓</div>
            <h3 className="education-degree">B.Tech in Electrical Engineering</h3>
            <p className="education-institution">
              Maulana Abul Kalam Azad University of Technology (MAKAUT)
            </p>
            <p className="education-desc">
              Rigorous engineering curriculum providing a solid analytical foundation in systems, logic,
              problem-solving, and computational mathematics, transitioned into specialized backend software development.
            </p>

            <div className="education-meta-strip">
              <div className="meta-item">
                <span className="meta-label">Degree</span>
                <span className="meta-val">Bachelor of Technology</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Completion Year</span>
                <span className="meta-val">2023</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Focus Area</span>
                <span className="meta-val">Backend Software Eng.</span>
              </div>
            </div>
          </div>

          <div className="competencies-grid">
            {competencies.map((c) => (
              <div className="competency-card" key={c.title}>
                <span className="competency-icon">{c.icon}</span>
                <div>
                  <h4 className="competency-title">{c.title}</h4>
                  <p className="competency-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
