import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectGallery from './pages/ProjectGallery';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
