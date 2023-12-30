import { ReactNode } from "react";
import "../styles/MainContent.css";

interface MainContentProps {
  children: ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  return <div className="main-content">{children}</div>;
};

export default MainContent;
