import React from "react";
import { AboutData } from "./constants";

function About() {
  return (
    <div id="about" className="ps-1 mx-md-5 ps-md-5 pt-6">
      <div className="d-flex flex-row text-center align-items-center">
        <h1 className="sans col-light fw-b my-3 me-3 col-other">
          <span className="col-green mono">01.</span> About Me
        </h1>
        <svg
          width="250"
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
      <div className="row mt-4">
        <div className="col pe-4">
          {AboutData?.paragraphs?.map((p, index) => {
            return (
              <p className="sans about-p" key={index}>
                {p}
              </p>
            );
          })}
          <p className="sans about-p">
            Here are some of the technologies I'm familiar with:
          </p>
          <div className="row ps-3 mono">
            {AboutData?.technologies?.map((l, index) => {
              return (
                <ul className="col col-md-4" key={index}>
                  {l?.map((t, i) => {
                    return <li key={`${index}-${i}`}>{t}</li>;
                  })}
                </ul>
              );
            })}
          </div>
        </div>
        <div className="col-lg-5 mt-3 mt-lg-0 position-relative d-flex align-items-center justify-content-center about-img">
          <img
            src={AboutData?.imgUrl}
            alt="myPhoto"
            className="position-absolute rounded"
          />
          <div className="position-absolute d-none d-sm-block rounded about-border"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
