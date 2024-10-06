import React from "react";
import { SocialLinks } from "../data/constants";

function Socials() {
  return (
    <div className="d-none d-md-flex flex-column-reverse position-fixed bottom-0 socials text-center">
      <div className="">|</div>
      <div className="">|</div>
      <div className="">|</div>
      <div className="">|</div>
      <div className="">|</div>
      {SocialLinks.map(({ value, icon }, index) => {
        return (
          <a href={value} className="mb-3 fs-20" key={index}>
            <i className={icon}></i>
          </a>
        );
      })}
    </div>
  );
}

export default Socials;
