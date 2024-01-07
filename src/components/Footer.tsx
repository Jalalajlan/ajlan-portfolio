import useTranslation from "../hooks/useTranslation";
import "../styles/Footer.css";
import React from "react";

const Footer: React.FC = () => {
  const translation = useTranslation();
  return (
    <p className="footer">
      {(translation as any).website}{" "}
      <b>
        <a href="https://github.com/Jalalajlan/ajlan-portfolio" target="_blank">
          {(translation as any).githubRepository}
        </a>
      </b>
      . {(translation as any).builtWith}{" "}
      <b>
        <a href="https://react.dev/" target="_blank">
          React.js
        </a>
      </b>
      , {(translation as any).andDeployedWith}{" "}
      <b>
        <a href="https://www.netlify.com/" target="_blank">
          Netlify
        </a>
      </b>
      .
    </p>
  );
};

export default Footer;
