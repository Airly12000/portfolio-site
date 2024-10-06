import React from "react";
import ProjectCard from "./ProjectCard";
import { FeaturedProjectsData, OtherProjectsData } from "./constants";
import FeatureCard from "./FeatureCard";

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
      <div className="d-flex flex-column gap-5">
        {FeaturedProjectsData?.map(
          ({ title, description, demo, github, stack, img }, index) => {
            return (
              <FeatureCard
                key={index}
                title={title}
                description={description}
                demo={demo}
                github={github}
                stack={stack}
                img={img}
                index={index}
              />
            );
          }
        )}
      </div>
      <div className="d-flex flex-column mt-10">
        <div className="text-center mb-4">
          <h3 className="col-light mb-3">Other Projects</h3>
          {/* <p className="col-green">view the archive</p> */}
        </div>
        <div className="container">
          <div className="row gap-4">
            {OtherProjectsData?.map(
              ({ title, description, demo, github, stack }, index) => {
                return (
                  <ProjectCard
                    key={index}
                    title={title}
                    description={description}
                    demo={demo}
                    github={github}
                    stack={stack}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
