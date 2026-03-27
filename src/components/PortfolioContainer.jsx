import { useEffect, useLayoutEffect, useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectGallery from './pages/ProjectGallery';
import TechStack from './pages/TechStack';

const hashToPage = {
  home: 'Home',
  about: 'About',
  contact: 'Contact',
  projectgallery: 'Project Gallery',
  techstack: 'Tech Stack',
};

const pageToHash = {
  Home: 'home',
  About: 'about',
  Contact: 'contact',
  'Project Gallery': 'projectgallery',
  'Tech Stack': 'techstack',
};

const getPageFromHash = () => {
  const normalizedHash = window.location.hash.replace('#', '').toLowerCase();
  return hashToPage[normalizedHash] || 'Home';
};

function scrollToPageAnchor(page) {
  const id = pageToHash[page];
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
}

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useLayoutEffect(() => {
    let cancelled = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) scrollToPageAnchor(currentPage);
      });
    });
    return () => {
      cancelled = true;
    };
  }, [currentPage]);

  useEffect(() => {
    const syncFromHash = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('popstate', syncFromHash);

    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('popstate', syncFromHash);
    };
  }, []);

  let pageContent;
  if (currentPage === 'Home') {
    pageContent = <Home />;
  } else if (currentPage === 'About') {
    pageContent = <About />;
  } else if (currentPage === 'Contact') {
    pageContent = <Contact />;
  } else if (currentPage === 'Project Gallery') {
    pageContent = <ProjectGallery />;
  } else if (currentPage === 'Tech Stack') {
    pageContent = <TechStack />;
  }

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {pageContent}
    </div>
  );
}

export default PortfolioContainer;
