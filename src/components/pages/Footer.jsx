import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import { FiFileText } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="container">
        <footer className="footer row">
          <ul className="col nav-link list-unstyled d-flex justify-content-around mt-2 m-0">
              <li><a href="https://github.com/ionescuea" className="btn btn-outline-primary" target='_blank'><FiGithub /> GitHub</a></li>
              <li><a href="mailto:ionescuea@yahoo.com" className="btn btn-outline-primary" target='_blank'><MdAlternateEmail /> Email</a></li>
              <li><a href="resume.pdf" className="btn btn-outline-primary" target='_blank'><FiFileText /> Resume</a></li>
              <li><a href="https://www.linkedin.com/in/alexandra-e-ionescu/" className="btn btn-outline-primary" target='_blank'><PiLinkedinLogo /> LinkedIn</a></li>
          </ul>
        </footer>
    </div>
  );
}

export default Footer;