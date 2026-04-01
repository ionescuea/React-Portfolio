import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectItem from '../ProjectItem';

const projects = [
  {
    title: 'Charts App',
    image_url: 'charts-app.jpg',
    demo_url: 'https://another-charts-app.netlify.app/',
    repo_url: 'https://github.com/ionescuea/Charts-App',
    tech: 'React · Recharts · Node.js · APIs',
    description: 'A React dashboard that turns third-party API data into clear, interactive charts with a user-friendly experience.',
    overview:
      'A React-based dashboard that transforms third-party API data into interactive and visually clear charts.',
    keyFeatures: [
      'Dynamic data visualisation using charts',
      'Integration with external APIs',
      'Interactive and user-friendly dashboard UI',
      'Responsive design for different screen sizes',
    ],
    myRole:
      'I developed the frontend using React and implemented data visualisation with Recharts. I also handled API integration and structured data for effective display.',
    challengesAndSolutions:
      'Working with raw API data required transforming it into a format suitable for chart rendering. I solved this by processing and structuring the data before passing it into chart components.',
    result:
      'Delivered a clean and interactive dashboard that presents complex data in an accessible and user-friendly format.',
  },
  {
    title: 'Task Tracker',
    image_url: 'task-tracker.jpg',
    repo_url: 'https://github.com/ionescuea/Task-Tracker',
    tech: 'React · Node.js · Express · MongoDB · Axios · Bootstrap',
    description: 'A full-stack task manager where users can create, track, update, and delete tasks with persistent backend storage.',
    overview:
      'A full-stack task management application that allows users to create, track, update, and delete tasks with persistent backend storage.',
    keyFeatures: [
      'Full CRUD functionality for task management',
      'Persistent data storage with MongoDB',
      'RESTful API integration',
      'Responsive UI using Bootstrap',
    ],
    myRole:
      'I built the application end-to-end, including frontend development, backend API creation, and database integration.',
    challengesAndSolutions:
      'Keeping the frontend state synchronised with backend data during updates was a key challenge. I addressed this by structuring API calls clearly and managing state updates efficiently in React.',
    result:
      'Delivered a reliable and scalable task management tool with smooth user interactions and persistent data handling.',
  },
  {
    title: 'Chat App',
    image_url: 'chat-app.jpg',
    demo_url: 'https://anotherchatapp.netlify.app/',
    repo_url: 'https://github.com/ionescuea/ChatApp-React',
    tech: 'React · WebSockets · Node.js · Figma · Canva · Render · Netlify',
    description: 'A real-time chat application with login and role-based permissions for controlled user access.',
    overview:
      'A real-time chat application with login and role-based permissions for controlled access to conversations and history.',
    keyFeatures: [
      'Real-time messaging using WebSockets',
      'User authentication and session handling',
      'Responsive UI for mobile and desktop',
      'Persistent chat history with database storage',
    ],
    myRole:
      'I built the application end-to-end, including both frontend and backend systems. I designed the UI, implemented API endpoints, and handled real-time communication logic.',
    challengesAndSolutions:
      'One of the main challenges was ensuring messages updated instantly across multiple clients without duplication or delay. I solved this by implementing Socket.io event handling and managing state updates efficiently on the frontend.',
    result:
      'Delivered a responsive real-time chat experience with auth, roles, and reliable live updates across clients.',
  },
  {
    title: 'Weather Dashboard',
    image_url: 'weather-dashboard.jpg',
    demo_url: 'https://ionescuea.github.io/Weather-Dashboard/',
    repo_url: 'https://github.com/ionescuea/Weather-Dashboard',
    tech: 'JavaScript · APIs · Local Storage',
    description: 'A weather app that shows current conditions and a five-day forecast using APIs and local storage.',
    overview:
      'A weather application that displays current conditions and a five-day forecast using external APIs and local storage.',
    keyFeatures: [
      'Displays current weather and 5-day forecast',
      'Search functionality for different locations',
      'Local storage for saving recent searches',
      'Clean and responsive interface',
    ],
    myRole:
      'I developed the application using JavaScript and integrated weather APIs to fetch and display real-time data.',
    challengesAndSolutions:
      'Handling API responses and maintaining search history required efficient data handling. I used local storage to persist user data and improve the overall experience.',
    result:
      'Built a functional weather dashboard that provides accurate forecasts and retains user search history.',
  },
  {
    title: 'Work Day Scheduler',
    image_url: 'workday-scheduler.jpg',
    demo_url: 'https://ionescuea.github.io/Work-Day-Scheduler/',
    repo_url: 'https://github.com/ionescuea/Work-Day-Scheduler',
    tech: 'JavaScript · jQuery · Day.js',
    description: 'A daily planner that helps users organize tasks by time block and keep schedules visible throughout the day.',
    overview:
      'A daily planner application that allows users to organise tasks by time blocks and keep track of their schedule throughout the day.',
    keyFeatures: [
      'Time-block based scheduling system',
      'Visual indicators for past, present, and future time slots',
      'Persistent task storage',
      'Simple and intuitive UI',
    ],
    myRole:
      'I built the application logic and UI, focusing on time-based functionality and user interaction.',
    challengesAndSolutions:
      'Managing time-based updates dynamically was a challenge. I solved this by using Day.js to handle time comparisons and update the UI accordingly.',
    result: 'Delivered a practical scheduling tool that helps users manage daily tasks efficiently.',
  },
  {
    title: 'Photo Music',
    image_url: 'photo-music.jpg',
    demo_url: 'https://mannyigho.github.io/photo-music/',
    repo_url: 'https://github.com/mannyigho/photo-music',
    tech: 'HTML · CSS · Bootstrap · JavaScript · APIs',
    description: 'A collaborative project where users search for music while AI generates matching visuals for songs or artists.',
    overview:
      'A collaborative front-end that combines music search with AI-generated imagery to match the mood of songs or artists.',
    keyFeatures: [
      'Music search and results display',
      'Integration with APIs for audio metadata and visuals',
      'Responsive layout with Bootstrap',
      'Clear feedback during loading and errors',
    ],
    myRole:
      'I contributed to layout, styling, and JavaScript that wired user input to API calls and rendered results on the page.',
    challengesAndSolutions:
      'Coordinating multiple API responses and async timing required careful sequencing and user-visible loading states.',
    result: 'An engaging demo that pairs discovery of music with generative visuals in one flow.',
  },
  {
    title: 'Team Profile Generator',
    image_url: 'my-team.jpg',
    repo_url: 'https://github.com/ionescuea/Team-Profile-Generator',
    tech: 'Node.js · JavaScript · ES6 · CLI',
    description: 'A CLI tool that collects team details and generates an HTML page with structured employee summaries.',
    overview:
      'A command-line application that collects team member information and generates a structured HTML page displaying employee profiles.',
    keyFeatures: [
      'Collects user input via command-line prompts',
      'Generates structured HTML output',
      'Supports multiple employee roles',
      'Modular and reusable code structure',
    ],
    myRole:
      'I developed the CLI application, handled user input, and generated dynamic HTML output.',
    challengesAndSolutions:
      'Structuring dynamic data into a clean HTML format was a challenge. I addressed this by creating reusable templates and organising data effectively.',
    result: 'Created a functional tool that automates the creation of team profile pages.',
  },
  {
    title: 'Readme Generator',
    image_url: 'readme-generator.jpg',
    repo_url: 'https://github.com/ionescuea/Readme-Generator',
    tech: 'Node.js · JavaScript · ES6 · CLI',
    description: 'A CLI utility that generates a complete README from guided multiple-choice prompts.',
    overview:
      'A command-line tool that generates a complete README file based on user input through guided prompts.',
    keyFeatures: [
      'Interactive command-line prompts',
      'Automatically generates structured README files',
      'Customisable sections based on user input',
      'Streamlined documentation process',
    ],
    myRole:
      'I built the CLI tool, handled user input, and automated the generation of markdown files.',
    challengesAndSolutions:
      'Ensuring consistent formatting across generated files required careful structuring. I solved this by creating templates and dynamically inserting user responses.',
    result:
      'Delivered a useful developer tool that simplifies and speeds up documentation creation.',
  },
  {
    title: 'Horiseon',
    image_url: 'horiseon.jpg',
    demo_url: 'https://ionescuea.github.io/Horiseon/',
    repo_url: 'https://github.com/ionescuea/Horiseon',
    tech: 'HTML · CSS',
    description: "My first HTML and CSS project, focused on improving Horiseon's landing page structure and presentation.",
    overview:
      'A static website project focused on improving the structure, accessibility, and presentation of an existing landing page.',
    keyFeatures: [
      'Improved semantic HTML structure',
      'Enhanced accessibility',
      'Clean and organised CSS styling',
      'Optimised layout and readability',
    ],
    myRole:
      'I refactored the existing codebase to improve structure, accessibility, and overall presentation.',
    challengesAndSolutions:
      'Improving accessibility while maintaining the original design required careful adjustments. I achieved this by restructuring HTML elements and refining CSS.',
    result:
      'Delivered a cleaner, more accessible, and better-structured landing page.',
  },
];

const FEATURED_PROJECTS_COUNT = 4;

const ProjectGallery = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [galleryFlippedTitle, setGalleryFlippedTitle] = useState(null);
  const visibleProjects = useMemo(
    () => (showAllProjects ? projects : projects.slice(0, FEATURED_PROJECTS_COUNT)),
    [showAllProjects],
  );
  const hasMoreProjects = projects.length > FEATURED_PROJECTS_COUNT;
  const heightByProjectRef = useRef(new Map());
  const [uniformFlipHeightPx, setUniformFlipHeightPx] = useState(null);
  const visibleTitlesKey = visibleProjects.map((p) => p.title).join('|');

  useEffect(() => {
    const titles = new Set(visibleProjects.map((p) => p.title));
    if (galleryFlippedTitle != null && !titles.has(galleryFlippedTitle)) {
      setGalleryFlippedTitle(null);
    }
  }, [visibleProjects, galleryFlippedTitle]);

  const recomputeUniformHeight = useCallback(() => {
    const map = heightByProjectRef.current;
    const vals = visibleProjects.map((p) => map.get(p.title));
    const complete =
      vals.length === visibleProjects.length &&
      vals.length > 0 &&
      vals.every((v) => typeof v === 'number' && v > 0);
    if (!complete) {
      setUniformFlipHeightPx(null);
      return;
    }
    setUniformFlipHeightPx(Math.max(...vals));
  }, [visibleProjects]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const titles = new Set(visibleProjects.map((p) => p.title));
      const map = heightByProjectRef.current;
      for (const key of [...map.keys()]) {
        if (!titles.has(key)) {
          map.delete(key);
        }
      }
      recomputeUniformHeight();
    });
    return () => cancelAnimationFrame(id);
  }, [visibleTitlesKey, visibleProjects, recomputeUniformHeight]);

  const handleReportFrontCardHeight = useCallback(
    (projectId, px) => {
      if (px <= 0) {
        return;
      }
      heightByProjectRef.current.set(projectId, px);
      recomputeUniformHeight();
    },
    [recomputeUniformHeight],
  );

  return (
    <div id="projectgallery" className="container py-5 mt-3 project-gallery-page page-section-anchor">
      <div className="text-center">
        <h1 className="page-title">Projects I&apos;m Proud Of</h1>
        <p className="page-subtitle">No better way to get experience than real-life projects</p>
      </div>
      <div className="intro-card project-gallery-card shadow-lg rounded-5 fw-semibold bg-light p-4">
        <ul
          className={`projects-list p-0 m-0${uniformFlipHeightPx != null ? ' projects-list-uniform-ready' : ''}`}
          style={
            uniformFlipHeightPx != null
              ? { '--project-flip-card-h': `${uniformFlipHeightPx}px` }
              : undefined
          }
        >
          {visibleProjects.map((project, index) => (
            <li key={project.title} className="project-list-item">
              <ProjectItem
                {...project}
                revealIndex={index}
                onReportFrontCardHeight={handleReportFrontCardHeight}
                flippedTitle={galleryFlippedTitle}
                onFlippedTitleChange={setGalleryFlippedTitle}
              />
            </li>
          ))}
        </ul>
        {hasMoreProjects && (
          <div className="d-flex justify-content-center mt-2">
            <button
              type="button"
              className="project-gallery-toggle-btn"
              onClick={() => setShowAllProjects((current) => !current)}
              aria-expanded={showAllProjects}
              aria-controls="projectgallery"
            >
              {showAllProjects ? 'Show fewer projects' : 'View more projects'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
