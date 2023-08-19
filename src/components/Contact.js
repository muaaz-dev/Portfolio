function Contact() {
  return (
    <>
      <div id="contact" className="container-fluid">
        <h1 className="col-12 text-center text-black fw-bold pt-5 pb-0">
          GET IN TOUCH
        </h1>
        <div
          id="contact-detail"
          className="container d-flex flex-column justify-content-end align-items-center"
        >
          <div className="col-12 footer-social-links fs-1">
            <a
              className="px-4"
              href="https://www.instagram.com/dev.muaaz/"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram" />
            </a>
            <a
              className="px-4"
              href="mailto:dev.muaaz@gmail.com"
              title="Mail"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-envelope" />
            </a>
            <a
              className="px-4"
              href="https://www.linkedin.com/in/dev-muaaz/"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin" />
            </a>
            <a
              className="px-4"
              href="https://github.com/muaaz-dev"
              title="Github"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github" />
            </a>
          </div>
          <div id="bottom-quote" className="col-12 text-center">
            "Communication is the lifeline of any <br />
            relationship. When we communicate effectively, <br /> we can
            understand and be understood, <br /> build trust, and foster
            meaningful connections." - someone.
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
