import useIntersectionObserver from "./hooks/useIntersectionObserver";
import CursorBoxTracker from "./components/CursorBoxTracker";
import MainContent from "./components/MainContent";
import Experience from "./components/Experience";
import React, { useRef, useState } from "react";
import Projects from "./components/Project";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import About from "./components/About";
import "./styles/fonts.css";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  useIntersectionObserver(
    {
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
    },
    setActiveTab,
    observerOptions
  );

  return (
    <React.Fragment>
      <Wrapper>
        <Sidebar activeTab={activeTab} />
        <MainContent>
          <About forwardedRef={aboutRef} />
          <Experience forwardedRef={experienceRef} />
          <Projects forwardedRef={projectsRef} />
        </MainContent>
      </Wrapper>
      <CursorBoxTracker />
    </React.Fragment>
  );
};

export default App;
