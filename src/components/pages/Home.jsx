import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';


const Home = () => (
  <div className="container-fluid py-3 my-3">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h1 className="greetings row align-items-center justify-content-center pt-md-10 pb-md-10 mb-md-10 w-100">Alexandra Ionescu</h1>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-lg-7 col-sm-12 d-flex flex-column justify-content-center align-items-center py-3 my-3">
        <div className="h2 text-center">
          Welcome to my portfolio!
        </div>
        <div className="intro-card justify-content-center shadow rounded fw-semibold bg-light p-3 m-3">
          Specializing in front-end development with skills in HTML, CSS, JavaScript, and React, my focus is on crafting clean, responsive websites that work seamlessly across all devices. Building user-friendly and visually appealing interfaces is a priority, with a dedication to code that's both efficient and maintainable.
          Always open to learning new tools and approaches, especially in fast-evolving front-end development, I'm excited to take on projects that offer growth and challenge. Feel free to explore the projects featured here, and don't hesitate to reach out for potential collaborations!
        </div>
        <div className="h5 text-center py-3">
          Frontend Technologies used
        </div>
        <div className="intro-card justify-content-center shadow rounded fw-semibold bg-light p-3 m-3">
          <div className="d-flex text-center justify-content-around align-items-center pt-2 pb-2">
            <div>
              <Icon icon="logos:html-5" width="24" height="24" />
              <span className="d-none d-sm-inline-block">HTML</span>
            </div>
            <div>
              <Icon icon="logos:css-3" width="24" height="24" />
              <span className="d-none d-sm-inline-block">CSS</span>
            </div>
            <div>
              <Icon icon="logos:bootstrap" width="24" height="24" />
              <span className="d-none d-sm-inline-block">Bootstrap</span>
            </div>
            <div>
              <Icon icon="logos:javascript" width="24" height="24" />
              <span className="d-none d-sm-inline-block">JavaScript</span>
            </div>
          </div>
          <div className="d-flex text-center justify-content-around align-items-center pt-2 pb-2">
            <div>
              <Icon icon="logos:react" width="24" height="24" />
              <span className="d-none d-sm-inline-block">React</span>
            </div>
            <div>
              <Icon icon="logos:nodejs-icon" width="24" height="24" />
              <span className="d-none d-sm-inline-block">Node.js</span>
            </div>
            <div>
              <Icon icon="logos:github-icon" width="24" height="24" />
              <span className="d-none d-sm-inline-block">GitHub</span>
            </div>
          </div>
        </div>
      </div>
      <div className="photos col-lg-5 col-sm-12 d-flex flex-column justify-content-center py-3 my-3 p-3">
        <img
          src="portfolio-photos.jpg"
          alt="Alex's pictures"
          style={{ maxWidth: '400px' }}
          className="img img-fluid rounded-5 d-block img-thumbnail mx-auto"
        />
      </div>
    </div>
  </div>
);

export default Home;