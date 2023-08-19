import face from "../assets/face.jpg";

function Introduction() {
  return (
    <>
      <div id="introduction" className="container-fluid row align-items-center py-5">
          <div data-aos="fade-left" className="col-lg-6 col-sm-12 text-end">
            <h1 className="prime display-5 fw-bold mb-3">I'm</h1>
            <h2 className="text-white">Mohd Muaaz Khan</h2>
            <p className="prime lead">A MERN Stack Developer</p>
            <p className="prime lead">
              Expertise in not sleeping till completing the project.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 text-center">
            <img
              id="profile-img"
              src={face}
              className=" mx-lg-auto img-fluid"
              alt="Muaaz's face"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
      </div>
    </>
  );
}

export default Introduction;
