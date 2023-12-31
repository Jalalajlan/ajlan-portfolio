import { Project, experienceList } from "./../Data/experience-list";
import CallMadeIcon from "@material-ui/icons/CallMade";
import LinkIcon from "@material-ui/icons/Link";
import "../styles/Experience.css";
import React from "react";

const Experience: React.FC = () => {
  const renderProjects = (projects: Project[]) => {
    if (projects.length === 0) {
      return null;
    }
    return (
      <div className="experience-projects">
        {projects.map((project) => (
          <div key={project.name} className="experience-project">
            <a
              href={project.link}
              target="_blank"
              className="experience-project-link"
            >
              <LinkIcon style={{ fontSize: "12px" }} className="link-icon" />
              {project.name}
            </a>
          </div>
        ))}
      </div>
    );
  };

  const renderSkills = (skills: String[]) => (
    <div className="experience-skills">
      {skills.map((skill) => (
        <span className="experience-skill">{skill}</span>
      ))}
    </div>
  );

  return (
    <section className="experience-section">
      {experienceList.map((experience) => {
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
