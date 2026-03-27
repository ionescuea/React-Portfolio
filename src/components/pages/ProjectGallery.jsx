import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectItem from '../ProjectItem';

const projects = [
  {
    title: 'Coming Soon',
    status: 'work-in-progress',
    image_url: 'coming-soon.jpg',
    description: 'New projects are currently in development. More updates and case studies coming soon.',
    tech: 'React, JavaScript, UI/UX',
  },
  {
    title: 'Charts App',
    image_url: 'charts-app.jpg',
    project_url: 'https://another-charts-app.netlify.app/',
    github_url: 'https://github.com/ionescuea/Charts-App',
    tech: 'React, Recharts, Node.js, APIs',
    description: 'A React application that uses Recharts to display data from third-party APIs in a user-friendly way.',
  },
  {
    title: 'Task Tracker',
    image_url: 'task-tracker.jpg',
    project_url: 'https://github.com/ionescuea/Task-Tracker',
    github_url: 'https://github.com/ionescuea/Task-Tracker',
    tech: 'React, Node.js, Express, MongoDB, Axios, Bootstrap',
    description: 'A full-stack task management application built with React and Node.js + Express. Users can create, view, update, and delete tasks, with data persisted on the backend.',
  },
  {
    title: 'Chat App',
    image_url: 'chat-app.jpg',
    project_url: 'https://anotherchatapp.netlify.app/',
    github_url: 'https://github.com/ionescuea/ChatApp-React',
    tech: 'React, Websockets, Node.js, Figma, Canva, Render, Netlify',
    description: 'A chat application with role-based permissions that allows users to log in and chat with others.',
  },
  {
    title: 'Weather Dashboard',
    image_url: 'weather-dashboard.jpg',
    project_url: 'https://ionescuea.github.io/Weather-Dashboard/',
    github_url: 'https://github.com/ionescuea/Weather-Dashboard',
    tech: 'JavaScript and APIs',
    description: 'A project that displays the weather and a five-day forecast using APIs and local storage.',
  },
  {
    title: 'Work Day Scheduler',
    image_url: 'workday-scheduler.jpg',
    project_url: 'https://ionescuea.github.io/Work-Day-Scheduler/',
    github_url: 'https://github.com/ionescuea/Work-Day-Scheduler',
    tech: 'JavaScript, jQuery & Daily.js',
    description: 'A project that allows users to schedule their day by time block.',
  },
  {
    title: 'Photo Music',
    image_url: 'photo-music.jpg',
    project_url: 'https://mannyigho.github.io/photo-music/',
    github_url: 'https://github.com/mannyigho/photo-music',
    tech: 'HTML, CSS, Bootstrap, JavaScript, APIs',
    description: 'A group project that lets users search for music while AI generates a photo for the selected song or artist.',
  },
  {
    title: 'Team Profile Generator',
    image_url: 'my-team.jpg',
    project_url: 'https://github.com/ionescuea/Team-Profile-Generator',
    github_url: 'https://github.com/ionescuea/Team-Profile-Generator',
    tech: 'CLI Application, ES6, Node.js, JavaScript',
    description: 'This application will take in information about employees, then generates an HTML webpage that displays summaries for each person.',
  },
  {
    title: 'Readme Generator',
    image_url: 'readme-generator.jpg',
    project_url: 'https://github.com/ionescuea/Readme-Generator',
    github_url: 'https://github.com/ionescuea/Readme-Generator',
    tech: 'CLI Application, JavaScript, ES6, Node.js',
    description: 'A project that generates a README using multiple-choice prompts.',
  },
  {
    title: 'Horiseon',
    image_url: 'horiseon.jpg',
    project_url: 'https://ionescuea.github.io/Horiseon/',
    github_url: 'https://github.com/ionescuea/Horiseon',
    tech: 'HTML, CSS',
    description: 'My first project using HTML and CSS, showcasing Horiseon&apos;s social media presence.',
  },
];

const ProjectGallery = () => (
  <div className="container py-5 mt-3 project-gallery-page">
    <div className="text-center">
      <h1 className="page-title">Projects I&apos;m Proud Of</h1>
      <p className="page-subtitle">No better way to get experience than real-life projects</p>
    </div>
    <div className="intro-card project-gallery-card shadow-lg rounded-5 fw-semibold bg-light p-4">
      <ul className="projects-list p-0 m-0">
        {projects.map((project) => (
          <li key={project.title} className="project-list-item">
            <ProjectItem {...project} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectGallery;
