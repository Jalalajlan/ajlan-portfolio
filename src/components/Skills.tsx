import { Skill } from "../Data/experience-list";
import React from "react";

interface SkillsComponentProps {
  skills: Skill[];
}

const SkillsComponent: React.FC<SkillsComponentProps> = ({ skills }) => {
  return (
    <div className="skills-flex">
      {skills.map((skill) => (
        <span key={skill.id} className="skill">
          {skill.name}
        </span>
      ))}
    </div>
  );
};

export default SkillsComponent;
