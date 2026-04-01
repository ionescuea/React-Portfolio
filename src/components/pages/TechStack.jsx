import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: 'logos:react' },
      { name: 'JavaScript (ES6+)', icon: 'logos:javascript' },
      { name: 'HTML5 / CSS3', icon: 'logos:html-5' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Express', icon: 'simple-icons:express' },
    ],
  },
  {
    title: 'Database',
    items: [{ name: 'MongoDB', icon: 'logos:mongodb-icon' }],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git & GitHub', icon: 'logos:github-icon' },
      { name: 'WordPress', icon: 'logos:wordpress-icon' },
      { name: 'Netlify & Hosting', icon: 'logos:netlify-icon' },
      { name: 'REST APIs', icon: 'mdi:api' },
    ],
  },
];

const TechStack = () => (
  <div id="techstack" className="container py-5 mt-3 page-section-anchor">
    <div className="row justify-content-center">
      <div className="col-lg-8 col-sm-12">
        <h1 className="page-title">
          Tech Stack
        </h1>
        <div className="intro-card tech-stack-card shadow-lg rounded-5 fw-semibold bg-light p-4">
          <div className="tech-stack-groups">
            {skillGroups.map((group) => (
              <section key={group.title} className="tech-stack-group">
                <h2 className="tech-stack-group-title">{group.title}</h2>
                <ul className="tech-stack-grid mb-0 p-0">
                  {group.items.map((item) => (
                    <li key={item.name} className="tech-stack-item content-text">
                      <span className="tech-stack-icon">
                        <Icon icon={item.icon} width="28" height="28" />
                      </span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TechStack;
