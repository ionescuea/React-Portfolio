import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

function ProjectItem(props) {
  const showLinks = props.demo_url || props.repo_url;
  const [isExpanded, setIsExpanded] = useState(false);
  const maxPreviewLength = 120;
  const shouldTruncate = props.description.length > maxPreviewLength;
  const previewDescription = shouldTruncate
    ? `${props.description.slice(0, maxPreviewLength).trimEnd()}...`
    : props.description;
  const visibleDescription = isExpanded ? props.description : previewDescription;

  return (
    <div className="card project-item-card mb-4 shadow-lg border-1 rounded-5 fw-semibold bg-light p-2 m-1 mx-auto">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.image_url} className="img-fluid rounded project-item-image" alt={props.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
            {props.status === 'work-in-progress' && <small className="text-muted-status d-flex justify-content-center">- work in progress -</small>}
            <p className="card-text project-description ml-2 p-2 fst-italic d-flex justify-content-center mt-3">
              {visibleDescription}
            </p>
            {shouldTruncate && (
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="project-read-more-btn"
                  onClick={() => setIsExpanded((current) => !current)}
                >
                  {isExpanded ? 'Show less' : 'Read more'}
                </button>
              </div>
            )}
            <p className="card-text d-flex justify-content-center mt-3">
              <small className="text-muted">Built with: {props.tech}</small>
            </p>
            {showLinks && (
              <div className="d-flex justify-content-center mt-3">
                {props.demo_url && (
                  <a
                    href={props.demo_url}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live demo for ${props.title} (opens in a new tab)`}
                  >
                    Live Demo
                  </a>
                )}
                {props.repo_url && (
                  <a
                    href={props.repo_url}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View GitHub repository for ${props.title} (opens in a new tab)`}
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  image_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  demo_url: PropTypes.string,
  repo_url: PropTypes.string,
  status: PropTypes.string,
};

export default ProjectItem;
