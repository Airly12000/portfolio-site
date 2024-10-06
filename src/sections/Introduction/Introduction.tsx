import React from "react";
import { IntroductionData } from "./constants";
import { EmailConstant } from "../../data/constants";

function Introduction() {
  return (
    <div className="container mx-md-4 mb-5" id="intro">
      <h4 className="col-green mono mb-4 mt-5">Hi, my name is</h4>
      <h1 className="sans col-light fw-b my-3">{IntroductionData?.name}.</h1>
      <h1 className="sans col-other fw-b my-3">{IntroductionData?.whatIDo}.</h1>
      <p className="sans mt-3 mb-5">{IntroductionData?.summary}</p>
      <a
        href={`mailto:${EmailConstant}`}
        type="button"
        className="btn h-55 align-items-center d-flex justify-content-center"
        id="btn-green"
      >
        <span className="mono fs-16">Contact Me</span>
      </a>
    </div>
  );
}

export default Introduction;
