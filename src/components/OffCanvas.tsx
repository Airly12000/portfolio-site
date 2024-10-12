import React from "react";
import { NavLinks } from "../data/constants";

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
        <ul className="navbar-nav d-flex justify-content-center gap-3 align-items-center flex-grow-1 pe-3">
          {NavLinks.map(({ label, value }, index) => {
            return (
              <li
                className="mono mb-4 fs-20"
                data-bs-dismiss="offcanvas"
                key={value}
              >
                <a href={value} className="nav-links">
                  {index !== 0 && <div className="col-green">0{index}.</div>}{" "}
                  {label}
                </a>
              </li>
            );
          })}
          <li
            className="link-width mono mb-4 h-55 mt-3 fs-20"
            data-bs-dismiss="offcanvas"
          >
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvas;
