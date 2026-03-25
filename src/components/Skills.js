import { useEffect, useRef } from 'react';

const categories = [
  {
    icon: '⚙️',
    iconBg: 'icon-bg-1',
    name: 'Backend & Languages',
    items: [
      { label: 'Laravel', color: '' },
      { label: 'PHP', color: '' },
      { label: 'REST APIs', color: '' },
      { label: 'MySQL', color: '' },
    ],
  },
  {
    icon: '💳',
    iconBg: 'icon-bg-2',
    name: 'Payments',
    items: [
      { label: 'Stripe', color: 'green' },
      { label: 'Checkout', color: 'green' },
      { label: 'Subscriptions', color: 'green' },
      { label: 'Webhooks', color: 'green' },
    ],
  },
  {
    icon: '☁️',
    iconBg: 'icon-bg-3',
    name: 'Cloud & Infra',
    items: [
      { label: 'AWS EC2', color: 'red' },
      { label: 'Cloudflare', color: 'red' },
      { label: 'Azure VM', color: 'red' },
      { label: 'Azure OpenAI', color: 'red' },
      { label: 'Azure Functions', color: 'red' },
    ],
  },
  {
    icon: '🛠️',
    iconBg: 'icon-bg-4',
    name: 'Hosting & Tools',
    items: [
      { label: 'cPanel', color: 'yellow' },
      { label: 'DNS', color: 'yellow' },
      { label: 'SSL', color: 'yellow' },
      { label: 'SMTP', color: 'yellow' },
      { label: 'Git', color: 'yellow' },
      { label: 'Postman', color: 'yellow' },
    ],
  },
];

export default function Skills() {
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
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="section-inner">
        <div className="section-tag fade-in-up">Skills</div>
        <h2 className="section-title fade-in-up">My <span>Technical Arsenal</span></h2>
        <p className="section-subtitle fade-in-up">
          A curated set of technologies I work with daily to build production-grade applications.
        </p>

        <div className="skills-categories">
          {categories.map((cat, i) => (
            <div
              className="skill-category fade-in-up"
              key={cat.name}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`skill-category-icon ${cat.iconBg}`}>{cat.icon}</div>
              <div className="skill-category-name">{cat.name}</div>
              <div className="skill-tags">
                {cat.items.map((item) => (
                  <span key={item.label} className={`skill-tag ${item.color}`}>
                    {item.label}
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
