import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/index.css";

const Home = () => (
  <div className="container">
    <div className="row align-items-center justify-content-center h-100 mt-5 pt-5">
      <div className="col-4">
        <div className="h1 mb-5 pb-5 pt-5">
          Hello and welcome to my portfolio!
        </div>
        <div className="intro card mt-5 shadow-lg p-3 rounded fw-semibold bg-light">
          Hi, I&apos;m Alexandra. I&apos;m a front-end developer based in Plymouth, UK. I have
          experience in HTML, CSS, JavaScript and React. I&apos;m passionate about creating
          beautiful and performant websites. I&apos;m always looking for new challenges
          and opportunities to learn. If you&apos;re interested in working with me, please
          get in touch. I&apos;d love to hear from you!
        </div>
      </div>

      <div className="col-4">
        <img src="src/assets/alex-photo.jpg" alt="Alex's picture" className="rounded-5 d-block img-thumbnail p-0"></img>
      </div>

      <div className="col-4">
        <div className="col-3 card shadow rounded w-100 mt-5 mb-5">
          <div className="card-body">
            <div className="quotes fst-italic">
              &quot;Great things are done by a series of small things brought together.&quot; Vincent Van Gogh
            </div>
          </div>
        </div>
        <div className="col-3 card shadow rounded w-100 mt-5 mb-5">
          <div className="card-body">
            <div className="quotes fst-italic">
              &quot;So much depends on our attitude.&quot; Thomas S. Monson
            </div>
          </div>
        </div>
        <div className="col-3 card shadow rounded w-100 mt-5 mb-5">
          <div className="card-body">
            <div className="quotes fst-italic">
              &quot;Attitude is a little thing that makes a big difference.&quot; Winston Churchill
            </div>
          </div>
        </div>
        <div className="col-3 card shadow rounded w-100 mt-5 mb-5">
          <div className="card-body">
            <div className="quotes fst-italic">
              &quot;There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.&quot; Mister Rogers
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);



export default Home;
