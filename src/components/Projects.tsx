import useDeviceDetection from "../hooks/useDeviceDetection";
import CallMadeIcon from "@material-ui/icons/CallMade";
import useTranslation from "../hooks/useTranslation";
import projectsList from "./../data/projects-list.d";
import { GitHub } from "@material-ui/icons";
import SkillsComponent from "./Skills";
import Project from "../types/Project";
import "../styles/Projects.css";
import React from "react";

const Projects: React.FC = () => {
  const translation = useTranslation();
  const isMobile = useDeviceDetection();

  return (
    <section id="projects">
      {isMobile ? (
        <h3 className="projects-title">{translation.projects}</h3>
      ) : null}
      {projectsList.map((project: Project) => {
        return (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-item">
              <img
                src={project.imagePath}
                className="project-image"
                alt="Project image showcase"
              />
              <div>
                <p className="project-name">
                  {(translation as any)[project.name]}
                  {project.hasRepository && (
                    <GitHub
                      fontSize="small"
                      onClick={() => window.open(project.repoLink, "_blank")}
                    />
                  )}
                  <CallMadeIcon className="arrow-icon" />
                </p>
                <p className="project-description">
                  {(translation as any)[project.description]}
                </p>
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
