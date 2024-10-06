import React, { useState } from "react";
import { ExperienceData, ExperienceTabs } from "./constants";
import ExperienceSection from "./ExperienceSection";

function Experience() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div id="experience" className="pt-10 mx-lg-5 ps-lg-5">
      <div className="px-lg-5 pt-lg-2">
        <div className="d-flex flex-row text-center align-items-center">
          <h1 className="sans col-light fw-b my-3 me-3 col-other">
            <span className="col-green mono">02.</span> Where I've Worked.
          </h1>
          <svg
            width="180"
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
        <div className="row mt-4 h-350">
          <div className="col-lg-2 mono d-flex flex-lg-column flex-row flex-wrap fs-16 ps-3">
            {ExperienceTabs?.map(({ label, value }) => {
              return (
                <div
                  key={value}
                  className={`h-40 d-flex align-items-center exp-tab justify-content-center ps-lg-3 justify-content-lg-start ${
                    value === activeTab ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(value)}
                >
                  {label}
                </div>
              );
            })}
          </div>
          <div className="col mt-4 mt-lg-0">
            <ExperienceSection data={ExperienceData?.[activeTab - 1]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
