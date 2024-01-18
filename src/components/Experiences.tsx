import useDeviceDetection from "../hooks/useDeviceDetection";
import experiencesList from "./../data/experience-list";
import CallMadeIcon from "@material-ui/icons/CallMade";
import useTranslation from "../hooks/useTranslation";
import ExperienceProject from "./ExperienceProject";
import SkillsComponent from "./Skills";
import "../styles/Experiences.css";
import React from "react";

const Experiences: React.FC = () => {
  const translation = useTranslation();
  const isMobile = useDeviceDetection();

  return (
    <section id="experience">
      {isMobile ? (
        <h3 className="experience-title">{translation.experience}</h3>
      ) : null}
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
                {(translation as any)[experience.stateDate] ?? ""} &mdash;{" "}
                {(translation as any)[experience.endDate] ?? ""}
              </p>
              <div>
                <p className="experience-position">
                  {(translation as any)[experience.position] ?? ""} ·{" "}
                  {(translation as any)[experience.company] ?? ""}
                  <CallMadeIcon className="arrow-icon" />
                </p>
                <p className="experience-description">
                  {(translation as any)[experience.description]}
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
