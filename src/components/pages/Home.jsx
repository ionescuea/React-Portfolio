import 'bootstrap/dist/css/bootstrap.min.css';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { RiBootstrapFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandNodejs } from "react-icons/tb";
import { DiJqueryUiLogo } from "react-icons/di";
import { ImGithub } from "react-icons/im";

const Home = () => (
  <div className="container">
    <div className="row align-items-center justify-content-center h-100 mt-5 pt-5">
      <div className="col-lg-4 col-sm-12">
        <div className="h1 text-center">
          Hello and welcome to my portfolio!
        </div>
        <div className="intro card mt-5 shadow-lg p-3 rounded fw-semibold bg-light">
          Hi, my name is Alexandra. I specialize in front-end development, with expertise in HTML, CSS, JavaScript,
          and React. My passion lies in crafting visually stunning and high-performance websites.
          I actively seek out new challenges and opportunities for growth. If you are interested
          in collaborating, please reach out. I am eager to connect with you!
        </div>
          <div className="h5 mt-3 pt-3 pb-1 text-center">
            Frontend Technologies used
          </div>
          <div className="intro card shadow-lg rounded fw-semibold bg-light pt-2 pb-2">
            <div className="d-flex justify-content-around align-items-center h-100 mt-3">
              <p><ImHtmlFive />HTML</p>
              <p><IoLogoCss3 />CSS</p>
              <p><RiBootstrapFill />Bootstrap</p>
              <p><RiJavascriptFill />JavaScript</p>
            </div>
            <div className="d-flex justify-content-around align-items-center h-100 mt-3">
              <p><DiJqueryUiLogo />jQuery</p>
              <p><TbBrandNodejs />Node.js</p>
              <p><BiLogoReact />React</p>
              <p><ImGithub />GitHub</p>
            </div>
          </div>
      </div>

      <div className="col-lg-4 col-sm-12 mt-5">
        <img src="alex-photo.jpg" alt="Alex's picture" className="img-fluid rounded-5 d-block img-thumbnail p-0"></img>
      </div>

      <div className="col-lg-4 col-sm-12 mt-5">
        <div className="col-3 card shadow rounded w-100 mb-5">
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
