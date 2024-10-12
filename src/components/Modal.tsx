import React from "react";
import { Resumes } from "../data/constants";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="resumeModal"
      tabIndex={-1}
      aria-labelledby="resumeModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-transparent border-0" id="modalWidth">
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close align-self-end mt-3 me-3 bg-light"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex flex-column align-items-center justify-content-evenly w-100 gap-5">
            {Resumes?.map((res, index) => {
              return (
                <div
                  className="d-flex flex-column gap-3 align-items-center"
                  key={index}
                >
                  {/* <img
                    src="assets/img/Resume1.png"
                    alt="Resume 1"
                    className="resumeDisplay"
                  /> */}
                  <a
                    href={res.url}
                    target="__blank"
                    className="btn"
                    id="btn-filled-green"
                  >
                    {res.label}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
