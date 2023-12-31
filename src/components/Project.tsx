import CallMadeIcon from "@material-ui/icons/CallMade";
import { projectsList } from "../Data/projects-list";
import { Skill } from "../Data/experience-list";
import "../styles/Projects.css";
import React from "react";

const Projects: React.FC = () => {
  const renderSkills = (skills: Skill[]) => (
    <div className="project-skills">
      {skills.map((skill) => (
        <span key={skill.id} className="project-skill">
          {skill.name}
        </span>
      ))}
    </div>
  );

  return (
    <section className="projects-section">
      {projectsList.map((project) => {
        return (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-wrapper"
          >
            <div className="project-item">
              <img
                src={project.imagePath}
                className="project-image"
                alt="Project image showcase"
              />
              <div>
                <p className="project-name">
                  {project.name}
                  <CallMadeIcon className="arrow-icon" />
                </p>
                <p className="project-description">{project.description}</p>
                {renderSkills(project.skills)}
              </div>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default Projects;
