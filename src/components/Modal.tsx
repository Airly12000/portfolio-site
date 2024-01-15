import React from "react";

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
        <div className="modal-content bg-transparent" id="modalWidth">
          <button
            type="button"
            className="btn-close align-self-end mt-3 me-3"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body d-flex flex-column flex-md-row h-50 flex-row align-items-center justify-content-evenly w-100 gap-5 ">
            <div className="d-flex flex-column gap-3 align-items-center">
              <img
                src="assets/img/Resume1.png"
                alt="Resume 1"
                className="resumeDisplay"
              />
              <a
                href="assets/Resume.pdf"
                target="__blank"
                className="btn"
                id="btn-filled-green"
              >
                Resume 1
              </a>
            </div>
            <div className="d-flex flex-column gap-3 align-items-center">
              <img
                src="assets/img/Resume2.png"
                alt="Resume 1"
                className="resumeDisplay"
              />
              <a
                href="assets/CV.pdf"
                target="__blank"
                className="btn"
                id="btn-filled-green"
              >
                Resume 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
