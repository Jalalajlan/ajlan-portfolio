import { scrollTo } from "../utils/utils";

interface NavItemProps {
  name: string;
  sectionId: string;
  activeTab: String | null;
}

const NavItem: React.FC<NavItemProps> = ({ name, sectionId, activeTab }) => {
  return (
    <li>
      <a
        className={activeTab === sectionId ? "active-tab" : ""}
        href={`#${sectionId}`}
        onClick={() => scrollTo(sectionId)}
      >
        <span
          className={activeTab === sectionId ? "active-indicator" : ""}
        ></span>
        {name.toUpperCase()}
      </a>
    </li>
  );
};

export default NavItem;
