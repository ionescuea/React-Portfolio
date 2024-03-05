import React from 'react';
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { RxResume } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="container w-100">
        <footer className="footer row">
          <ul className="col nav-link list-unstyled d-flex justify-content-around mt-2 m-0">
              <li><a href="https://github.com/ionescuea" className="btn btn-outline-primary fa"><FiGithub /></a> GitHub</li>
              <li><a href="mailto:ionescuea@yahoo.com" className="btn btn-outline-primary fa"><MdAlternateEmail /></a> Email</li>
              <li><a href="yourresume.pdf"><RxResume /> Resume</a></li>
              <li><a href="https://www.linkedin.com/in/alexandra-e-ionescu/" className="btn btn-outline-primary fa"><CiLinkedin /></a> LinkedIn</li>
          </ul>
        </footer>
    </div>
  );
}

export default Footer;