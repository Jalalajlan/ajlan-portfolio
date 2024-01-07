import useDeviceDetection from "../hooks/useDeviceDetection";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useTranslation from "../hooks/useTranslation";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LangHandler from "./LangHandler";
import NavItem from "./NavItem";
import "../styles/Sidebar.css";
import React from "react";

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
        <p className="sidebar-summary">{translation.summary}</p>
        <nav className={isMobile ? "hide" : ""}>
          <ul>
            <NavItem
              activeTab={activeTab}
              name={translation.about}
              sectionId="about"
            />
            <NavItem
              activeTab={activeTab}
              name={translation.experience}
              sectionId="experience"
            />
            <NavItem
              activeTab={activeTab}
              name={translation.projects}
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
