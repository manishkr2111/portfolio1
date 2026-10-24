export default function Skills() {
  const skillCategories = [
    {
      name: 'Backend & Frameworks',
      icon: '⚙️',
      skills: ['Laravel', 'PHP', 'REST APIs', 'MVC Architecture', 'Queue Workers'],
    },
    {
      name: 'Databases & Languages',
      icon: '🗄️',
      skills: ['MySQL', 'Relational Database Design', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'Payments & Billing',
      icon: '💳',
      skills: ['Stripe', 'Subscription Billing', 'Wallet Integration', 'Payment Webhooks'],
    },
    {
      name: 'Cloud & Infrastructure',
      icon: '☁️',
      skills: ['AWS EC2', 'Cloudflare', 'DNS Records', 'SSL Certificates'],
    },
    {
      name: 'Hosting & Server Management',
      icon: '🖥️',
      skills: ['cPanel', 'aaPanel', 'Domain Management', 'Server Troubleshooting'],
    },
    {
      name: 'Email, CMS & Tools',
      icon: '🛠️',
      skills: ['WordPress Backend Development', 'SMTP Configuration', 'SPF & DKIM', 'Git'],
    },
  ];

  return (
    <section className="section section-alt" id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Technical Skills</span>
          <h2 className="section-heading">My Technical Skills</h2>
          <p className="section-subtext">
            Core technologies and tools I work with daily to build production backend systems and APIs.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-card" key={cat.name}>
              <div className="skill-card-header">
                <span className="skill-category-icon">{cat.icon}</span>
                <h3 className="skill-category-title">{cat.name}</h3>
              </div>
              <div className="skill-badge-list">
                {cat.skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
