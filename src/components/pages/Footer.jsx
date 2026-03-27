import { Icon } from "@iconify/react/dist/iconify.js";
const Footer = () => {
  return (
    <div className="container">
        <footer className="footer row">
          <div className="col d-flex align-items-center justify-content-center gap-3 flex-wrap py-2">
            <span className="footer-social-label">Find me on:</span>
            <a href="https://github.com/ionescuea" className="btn btn-outline-primary footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Visit Alexandra Ionescu on GitHub">
              <Icon icon="mdi:github" aria-hidden="true" focusable="false" />
              <span className="ms-2">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/alexandra-e-ionescu/" className="btn btn-outline-primary footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Visit Alexandra Ionescu on LinkedIn">
              <Icon icon="mdi:linkedin" aria-hidden="true" focusable="false" />
              <span className="ms-2">LinkedIn</span>
            </a>
          </div>
        </footer>
    </div>
  );
}

export default Footer;
