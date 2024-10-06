import React from "react";

interface Props {
  data: {
    role: string;
    company: string;
    duration: string;
    responsibilities: string[];
  };
}

export default function ExperienceSection({
  data: { role, company, duration, responsibilities },
}: Props) {
  return (
    <div className="col exp-details">
      <h3 className="col-light fw-b">
        {role}
        <span className="col-green"> @ {company}</span>
      </h3>
      <h6 className="mono">{duration}</h6>
      <ul>
        {responsibilities?.map((r, i) => {
          return <li key={i}>{r}</li>;
        })}
      </ul>
    </div>
  );
}
