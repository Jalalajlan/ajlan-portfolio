import useIntersectionObserver from "./hooks/useIntersectionObserver";
import CursorBoxTracker from "./components/CursorBoxTracker";
import MainContent from "./components/MainContent";
import Experiences from "./components/Experiences";
import React, { useRef, useState } from "react";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/footer";
import About from "./components/About";
import "./styles/fonts.css";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");

  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: window.innerWidth > 1200 ? 0.7 : 0.5,
  };

  useIntersectionObserver(
    {
      about: aboutRef,
      experience: experiencesRef,
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
          <Experiences forwardedRef={experiencesRef} />
          <Projects forwardedRef={projectsRef} />
          <Footer />
        </MainContent>
      </Wrapper>
      <CursorBoxTracker />
    </React.Fragment>
  );
};

export default App;
