function Home() {
  return (
    <>
      <div id="home" className="container-fluid d-flex">
        <div className="div-muaaz col-6 d-flex">
          <div id="muaaz">MUAAZ</div>
        </div>
        <div className="div-developer col-6 d-flex">
          <div id="developer">DEVELOPER</div>
        </div>
        <a id="home-scroll-btn" className="scroll-btn" href="#introduction">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default Home;
