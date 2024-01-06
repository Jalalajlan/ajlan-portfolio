import "../styles/Footer.css";
import React from "react";

const Footer: React.FC = () => {
  return (
    <p className="footer">
      Website{" "}
      <b>
        <a href="https://github.com/Jalalajlan/ajlan-portfolio" target="_blank">
          Github repository
        </a>
      </b>
      . Built with{" "}
      <b>
        <a href="https://react.dev/" target="_blank">
          React.js
        </a>
      </b>
      , and deployed with{" "}
      <b>
        <a href="https://www.netlify.com/" target="_blank">
          Netlify
        </a>
      </b>{" "}
      .
    </p>
  );
};

export default Footer;
