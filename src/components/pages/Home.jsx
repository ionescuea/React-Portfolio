import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';


const Home = () => (
  <div className="container-fluid home-page-layout">
    {/* <div className="row">
      <div className="col-lg-12 text-center">
        <h1 className="greetings row align-items-center justify-content-center pt-md-10 pb-md-10 mb-md-10 w-100">I build responsive, user-friendly web applications using React, JavaScript, HTML, and CSS.
        <br></br>With a background in business support and administration, I bring strong organisational skills, attention to detail, and a problem-solving mindset into every project.</h1>
      </div>
    </div> */}
    <div className="row home-page-row">
      <div className="col-lg-7 col-sm-12 d-flex flex-column justify-content-center align-items-center">
        <h1 className="page-title">
          Welcome to my portfolio!
        </h1>
        <div className="intro-card justify-content-center shadow-lg rounded-5 fw-semibold bg-light p-4 mb-4 content-text">
          I build responsive, user-friendly web applications using React, JavaScript, HTML, and CSS. <br /> With a background in business support and administration, I bring strong organisational skills, attention to detail, and a problem-solving mindset into every project.
        </div>
        <h2 className="section-title py-2">
          Frontend Technologies
        </h2>
        <div className="intro-card justify-content-center shadow-lg rounded-5 fw-semibold bg-light p-3 mb-4">
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
      <div className="photos col-lg-5 col-sm-12 d-flex flex-column justify-content-center p-0 mb-1">
        <video
          src="video-design.mp4"
          alt="Alex's pictures"
          style={{ maxWidth: '350px' }}
          className="img img-fluid image-style animation-flipInY border-3 rounded-5 d-block img-thumbnail mx-auto shadow-lg"
          controls
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  </div>
);

export default Home;