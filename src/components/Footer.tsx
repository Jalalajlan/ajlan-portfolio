import "../styles/Footer.css";
import React from "react";

const Footer: React.FC = () => {
  return (
    <p className="footer">
      Website{" "}
      <b>
        <a href="https://code.visualstudio.com/">Github repository</a>
      </b>
      . Built with{" "}
      <b>
        <a href="https://react.dev/">React.js</a>
      </b>
      , and deployed with{" "}
      <b>
        <a href="https://www.netlify.com/">Netlify</a>
      </b>{" "}
      .
    </p>
  );
};

export default Footer;
