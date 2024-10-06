import React from "react";
import { EmailConstant } from "../data/constants";

export default function Email() {
  return (
    <div className="d-none d-md-flex flex-column-reverse position-fixed bottom-0 email text-center">
      <div className="">|</div>
      <div className="">|</div>
      <div className="">|</div>
      <div className="">|</div>
      <div className="">|</div>
      <a href={`mailto:${EmailConstant}`} className="rot-90 mono">
        {EmailConstant}
      </a>
    </div>
  );
}
