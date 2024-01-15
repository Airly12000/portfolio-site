import React from "react";

const OffCanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-end vh-100 w-350 bg-color"
      tabIndex={-1}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header d-flex">
        <div className="flex-grow-1"></div>
        <button
          type="button"
          className="btn-close fs-20"
          id="col-green"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body text-center">
        <ul className="navbar-nav d-flex justify-content-center align-items-center flex-grow-1 pe-3">
          <li
            className="link-width mono mb-4 fs-20"
            data-bs-dismiss="offcanvas"
          >
            <a href="#about" className="nav-links">
              <div className="col-green">01.</div> About
            </a>
          </li>
          <li
            className="link-width mono mb-4 fs-20"
            data-bs-dismiss="offcanvas"
          >
            <a href="#experience" className="nav-links">
              <div className="col-green">02.</div> Experience
            </a>
          </li>
          <li
            className="link-width mono mb-4 fs-20"
            data-bs-dismiss="offcanvas"
          >
            <a href="#projects" className="nav-links">
              <div className="col-green">03.</div> Projects
            </a>
          </li>
          <li
            className="link-width mono mb-4 fs-20"
            data-bs-dismiss="offcanvas"
          >
            <a href="#contact" className="nav-links">
              <div className="col-green">04.</div> Contact
            </a>
          </li>
          <li
            className="link-width mono mb-4 h-55 mt-3 fs-20"
            data-bs-dismiss="offcanvas"
          >
            <button
              className="btn w-100 h-100 d-flex align-items-center justify-content-center"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#resumeModal"
              id="btn-green"
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvas;
