import { experiencesList } from "../Data/experience-list";
import CallMadeIcon from "@material-ui/icons/CallMade";
import ExperienceProject from "./ExperienceProject";
import React, { RefObject } from "react";
import SkillsComponent from "./Skills";
import "../styles/Experiences.css";

interface ExperiencesProps {
  forwardedRef?: RefObject<HTMLDivElement>;
}

const Experiences: React.FC<ExperiencesProps> = ({ forwardedRef }) => {
  return (
    <section ref={forwardedRef} id="experience">
      {experiencesList.map((experience) => {
        return (
          <a
            key={experience.id}
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-wrapper"
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
