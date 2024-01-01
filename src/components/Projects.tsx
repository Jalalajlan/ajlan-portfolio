import CallMadeIcon from "@material-ui/icons/CallMade";
import { projectsList } from "../Data/projects-list";
import React, { RefObject } from "react";
import SkillsComponent from "./Skills";
import "../styles/Projects.css";

interface ProjectsProps {
  forwardedRef?: RefObject<HTMLDivElement>;
}

const Projects: React.FC<ProjectsProps> = ({ forwardedRef }) => {
  return (
    <section ref={forwardedRef} id="projects">
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
                <SkillsComponent skills={project.skills} />
              </div>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default Projects;
