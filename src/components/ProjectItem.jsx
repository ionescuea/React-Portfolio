import { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css";

function ProjectItem(props) {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    props.handlePageChange(page);
    setCurrentPage(page);
  };

  return (
    <div>
      <a href={props.project_url} target='_blank'>{props.title}</a>
      <img src={props.image_url} alt="" />
    </div>
  );
}

ProjectItem.propTypes = {
  currentPage: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default ProjectItem;
