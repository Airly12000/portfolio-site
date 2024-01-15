import React from "react";
import OffCanvas from "./OffCanvas";

function Navbar() {
  window.addEventListener("resize", () => {
    const myOffcanvas = document.getElementById("offcanvasNavbar");
    myOffcanvas?.classList.remove("show");
  });
  return (
    <nav className="navbar fixed-top d-flex px-2 px-md-5 py-3 bg-color text-white top-nav">
      <div className="flex-grow-1">
        <a href="/">
          <img src="assets/img/logo.svg" alt="Logo" height={50} width={50} />
        </a>
      </div>
      <div className="d-none d-md-flex flex-direction-row align-items-center text-center col-dark-text">
        <div className="link-width mono">
          <a href="#about" className="nav-links">
            <span className="col-green">01.</span> About
          </a>
        </div>
        <div className="link-width mono" id="w-experience">
          <a href="#experience" className="nav-links">
            <span className="col-green">02.</span> Experience
          </a>
        </div>
        <div className="link-width mono">
          <a href="#projects" className="nav-links">
            <span className="col-green">03.</span> Projects
          </a>
        </div>
        <div className="link-width mono">
          <a href="#contact" className="nav-links">
            <span className="col-green">04.</span> Contact
          </a>
        </div>
        <div className="link-width mono">
          <button
            className="btn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#resumeModal"
            id="btn-green"
          >
            Resume
          </button>
        </div>
      </div>
      <button
        className="d-block d-md-none border border-0 bg-transparent"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        {/* <span className='navbar-toggler-icon'></span> */}
        <img
          src="assets/img/toggler.svg"
          alt="Toggler"
          height={50}
          width={50}
        />
      </button>
      <OffCanvas />
    </nav>
  );
}

export default Navbar;
