import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css";

function ProjectItem(props) {
  return (
    <div className="pg-card d-flex flex-row pb-0" style={{ width: "20rem" }}>
      <div className="row">
        <p className="card-title h5 text-center">{props.title}</p>
        <p className="text-center">{props.tech}</p>
        <hr></hr>
        <a href={props.project_url} className="card-link" target='_blank'>
          <img src={props.image_url} className="card-img-top m-0" alt={props.title} /></a>
        <div className="card-body p-0 col-sm-12 col-lg-6">
          <div className="card-text fst-italic text-left">{props.description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
