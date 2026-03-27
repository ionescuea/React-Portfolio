import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';

const technologies = [
  { name: 'React', icon: 'logos:react' },
  { name: 'JavaScript (ES6+)', icon: 'logos:javascript' },
  { name: 'HTML5 & CSS3', icon: 'logos:html-5' },
  { name: 'REST APIs', icon: 'mdi:api' },
  { name: 'Git & GitHub', icon: 'logos:github-icon' },
  { name: 'WordPress', icon: 'logos:wordpress-icon' },
  { name: 'Netlify & Hosting', icon: 'logos:netlify-icon' },
];

const TechStack = () => (
  <div id="techstack" className="container py-5 mt-3 page-section-anchor">
    <div className="row justify-content-center">
      <div className="col-lg-8 col-sm-12">
        <h1 className="page-title">
          Tech Stack
        </h1>
        <div className="intro-card tech-stack-card shadow-lg rounded-5 fw-semibold bg-light p-4">
          <p className="page-subtitle mb-3">Technologies I Use</p>
          <ul className="tech-stack-grid mb-0 p-0">
            {technologies.map((technology) => (
              <li key={technology.name} className="tech-stack-item content-text">
                <span className="tech-stack-icon">
                  <Icon icon={technology.icon} width="28" height="28" />
                </span>
                <span>{technology.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default TechStack;
