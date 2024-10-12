import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Email from "./components/Email";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Work from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Introduction from "./sections/Introduction/Introduction";
import Modal from "./components/Modal";

function App() {
  return (
    <div
    // className="overflow-hidden"
    // style={{ maxHeight: "100dvh", maxWidth: "100dvw" }}
    >
      <div className=" bg-color col-dark-text w-100 h-100 overflow-y-scroll">
        <Navbar />
        <Socials />
        <Email />
        <div className="container pt-100 w-100 h-100 overflow-y-scroll">
          <Introduction />
          <About />
          <Experience />
          <Work />
          <Contact />
          <nav className="d-flex justify-content-center flex-column text-center bg-color h-55 align-items-center">
            <span>Design by Brittany Chiang.</span>
            <span>
              Built by{" "}
              <span className="col-green">Agbesi-Ntibrey Francis Jnr</span>
            </span>
          </nav>
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default App;
