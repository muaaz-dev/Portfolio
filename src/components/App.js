import React from "react";
import Home from "./Home";
import Introduction from "./Introduction";
import Skills from "./Skillset";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <div id="preloader" />
      <div className="container-fluid p-0">
        <Home />
        <Introduction />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>

    </>
  );
}

export default App;
