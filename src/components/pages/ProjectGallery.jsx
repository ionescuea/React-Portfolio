import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectItem from '../ProjectItem';

const projects = [
  {
    title: 'Coming Soon',
    status: 'work-in-progress',
    image_url: 'coming-soon.jpg',
    description: 'New React projects are in progress, with upcoming case studies focused on problem, process, and measurable outcomes.',
    tech: 'React, JavaScript, UI/UX',
  },
  {
    title: 'Charts App',
    image_url: 'charts-app.jpg',
    demo_url: 'https://another-charts-app.netlify.app/',
    repo_url: 'https://github.com/ionescuea/Charts-App',
    tech: 'React, Recharts, Node.js, APIs',
    description: 'A React dashboard that turns third-party API data into clear, interactive charts with a user-friendly experience.',
  },
  {
    title: 'Task Tracker',
    image_url: 'task-tracker.jpg',
    repo_url: 'https://github.com/ionescuea/Task-Tracker',
    tech: 'React, Node.js, Express, MongoDB, Axios, Bootstrap',
    description: 'A full-stack task manager where users can create, track, update, and delete tasks with persistent backend storage.',
  },
  {
    title: 'Chat App',
    image_url: 'chat-app.jpg',
    demo_url: 'https://anotherchatapp.netlify.app/',
    repo_url: 'https://github.com/ionescuea/ChatApp-React',
    tech: 'React, Websockets, Node.js, Figma, Canva, Render, Netlify',
    description: 'A real-time chat application with login and role-based permissions for controlled user access.',
  },
  {
    title: 'Weather Dashboard',
    image_url: 'weather-dashboard.jpg',
    demo_url: 'https://ionescuea.github.io/Weather-Dashboard/',
    repo_url: 'https://github.com/ionescuea/Weather-Dashboard',
    tech: 'JavaScript and APIs',
    description: 'A weather app that shows current conditions and a five-day forecast using APIs and local storage.',
  },
  {
    title: 'Work Day Scheduler',
    image_url: 'workday-scheduler.jpg',
    demo_url: 'https://ionescuea.github.io/Work-Day-Scheduler/',
    repo_url: 'https://github.com/ionescuea/Work-Day-Scheduler',
    tech: 'JavaScript, jQuery & Daily.js',
    description: 'A daily planner that helps users organize tasks by time block and keep schedules visible throughout the day.',
  },
  {
    title: 'Photo Music',
    image_url: 'photo-music.jpg',
    demo_url: 'https://mannyigho.github.io/photo-music/',
    repo_url: 'https://github.com/mannyigho/photo-music',
    tech: 'HTML, CSS, Bootstrap, JavaScript, APIs',
    description: 'A collaborative project where users search for music while AI generates matching visuals for songs or artists.',
  },
  {
    title: 'Team Profile Generator',
    image_url: 'my-team.jpg',
    repo_url: 'https://github.com/ionescuea/Team-Profile-Generator',
    tech: 'CLI Application, ES6, Node.js, JavaScript',
    description: 'A CLI tool that collects team details and generates an HTML page with structured employee summaries.',
  },
  {
    title: 'Readme Generator',
    image_url: 'readme-generator.jpg',
    repo_url: 'https://github.com/ionescuea/Readme-Generator',
    tech: 'CLI Application, JavaScript, ES6, Node.js',
    description: 'A CLI utility that generates a complete README from guided multiple-choice prompts.',
  },
  {
    title: 'Horiseon',
    image_url: 'horiseon.jpg',
    demo_url: 'https://ionescuea.github.io/Horiseon/',
    repo_url: 'https://github.com/ionescuea/Horiseon',
    tech: 'HTML, CSS',
    description: "My first HTML and CSS project, focused on improving Horiseon's landing page structure and presentation.",
  },
];

const ProjectGallery = () => (
  <div id="projectgallery" className="container py-5 mt-3 project-gallery-page page-section-anchor">
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
