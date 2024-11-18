import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectItem from '../ProjectItem';

const ProjectGallery = () => (
  <div className="mb-5">
    <div className="container text-center mt-5">
      <h2 className="pb-2" style={{ fontFamily: 'Brush Script MT, cursive', fontSize: '3.5rem', fontWeight: 'bold', paddingBottom: '20px' }}>Successful Projects I&apos;m Proud Of</h2>
      <p>No better way to get experience than real-life projects</p>
    </div>
    <div className="container py-2">
      <hr></hr>
      <ul className="projects-list d-flex justify-content-around align-items-center flex-wrap p-0">
        <li>
          <ProjectItem title="Chat App - work in progress -" image_url="chat-app.jpg" project_url="https://anotherchatapp.netlify.app/" github_url="https://github.com/ionescuea/ChatApp-React" tech="JavaScript & API's" description="A chat application that allows users to login and chat with other users" />
          <ProjectItem title="Weather Dashboard" image_url="weather-dashboard.jpg" project_url="https://ionescuea.github.io/Weather-Dashboard/" github_url="https://github.com/ionescuea/Weather-Dashboard" tech="JavaScript & API's" description="This project displays the weather and the forecast for the next 5 days, using API&apos;s and local storage" />
          <ProjectItem title="Work Day Scheduler" image_url="workday-scheduler.jpg" project_url="https://ionescuea.github.io/Work-Day-Scheduler/" github_url="https://github.com/ionescuea/Work-Day-Scheduler" tech="JavaScript, jQuery & Daily.js" description="This project allows the user to set up a day and time to be scheduled" />
          <ProjectItem title="Photo Music" image_url="photo-music.jpg" project_url="https://mannyigho.github.io/photo-music/" github_url="https://github.com/mannyigho/photo-music" tech="HTML, CSS Bootstrap, JavaScript, API's" description="This project allows the user to search for the latest photo and music" />
          <ProjectItem title="Team Profile Generator" image_url="my-team.jpg" project_url="https://github.com/ionescuea/Team-Profile-Generator" github_url="https://github.com/ionescuea/Team-Profile-Generator" tech="CLI Application, ES6, Node.js, JavaScript" description="This application will take in information about employees, then generates an HTML webpage that displays summaries for each person." />
          <ProjectItem title="Readme Generator" image_url="readme-generator.jpg" project_url="https://github.com/ionescuea/Readme-Generator" github_url="https://github.com/ionescuea/Readme-Generator" tech="CLI Application, JavaScript, ES6, Node.js" description="This project generates a readme with multiple-choice questions" />
          <ProjectItem title="Horiseon" image_url="horiseon.jpg" project_url="https://ionescuea.github.io/Horiseon/" github_url="https://github.com/ionescuea/Horiseon" tech="HTML, CSS" description="This project displays Horiseon&apos;s social media presence" />
        </li>
      </ul>
        <hr></hr>
    </div>
  </div>
);

export default ProjectGallery;
