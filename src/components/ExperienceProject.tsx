import { Contribution } from "../data/experience-list";
import LinkIcon from "@material-ui/icons/Link";
import React from "react";

interface ExperienceProjectProps {
  projects: Contribution[];
}

const ExperienceProject: React.FC<ExperienceProjectProps> = ({ projects }) => {
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

export default ExperienceProject;
