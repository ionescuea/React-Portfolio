import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

function ProjectItem(props) {
  const {
    title,
    tech,
    status,
    description,
    onReportFrontCardHeight,
    demo_url,
    repo_url,
    flippedTitle,
    onFlippedTitleChange,
  } = props;
  const showLinks = demo_url || repo_url;
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const flipRootRef = useRef(null);
  const frontFaceRef = useRef(null);
  const backInnerRef = useRef(null);
  const maxPreviewLength = 120;
  const previewDescription =
    description.length > maxPreviewLength
      ? `${description.slice(0, maxPreviewLength).trimEnd()}...`
      : description;

  const setFlipped = useCallback(
    (next) => {
      setIsFlipped(next);
      onFlippedTitleChange?.(next ? title : null);
    },
    [title, onFlippedTitleChange],
  );

  useEffect(() => {
    if (
      flippedTitle != null &&
      flippedTitle !== title &&
      isFlipped
    ) {
      setIsFlipped(false);
    }
  }, [flippedTitle, title, isFlipped]);

  useEffect(() => {
    if (!isFlipped) {
      return undefined;
    }
    const handlePointerDown = (event) => {
      const root = cardRef.current;
      if (root && !root.contains(event.target)) {
        setFlipped(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
    };
  }, [isFlipped, setFlipped]);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(cardElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    if (isFlipped || !onReportFrontCardHeight || !flipRootRef.current || !frontFaceRef.current) {
      return undefined;
    }
    const root = flipRootRef.current;
    const front = frontFaceRef.current;
    const report = () => {
      const cs = getComputedStyle(root);
      const padY = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
      const contentH = Math.max(front.scrollHeight, front.offsetHeight);
      const h = Math.ceil(contentH + padY);
      if (h > 0) {
        onReportFrontCardHeight(title, h);
      }
    };
    report();
    const ro = new ResizeObserver(report);
    ro.observe(front);
    return () => {
      ro.disconnect();
    };
  }, [isFlipped, onReportFrontCardHeight, title, previewDescription, tech, status]);

  useEffect(() => {
    if (isFlipped) {
      if (backInnerRef.current) {
        backInnerRef.current.scrollTop = 0;
      }
      return;
    }
    if (frontFaceRef.current) {
      frontFaceRef.current.scrollTop = 0;
    }
  }, [isFlipped]);

  return (
    <div
      ref={cardRef}
      className={`project-item-hover-wrap project-reveal-item ${isVisible ? 'is-visible' : ''} mb-4 m-1 mx-auto`}
      style={{ '--reveal-delay': `${Math.min(props.revealIndex * 55, 260)}ms` }}
    >
      <div
        ref={flipRootRef}
        className="card project-item-card project-flip-root shadow-lg border-1 rounded-5 fw-semibold bg-light p-2"
      >
        <div className={`project-flip-inner ${isFlipped ? 'is-flipped' : ''}`}>
          <div
            ref={frontFaceRef}
            className="project-flip-face project-flip-front"
            aria-hidden={isFlipped}
          >
            <div className="row g-0 h-100">
              <div className="col-12 col-md-4">
                <img
                  src={props.image_url}
                  className="img-fluid rounded project-item-image"
                  alt={props.title}
                  onLoad={() => {
                    if (isFlipped || !onReportFrontCardHeight || !flipRootRef.current || !frontFaceRef.current) {
                      return;
                    }
                    const root = flipRootRef.current;
                    const front = frontFaceRef.current;
                    const cs = getComputedStyle(root);
                    const padY = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
                    const contentH = Math.max(front.scrollHeight, front.offsetHeight);
                    const h = Math.ceil(contentH + padY);
                    if (h > 0) {
                      onReportFrontCardHeight(title, h);
                    }
                  }}
                />
              </div>
              <div className="col-12 col-md-8 d-flex">
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
                  {props.status === 'work-in-progress' && (
                    <small className="text-muted-status d-flex justify-content-center">- work in progress -</small>
                  )}
                  <p className="card-text project-description project-description-preview ml-2 p-2 fst-italic d-flex justify-content-center mt-3 mb-0">
                    {previewDescription}
                  </p>
                  <p className="card-text d-flex justify-content-center mt-3 mb-0">
                    <small className="text-muted">Tech Stack: {props.tech}</small>
                  </p>
                  <div className="d-flex justify-content-center mt-2">
                    <button
                      type="button"
                      className="project-read-more-btn"
                      onClick={() => setFlipped(true)}
                      aria-expanded={isFlipped}
                      aria-label={`View full details for ${props.title}`}
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-flip-face project-flip-back" aria-hidden={!isFlipped}>
            <div ref={backInnerRef} className="project-flip-back-inner d-flex flex-column h-100 p-3 p-md-4">
              <h5 className="card-title project-flip-back-title mb-2 text-center">{props.title}</h5>
              {props.status === 'work-in-progress' && (
                <small className="text-muted-status d-block mb-2">- work in progress -</small>
              )}
              {props.overview ? (
                <section className="project-back-section text-start mb-3">
                  <h6 className="project-back-section-title">Overview</h6>
                  <p className="card-text project-back-body mb-0">{props.overview}</p>
                </section>
              ) : (
                <p className="card-text project-description-full fst-italic text-start mb-3">{props.description}</p>
              )}
              <section className="project-back-section text-start mb-3">
                <h6 className="project-back-section-title">Tech Stack</h6>
                <p className="card-text project-back-body project-back-tech-line mb-0">{props.tech}</p>
              </section>
              {props.keyFeatures?.length > 0 && (
                <section className="project-back-section text-start mb-3">
                  <h6 className="project-back-section-title">Key Features</h6>
                  <ul className="project-back-feature-list mb-0">
                    {props.keyFeatures.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}
              {props.myRole && (
                <section className="project-back-section text-start mb-3">
                  <h6 className="project-back-section-title">My Role</h6>
                  <p className="card-text project-back-body mb-0">{props.myRole}</p>
                </section>
              )}
              {props.challengesAndSolutions && (
                <section className="project-back-section text-start mb-3">
                  <h6 className="project-back-section-title">Challenges &amp; Solutions</h6>
                  <p className="card-text project-back-body mb-0">{props.challengesAndSolutions}</p>
                </section>
              )}
              {props.result && (
                <section className="project-back-section text-start mb-3">
                  <h6 className="project-back-section-title">Result</h6>
                  <p className="card-text project-back-body mb-0">{props.result}</p>
                </section>
              )}
              {showLinks && (
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
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
              <div className="d-flex justify-content-center mt-auto pt-1">
                <button
                  type="button"
                  className="project-flip-back-btn"
                  onClick={() => setFlipped(false)}
                >
                  Back to project
                </button>
              </div>
            </div>
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
  revealIndex: PropTypes.number,
  keyFeatures: PropTypes.arrayOf(PropTypes.string),
  myRole: PropTypes.string,
  challengesAndSolutions: PropTypes.string,
  overview: PropTypes.string,
  result: PropTypes.string,
  onReportFrontCardHeight: PropTypes.func,
  flippedTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  onFlippedTitleChange: PropTypes.func,
};

export default ProjectItem;
