import CallMadeIcon from "@material-ui/icons/CallMade";
import LinkIcon from "@material-ui/icons/Link";
import React, { RefObject } from "react";
import "../styles/Experience.css";
import {
  Contribution,
  Skill,
  experiencesList,
} from "./../Data/experience-list";

interface ExperienceProps {
  forwardedRef?: RefObject<HTMLDivElement>;
}

const Experience: React.FC<ExperienceProps> = ({ forwardedRef }) => {
  const renderProjects = (projects: Contribution[]) => {
    if (projects.length === 0) {
      return null;
    }
    return (
      <div className="experience-projects">
        {projects.map((project) => (
          <div key={project.name} className="experience-project">
            <div
              className="experience-project-link"
              onClick={() => window.open(project.link, "_blank")}
            >
              <LinkIcon style={{ fontSize: "12px" }} className="link-icon" />
              {project.name}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderSkills = (skills: Skill[]) => (
    <div className="experience-skills">
      {skills.map((skill) => (
        <span key={skill.id} className="experience-skill">
          {skill.name}
        </span>
      ))}
    </div>
  );

  return (
    <section ref={forwardedRef} className="experience-section">
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
                {renderProjects(experience.projects)}
                {renderSkills(experience.skills)}
              </div>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default Experience;
