import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div id="projects" className="pt-10 mx-lg-5 ps-lg-5">
      <div className="d-flex flex-row text-center align-items-center mb-4">
        <h1 className="sans col-light fw-b fs-26 my-3 me-3 col-other">
          <span className="col-green mono fs-26">03.</span> Some Projects I've
          Worked On.
        </h1>
        <svg
          width="75"
          height="1"
          viewBox="0 0 307 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="-0.000854492"
            y1="0.25"
            x2="307.001"
            y2="0.25"
            stroke="#8892b0"
            strokeWidth="0.5"
          />
        </svg>
      </div>
      <div className="position-relative h-350">
        <img
          src="assets/img/invoiceapp.png"
          alt="invoiceapp"
          className="left-img rounded"
        />
        <div className="position-absolute end-0 top-0 text-end proj-text">
          <div className="col mb-2 mb-md-4 mt-4">
            <h6 className="mono fs-14 col-green">Featured Project</h6>
          </div>
          <div className="col mb-2 mb-md-4">
            <h4 className="fs-24 fw-b col-light">Invoice App</h4>
          </div>
          <div className="col mb-2 mb-md-4 proj-card rounded mt-4">
            Frontend Mentor Invoice App Challenge. The challenge is to build out
            this invoicing application and get it looking as close to the design
            as possible.
          </div>
          <div className="col mb-2 mb-md-4 mt-4 mono row justify-content-end fs-12 text-end me-2 me-lg-0">
            <div className="col-lg-2 col">React</div>
            <div className="col-lg-3 col">Bootsrap Icons</div>
            <div className="col-lg-2 col">JavaScript</div>
            <div className="col-lg-2 col">Bootstrap</div>
          </div>
          <div className="col mb-2 mt-3 row justify-content-end text-end me-2 me-lg-0">
            <div className="col-1">
              <a
                href="https://github.com/Airly12000/invoice_app_frontend"
                className="proj-link"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
            <div className="col-1">
              <a
                href="https://invoiceappfrontend.netlify.app"
                className="proj-link"
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative h-350 mt-6">
        <img
          src="assets/img/adminox.png"
          alt="invoiceapp"
          className="right-img rounded"
        />
        <div className="position-absolute start-0 top-0 text-start proj-text">
          <div className="col mb-2 mb-md-4 mt-4">
            <h6 className="mono fs-14 col-green">Featured Project</h6>
          </div>
          <div className="col mb-2 mb-md-4">
            <h4 className="fs-24 fw-b col-light">MyHostel GH</h4>
          </div>
          <div className="col mb-2 mb-md-4 proj-card rounded mt-4">
            A web app for viewing available hostels, it's conditions and prices
            in the university environs. Also helps in securing and booking
            hostels for continuing and prospective university students.
          </div>
          <div className="col mb-2 mb-md-4 mt-4 mono row justify-content-start fs-12 text-start">
            <div className="col-lg-2 col">JavaScript</div>
            <div className="col-lg-2 col">Bootstrap</div>
            <div className="col-lg-3 col">Bootsrap Icons</div>
            <div className="col-lg-2 col">React</div>
          </div>
          {/* <div className="col mb-2 mt-3 row justify-content-start text-start">
            <div className="col-1">
              <a href="" className="proj-link" id="disabled">
                <i className="bi bi-github"></i>
              </a>
            </div>
            <div className="col-1">
              <a href="" className="proj-link" id="disabled">
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div> */}
          <div>N/A</div>
        </div>
      </div>
      <div className="d-flex flex-column mt-10">
        <div className="text-center mb-4">
          <h3 className="col-light mb-3">Other Projects</h3>
          {/* <p className="col-green">view the archive</p> */}
        </div>
        <div className="container">
          <div className="row gap-4">
            <ProjectCard
              title="Jwt Auth Template"
              body="Integrating JWT with Express, Sequelize ORM, and MySQL, I created a secure authentication system that allows users to access protected resources while ensuring data integrity and confidentiality."
              // demo="https://github.com/Airly12000"
              github="https://github.com/Airly12000/jwt_auth"
              tools={["JavaScript", "Express", "Sequelize", "MySQL"]}
            />
            <ProjectCard
              title="Redux Template"
              body="Utilized the powerful state management library of redux in conjunction with axios to handle asynchronous data fetching. This template provides all that is needed to start using redux in your react applicaiton."
              // demo="https://github.com/Airly12000"
              github="https://github.com/Airly12000/redux_state_mgt"
              tools={["TypeScript", "Redux", "Axios", "React"]}
            />
            {/* <ProjectCard
              title="Something"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            suscipit, iusto saepe nemo beatae corporis at? Adipisci fugit, odit
            numquam a, commodi, provident minus quia laboriosam recusandae vero
            maxime asperiores?"
              github="https://invoiceappfrontend.netlify.app"
              tools={["Bootstrap", "Bootstrap Icons", "React"]}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
