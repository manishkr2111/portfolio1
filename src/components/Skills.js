import { useState } from 'react';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');

  const skillCategories = [
    {
      name: 'Frameworks & CMS',
      categoryBadge: 'Architecture',
      description: 'Primary backend frameworks and content management systems',
      skills: ['Laravel', 'WordPress Backend Development'],
    },
    {
      name: 'Languages & Core',
      categoryBadge: 'Languages',
      description: 'Programming and query languages for backend and frontend',
      skills: ['PHP', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'Databases & Design',
      categoryBadge: 'Data',
      description: 'Relational data modeling, schema optimization, and querying',
      skills: ['MySQL', 'Relational Database Design'],
    },
    {
      name: 'Backend Architecture',
      categoryBadge: 'Engineering',
      description: 'Patterns, asynchronous tasks, and application interfaces',
      skills: ['REST APIs', 'MVC Architecture', 'Queue Workers'],
    },
    {
      name: 'Payments & Billing',
      categoryBadge: 'Fintech',
      description: 'Payment gateway integrations, recurring plans, and wallet credits',
      skills: ['Stripe', 'Subscription Billing', 'Wallet Integration'],
    },
    {
      name: 'Cloud & Infrastructure',
      categoryBadge: 'Cloud',
      description: 'Hosting infrastructure, edge network, security, and DNS',
      skills: ['Cloudflare', 'AWS EC2', 'DNS', 'SSL'],
    },
    {
      name: 'Hosting & Email Delivery',
      categoryBadge: 'DevOps',
      description: 'Control panels, domain management, and authentication records',
      skills: ['cPanel', 'aaPanel', 'SMTP', 'SPF', 'DKIM', 'Domain Management'],
    },
    {
      name: 'Version Control',
      categoryBadge: 'Tooling',
      description: 'Source code management and team collaboration workflow',
      skills: ['Git'],
    },
  ];

  const filteredCategories = skillCategories.map(cat => {
    if (!searchTerm.trim()) return cat;
    const filteredSkills = cat.skills.filter(s =>
      s.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const categoryMatches = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    return {
      ...cat,
      skills: categoryMatches ? cat.skills : filteredSkills,
      matches: categoryMatches || filteredSkills.length > 0,
    };
  }).filter(cat => !searchTerm.trim() || cat.matches);

  return (
    <section className="section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Technical Stack</span>
          <h2 className="section-heading">Technical Skills & Expertise</h2>
          <p className="section-subtext">
            A comprehensive overview of technologies and tools I work with daily to engineer production backend systems.
          </p>

          <div className="skills-search-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search skills (e.g. Laravel, Stripe, MySQL)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="skills-search-input"
            />
            {searchTerm && (
              <button
                className="skills-search-clear"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="skills-grid">
          {filteredCategories.map((cat) => (
            <div className="skill-card" key={cat.name}>
              <div className="skill-card-top">
                <div>
                  <h3 className="skill-category-title">{cat.name}</h3>
                  <p className="skill-category-desc">{cat.description}</p>
                </div>
                <span className="skill-badge-tag">{cat.categoryBadge}</span>
              </div>

              <div className="skill-badge-list">
                {cat.skills.map((skill) => {
                  const isHighlighted = searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase());
                  return (
                    <span
                      className={`skill-badge ${isHighlighted ? 'skill-badge-highlighted' : ''}`}
                      key={skill}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
