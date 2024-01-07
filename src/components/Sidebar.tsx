import useDeviceDetection from "../hooks/useDeviceDetection";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import NavItem from "./NavItem";
import "../styles/Sidebar.css";
import React from "react";
import useTranslation from "../hooks/useTranslation";
import LangHandler from "./LangHandler";

interface SidebarProps {
  activeTab: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
  const translation = useTranslation();
  const isMobile = useDeviceDetection();

  return (
    <header className="sidebar">
      <section className="sidebar-intro">
        <p className="sidebar-name">{translation.fullName}</p>
        <p className="sidebar-title">{translation.position}</p>
        <p className="sidebar-summary">
          I'm all about coding, debugging and finding elegant solutions.
        </p>
        <nav className={isMobile ? "hide" : ""}>
          <ul>
            <NavItem activeTab={activeTab} name="about" sectionId="about" />
            <NavItem
              activeTab={activeTab}
              name="experience"
              sectionId="experience"
            />
            <NavItem
              activeTab={activeTab}
              name="projects"
              sectionId="projects"
            />
          </ul>
        </nav>
      </section>
      <section className="sidebar-socials">
        <div>
          <a href="https://github.com/Jalalajlan" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/jalal-ajlan-351024149/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="mailto:jalalajlan@gmail.com">
            <EmailIcon fontSize="large" />
          </a>
        </div>
        <LangHandler />
      </section>
    </header>
  );
};

export default Sidebar;
