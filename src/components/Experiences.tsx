import useDeviceDetection from "../hooks/useDeviceDetection";
import { experiencesList } from "../data/experience-list";
import CallMadeIcon from "@material-ui/icons/CallMade";
import ExperienceProject from "./ExperienceProject";
import SkillsComponent from "./Skills";
import "../styles/Experiences.css";
import React from "react";

const Experiences: React.FC = () => {
  const isMobile = useDeviceDetection();

  return (
    <section id="experience">
      {isMobile ? <h3 className="experience-title">EXPERIENCE</h3> : null}
      {experiencesList.map((experience) => {
        return (
          <a
            key={experience.id}
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-link"
          >
            <div className="experience-item">
              <p className="experience-date">
                {experience.stateDate} &mdash; {experience.endDate}
              </p>
              <div>
                <p className="experience-position">
                  {experience.position} · {experience.company}
                  <CallMadeIcon className="arrow-icon" />
                </p>
                <p className="experience-description">
                  {experience.description}
                </p>
                {<ExperienceProject projects={experience.projects} />}
                {<SkillsComponent skills={experience.skills} />}
              </div>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default Experiences;
