import { useEffect, useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectGallery from './pages/ProjectGallery';

const hashToPage = {
  home: 'Home',
  contact: 'Contact',
  projectgallery: 'Project Gallery',
};

const getPageFromHash = () => {
  const normalizedHash = window.location.hash.replace('#', '').toLowerCase();
  return hashToPage[normalizedHash] || 'Home';
};

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash());

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  let pageContent;
  if (currentPage === 'Home') {
    pageContent = <Home />;
  } else if (currentPage === 'Contact') {
    pageContent = <Contact />;
  } else if (currentPage === 'Project Gallery') {
    pageContent = <ProjectGallery />;
  }

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {pageContent}
    </div>
  );
}

export default PortfolioContainer;
