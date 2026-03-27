import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div id="home" className="container-fluid home-page-layout page-section-anchor">
    <div className="row home-page-row justify-content-center">
      <div className="col-lg-8 col-12">
        <h1 className="page-title home-hero-title">
          Front-end developer <br />building responsive React experiences
        </h1>
        <p className="page-subtitle mb-3">
          I create clean, accessible interfaces that are easy to use and ready to ship.
        </p>
        <div className="intro-card justify-content-center shadow-lg rounded-5 fw-semibold bg-light p-4 mb-3 content-text text-center">
          With a background in digital operations and project coordination, I bring structure, clear communication, and practical problem-solving to every build.
        </div>
      </div>
      <div className="photos col-lg-4 col-12 p-0 mb-1">
        <img
          className="img img-fluid home-media home-hero-media border-3 rounded-5 d-block img-thumbnail mx-auto shadow-lg"
          src="portfolio-gif.gif"
          alt="Alexandra Ionescu, front-end developer"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </div>
);

export default Home;
