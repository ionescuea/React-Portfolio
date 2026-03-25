import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';


const Home = () => (
  <div className="container-fluid mt-0 pt-0 pb-3 mb-3">
    {/* <div className="row">
      <div className="col-lg-12 text-center">
        <h1 className="greetings row align-items-center justify-content-center pt-md-10 pb-md-10 mb-md-10 w-100">I build responsive, user-friendly web applications using React, JavaScript, HTML, and CSS.
        <br></br>With a background in business support and administration, I bring strong organisational skills, attention to detail, and a problem-solving mindset into every project.</h1>
      </div>
    </div> */}
    <div className="row">
      <div className="col-lg-7 col-sm-12 d-flex flex-column justify-content-center align-items-center pt-2 mt-2">
        <div className="h2 text-center">
          Welcome to my portfolio!
        </div>
        <div className="intro-card justify-content-center shadow-lg rounded-5 fw-semibold bg-light p-3 mb-3">
            I am a front-end developer with a professional background in administration, project coordination, and digital systems. My experience working in structured, fast-paced environments has helped me develop strong organisational and communication skills, which I now apply to building efficient and user-focused web applications.
            <br /><br />I have hands-on experience developing applications using React, JavaScript, HTML, and CSS, as well as working with APIs, WordPress, and website deployment.
            <br /><br />I enjoy solving problems, improving user experience, and continuously learning new technologies. I am currently seeking opportunities where I can contribute to real-world projects while continuing to grow as a developer.
        </div>
        <div className="h3 text-center py-2">
          Frontend Technologies used
        </div>
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