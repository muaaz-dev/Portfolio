import { IntrestsData, AboutData } from "../Data";

function About() {
  return (
    <>
      <div id="about-me-page" className="container-fluid">
        <div id="about-me" className="col-12 mt-md-3 text-center">
          <h1>ABOUT ME</h1>
        </div>
        <div className="row ">
          <div
            id="interest-hobbies"
            className="col-md-6 col-sm-12 px-5 pb-5 text-sm-center text-md-start"
          >
            <h2>Interests &amp; Hobbies</h2>
            <ul>
              {IntrestsData.map((entry) => {
                return (
                  <li data-aos="fade-in" className="my-4 list-unstyled">
                    <b>{entry.title}</b> : {entry.content}
                    <br />
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            id="details"
            className="col-md-6 col-sm-12 text-center px-5 pb-5 bg-black"
          >
            <ul>
              {AboutData.map((entry) => {
                return <li data-aos="fade-in" className="list-unstyled my-1">{entry.content}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
