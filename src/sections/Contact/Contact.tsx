import React from "react";
import { SocialLinks } from "./constants";

function Contact() {
  return (
    <div
      id="contact"
      className="pt-10 mt-6 mx-5 mb-8 d-flex justify-content-center align-items-center flex-column"
    >
      <h6 className="mono col-green fs-18 text-center">04. What's Next?</h6>
      <h2 className="sans col-light fw-b my-3 text-center">Get In Touch</h2>
      <p className="text-center">
        I’m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <a
        href="mailto:littlefrancis28@gmail.com"
        type="button"
        className="btn h-55 mt-5 d-flex align-items-center justify-content-center"
        id="btn-green"
      >
        <span className="mono fs-18">Contact Me</span>
      </a>
      <div className="d-flex d-md-none justify-content-center align-items-center w-100 pt-5">
        {SocialLinks.map(({ value, icon }, index) => {
          return (
            <a href={value} className="fs-20 socLink" key={index}>
              <i className={icon}></i>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
