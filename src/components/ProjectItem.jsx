import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectItem(props) {
  return (
    <div className="card mb-5 shadow border-1 rounded fw-semibold bg-light p-2 m-1 mx-auto" style={{ maxWidth: "1000px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.image_url} className="img-fluid rounded" alt={props.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
            {/* {props.status === 'work-in-progress' && <small className="text-muted-status d-flex justify-content-center">- work in progress -</small>} */}
            <p className="card-text ml-2 p-2 fst-italic d-flex justify-content-center mt-3">{props.description}</p>
            <p className="card-text d-flex justify-content-center mt-3">
              <small className="text-muted">Built with: {props.tech}</small>
            </p>
            <div className="d-flex justify-content-center mt-3">
              <a href={props.project_url} className="card-link" target="_blank">
                Visit Project
              </a>
              <a href={props.github_url} className="card-link" target="_blank">
                GitHub repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
