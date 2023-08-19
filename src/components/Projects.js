import { ProjectsData } from "../Data";

function Projects() {
  return (
    <div id="portfolio" className="album py-5 bg-black">
      <div className="container pb-5">
        <h1 className="text-center mb-5">Projects</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {ProjectsData.map((entry) => {
            return (
              <div className="col d-flex justify-content-center">
                <div className="projects text-center card h-100 pb-1 px-2">
                  <img
                    className="m-4"
                    src={entry.imgSrc}
                    alt="project thumbnail"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{entry.title}</h5>
                    <p className="card-text">{entry.caption}</p>
                  </div>
                  <div className="card-footer text-center mb-1 p-0 m-0">
                    <a
                      className="d-block text-decoration-none py-2"
                      href={entry.projectUrl}
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
