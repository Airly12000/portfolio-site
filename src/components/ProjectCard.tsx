import React from "react";

interface Props {
  title: string;
  body: string;
  github?: string;
  demo?: string;
  tools: string[];
}

function ProjectCard({ title, body, github, demo, tools }: Props) {
  return (
    <div className="col-md col-auto rounded" id="other-card">
      <div className="row">
        <div className="col">
          <i className="bi bi-folder col-green fs-40"></i>
        </div>
        <div className="col d-flex align-items-center flex-row-reverse">
          <div className="d-flex flex-row-reverse gap-3">
            {demo && (
              <a href={demo} className="proj-link">
                <i className="bi bi-box-arrow-up-right fs-18"></i>
              </a>
            )}
            {github && (
              <a href={github} className="proj-link">
                <i className="bi bi-github fs-18"></i>
              </a>
            )}
          </div>
        </div>
        <div className="mt-2 d-flex flex-column">
          <h4 className="col-light font-monospace">{title}</h4>
          <p className="fs-14" style={{ textAlign: "justify" }}>
            {body}
          </p>
          <div className="col mb-2 mb-md-4 mt-4 mono row justify-content-start fs-12 text-start align-self-baseline">
            {tools.map((tool: string, index: number) => (
              <div key={index} className="col">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
