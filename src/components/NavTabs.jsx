import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavTabs(props) {
  const handlePageChange = (page) => {
    props.handlePageChange(page);
  };

  const handleNavClick = (event, page, hash) => {
    event.preventDefault();
    window.location.hash = hash;
    handlePageChange(page);
  };

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="navTab container-fluid">
        <a className="navbar-brand" href="#home" onClick={(event) => handleNavClick(event, 'Home', 'home')}>Alexandra Ionescu <br />
          <p className="title">Front-End Developer | Digital & Technical Support</p></a>
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
