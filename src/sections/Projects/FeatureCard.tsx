import React from "react";

interface Props {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  stack: string[];
  img: string;
  index: number;
}

export default function FeatureCard({
  title,
  description,
  demo,
  github,
  stack,
  img,
  index,
}: Props) {
  const leftOrRight = index % 2 === 0 ? "left" : "right";
  const startOrEnd = index % 2 !== 0 ? "start" : "end";
  return (
    <div className="position-relative h-350">
      <img
        src={img}
        alt={title}
        className={`${leftOrRight}-img rounded object-fit-contain`}
      />
      {/* <div
        className={`d-none d-md-block cover ${leftOrRight} h-100 bg-black opacity-25`}
      ></div> */}
      <div
        className={`position-absolute ${startOrEnd}-0 text-${startOrEnd} justify-content-${startOrEnd} top-0 proj-text`}
      >
        <div className="mb-2 mb-md-4 mt-4">
          <h6 className="mono fs-14 col-green">Featured Project</h6>
        </div>
        <div className="mb-2 mb-md-4">
          <h4 className="fs-24 fw-b col-light">{title}</h4>
        </div>
        <div
          className={`d-flex w-100 mt-4 mb-2 mb-md-4 justify-content-${startOrEnd}`}
        >
          <div className={`proj-card rounded `}>{description}</div>
        </div>
        <div
          className={`mb-2 mb-md-4 mt-4 mono d-flex gap-3 justify-content-${startOrEnd} fs-12 me-2 me-lg-0`}
        >
          {stack?.map((s, i) => {
            return <div key={i}>{s}</div>;
          })}
        </div>
        {!!github || !!demo ? (
          <div
            className={`mb-2 mt-3 d-flex gap-4 me-2 justify-content-${startOrEnd} me-lg-0`}
          >
            {!!github && (
              <div className="">
                <a href={github} className="proj-link">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            )}
            {!!demo && (
              <div className="">
                <a href={demo} target="__blank" className="proj-link">
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="mono fs-14">N/A</div>
        )}
      </div>
    </div>
  );
}
