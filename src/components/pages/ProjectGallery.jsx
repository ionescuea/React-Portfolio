import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/styles/index.css';
import ProjectItem from '../ProjectItem';

const ProjectGallery = () => (
  <div className="mb-5">
    <div className="container text-center mt-5">
      <h2>Successful Projects I&apos;m Proud Of</h2>
      <p>No better way to get experience than real-life projects</p>
    </div>
    <div className="row py-2">
      <hr></hr>
      <div className="row justify-content-around">
        <ProjectItem title="Weather Dashboard" image_url="weather-dashboard.jpg" project_url="https://ionescuea.github.io/Weather-Dashboard/" github_url="https://github.com/ionescuea/Weather-Dashboard" tech="JavaScript & API's" description="This project displays the weather and the forecast for the next 5 days, using API&apos;s and local storage" />
        <ProjectItem title="Work Day Scheduler" image_url="work-day-scheduler.jpg" project_url="https://ionescuea.github.io/Work-Day-Scheduler/" github_url="https://github.com/ionescuea/Work-Day-Scheduler" tech="JavaScript, jQuery & Daily.js" description="This project allows the user to set up a day and time to be scheduled" />
        <ProjectItem title="Readme Generator" image_url="readme-generator.jpg" project_url="https://github.com/ionescuea/Readme-Generator" github_url="https://github.com/ionescuea/Readme-Generator" tech="CLI Application, JavaScript, ES6, Node.js" description="This project generates a readme with multiple-choice questions" />
      </div>

      <div className="row justify-content-around">
        <ProjectItem title="Photo Music" image_url="photo-music.jpg" project_url="https://mannyigho.github.io/photo-music/" github_url="https://github.com/mannyigho/photo-music" tech="HTML, CSS Bootstrap, JavaScript, API's" description="This project allows the user to search for the latest photo and music" />
        <ProjectItem title="Horiseon" image_url="horiseon.jpg" project_url="https://ionescuea.github.io/Horiseon/" github_url="https://github.com/ionescuea/Horiseon" tech="HTML, CSS" description="This project displays Horiseon&apos;s social media presence" />
        <ProjectItem title="Team Profile Generator" image_url="my-team.jpg" project_url="https://github.com/ionescuea/Team-Profile-Generator" github_url="https://github.com/ionescuea/Team-Profile-Generator" tech="CLI Application, ES6, Node.js, JavaScript" description="This application will take in information about employees, then generates an HTML webpage that displays summaries for each person." />
      </div>
      <div>
        <p className="continued d-flex justify-content-end fst-italic">...to be continued...</p>
        <hr></hr>
      </div>
    </div>
  </div>
);

export default ProjectGallery;
