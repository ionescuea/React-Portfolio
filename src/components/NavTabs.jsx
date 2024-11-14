import { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavTabs(props) {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    props.handlePageChange(page);
    setCurrentPage(page);
  };

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="navTab container-fluid">
        <a className="navbar-brand" href="#Home" onClick={() => handlePageChange('Home')}>AI ionescuEA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-5" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">AI ionescuEA</h5>
          </div>
          <div className="offcanvas-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  href="#Home"
                  onClick={() => handlePageChange('Home')}
                  className={`nav-link ${props.currentPage === 'Home' ? 'active' : ''}`}
                  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Contact"
                  onClick={() => handlePageChange('Contact')}
                  className={`nav-link ${props.currentPage === 'Contact' ? 'active' : ''}`}
                  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#ProjectGallery"
                  onClick={() => handlePageChange('Project Gallery')}
                  className={`nav-link ${props.currentPage === 'Project Gallery' ? 'active' : ''}`}
                  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                >
                  Project Gallery
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
