import CursorBoxTracker from "./components/CursorBoxTracker";
import MainContent from "./components/MainContent";
import Experience from "./components/Experience";
import React, { useEffect, useRef, useState } from "react";
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
  const projectsRef = useRef();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current) {
            setActiveTab("about");
          } else if (entry.target === experienceRef.current) {
            setActiveTab("experience");
          } else if (entry.target === projectsRef.current) {
            setActiveTab("projects");
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <React.Fragment>
      <Wrapper>
        <Sidebar activeTab={activeTab} />
        <MainContent>
          <About forwardedRef={aboutRef} />
          <Experience forwardedRef={experienceRef} />
          <Projects />
        </MainContent>
      </Wrapper>
      <CursorBoxTracker />
    </React.Fragment>
  );
};

export default App;
