import React from "react";
import OffCanvas from "./OffCanvas";
import { NavLinks } from "../data/constants";

export default function Navbar() {
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
      <div className="d-none d-md-flex flex-direction-row align-items-center gap-3 text-center col-dark-text">
        {NavLinks.map(({ label, value }, index) => {
          return (
            <div className="mono" key={value}>
              <a href={value} className="nav-links">
                {index !== 0 && <span className="col-green">0{index}.</span>}{" "}
                {label}
              </a>
            </div>
          );
        })}
        <div className="link-width mono">
          <button
            className="btn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#resumeModal"
            id="btn-green"
          >
            Résumés
          </button>
          {/* <a
            href="assets/Curriculum Vitae - Francis Junior - PDF.pdf"
            target="__blank"
            className="btn"
            style={{ width: "80%" }}
            id="btn-green"
          >
            CV
          </a> */}
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
