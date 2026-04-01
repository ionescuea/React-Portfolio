import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react/dist/iconify.js';

function NavTabs(props) {
  const handlePageChange = (page) => {
    props.handlePageChange(page);
  };

  const handleNavClick = (event, page, hash) => {
    event.preventDefault();
    if (props.currentPage === page) {
      const el = document.getElementById(hash);
      if (el) {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      }
      return;
    }
    handlePageChange(page);
    window.history.pushState(null, '', `#${hash}`);
  };

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="navTab container-fluid">
        <a className="navbar-brand" href="#home" onClick={(event) => handleNavClick(event, 'Home', 'home')}>Alexandra Ionescu <br />
          <p className="title">Front-end Developer | Digital and Technical Support</p></a>
        <div className="header-social-links d-none d-lg-flex" aria-label="Quick links">
          {/* <span className="header-social-label">Quick links</span> */}
          <a
            href="#projectgallery"
            className="header-social-btn"
            onClick={(event) => handleNavClick(event, 'Project Gallery', 'projectgallery')}
            aria-label="Visit project gallery"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="header-social-btn"
            onClick={(event) => handleNavClick(event, 'Contact', 'contact')}
            aria-label="Go to contact page"
          >
            Contact Me
          </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Alexandra Ionescu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  href="#home"
                  onClick={(event) => handleNavClick(event, 'Home', 'home')}
                  className={`nav-link ${props.currentPage === 'Home' ? 'active' : ''}`}
                  data-bs-dismiss="offcanvas"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={(event) => handleNavClick(event, 'About', 'about')}
                  className={`nav-link ${props.currentPage === 'About' ? 'active' : ''}`}
                  data-bs-dismiss="offcanvas"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projectgallery"
                  onClick={(event) => handleNavClick(event, 'Project Gallery', 'projectgallery')}
                  className={`nav-link ${props.currentPage === 'Project Gallery' ? 'active' : ''}`}
                  data-bs-dismiss="offcanvas"
                >
                  Project Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#techstack"
                  onClick={(event) => handleNavClick(event, 'Tech Stack', 'techstack')}
                  className={`nav-link ${props.currentPage === 'Tech Stack' ? 'active' : ''}`}
                  data-bs-dismiss="offcanvas"
                >
                  Tech Stack
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={(event) => handleNavClick(event, 'Contact', 'contact')}
                  className={`nav-link ${props.currentPage === 'Contact' ? 'active' : ''}`}
                  data-bs-dismiss="offcanvas"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="offcanvas-social mt-4">
              <p className="offcanvas-social-label mb-2">Connect</p>
              <div className="d-flex gap-2">
                <a
                  href="https://github.com/ionescuea"
                  className="btn btn-outline-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Alexandra Ionescu on GitHub"
                >
                  <Icon icon="mdi:github" aria-hidden="true" focusable="false" />
                  <span className="ms-2">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/alexandra-e-ionescu/"
                  className="btn btn-outline-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Alexandra Ionescu on LinkedIn"
                >
                  <Icon icon="mdi:linkedin" aria-hidden="true" focusable="false" />
                  <span className="ms-2">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavTabs.propTypes = {
  currentPage: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default NavTabs;
