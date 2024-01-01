import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Sidebar.css";

interface SidebarProps {
  activeTab: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
  const activeStyles = {
    color: "brown",
    textDecoration: "underline",
  };
  console.log(activeTab);
  return (
    <header className="sidebar">
      <section className="sidebar__intro">
        <p className="sidebar__name">Brittany Chiang</p>
        <p className="sidebar__title">Experienced Software engineer</p>
        <p className="sidebar__summary">
          I build pixel-perfect, accessible products for the web and beyond.
        </p>
        <nav>
          <ul>
            <li>
              <a style={activeTab === "about" ? activeStyles : {}} href="#">
                ABOUT
              </a>
            </li>
            <li>
              <a
                style={activeTab === "experience" ? activeStyles : {}}
                href="#"
              >
                EXPERIENCE
              </a>
            </li>
            <li>
              <a style={activeTab === "projects" ? activeStyles : {}} href="#">
                PROJECTS
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="sidebar__social-media">
        <a href="#">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="">
          <InstagramIcon fontSize="large" />
        </a>
        <a href="">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="">
          <TwitterIcon fontSize="large" />
        </a>
      </section>
    </header>
  );
};

export default Sidebar;
