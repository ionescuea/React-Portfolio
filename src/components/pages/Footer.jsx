import { Icon } from "@iconify/react/dist/iconify.js";
const Footer = () => {
  return (
    <div className="container">
        <footer className="footer row">
          <ul className="col nav-link list-unstyled d-flex justify-content-evenly mt-2 m-0">
              <li><a href="https://github.com/ionescuea" className="btn btn-outline-primary" target='_blank'>
              <Icon icon="mdi:github" /></a></li>
              <li><a href="https://www.linkedin.com/in/alexandra-e-ionescu/" className="btn btn-outline-primary" target='_blank'>
              <Icon icon="mdi:linkedin" /></a></li>
          </ul>
        </footer>
    </div>
  );
}

export default Footer;
