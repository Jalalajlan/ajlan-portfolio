import { appStyles } from "../styles/styles";

interface NavItemProps {
  name: string;
  sectionId: string;
  activeTab: String | null;
}

const NavItem: React.FC<NavItemProps> = ({ name, sectionId, activeTab }) => {
  const scrollTo = () => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <li>
      <a
        style={activeTab === name ? appStyles.active : undefined}
        href={`#${sectionId}`}
        onClick={scrollTo}
      >
        {name.toUpperCase()}
      </a>
    </li>
  );
};

export default NavItem;
