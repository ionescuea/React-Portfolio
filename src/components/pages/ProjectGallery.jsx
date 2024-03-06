import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/styles/index.css';
import ProjectItem from '../ProjectItem';

const ProjectGallery = () => (
  <div className="mb-5">
    <div className="container text-center">
      <h2>Successful Projects I&apos;m Proud Of</h2>
      <p>No better way to get experience than real-life projects</p>
    </div>
    <div className="row py-2">
      <hr></hr>
      <div className="row justify-content-around">
        <ProjectItem title="Weather Dashboard" image_url="src/assets/weather-dashboard.jpg" project_url="https://ionescuea.github.io/Weather-Dashboard/" tech="JavaScript & API's" description="This project displays the weather and the forecast for the next 5 days, using API&apos;s and local storage" />
        <ProjectItem title="Work Day Scheduler" image_url="src/assets/work-day-scheduler.jpg" project_url="https://ionescuea.github.io/Work-Day-Scheduler/" tech="JavaScript, jQuery & Daily.js" description="This project allows the user to set up a day and time to be scheduled" />
        <ProjectItem title="Readme Generator" image_url="src/assets/readme-generator.jpg" project_url="https://github.com/ionescuea/Readme-Generator" tech="CLI Application, JavaScript, ES6, Node.js" description="This project generates a readme with multiple-choice questions" />
      </div>

      <div className="row justify-content-around">
        <ProjectItem title="Photo Music" image_url="src/assets/photo-music.jpg" project_url="https://mannyigho.github.io/photo-music/" tech="HTML, CSS Bootstrap, JavaScript, API's" description="This project allows the user to search for the latest photo and music" />
        <ProjectItem title="Horiseon" image_url="src/assets/horiseon.jpg" project_url="https://ionescuea.github.io/Horiseon/" tech="HTML, CSS" description="This project displays Horiseon&apos;s social media presence" />
        <ProjectItem title="Team Profile Generator" image_url="src/assets/my-team.jpg" project_url="https://github.com/ionescuea/Team-Profile-Generator" tech="CLI Application, ES6, Node.js, JavaScript" description="This application will take in information about employees, then generates an HTML webpage that displays summaries for each person." />
      </div>
    </div>
  </div>
);

export default ProjectGallery;
