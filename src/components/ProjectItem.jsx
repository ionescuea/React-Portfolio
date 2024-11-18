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






// function ProjectItem(props) {
//   return (
//     <div className="pg-card d-flex flex-row pb-2 mt-5" style={{ width: "20rem" }}>
//       <div className="row">
//         <p className="card-title h5 text-center">{props.title}</p>
//         <p className="text-center">{props.tech}</p>
//         <hr></hr>
//         <a href={props.project_url} className="card-link" target='_blank'>
//           <img src={props.image_url} className="card-img-top m-0" alt={props.title} /></a>
//         <div className="card-body p-0 col-sm-12 col-lg-6">
//           <div className="card-text fst-italic text-left">{props.description}</div>
//         </div>
//         <a href={props.github_url} className="card-link" target='_blank'>GitHub repo</a>
//       </div>
//     </div>
//   );
// }

// export default ProjectItem;
