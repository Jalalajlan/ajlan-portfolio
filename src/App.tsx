import useNavObserver from "./hooks/useNavObserver";
import CursorBoxTracker from "./components/CursorBoxTracker";
import MainContent from "./components/MainContent";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import About from "./components/About";
import React from "react";
import "./App.css";

const App = () => {
  const activeTab = useNavObserver();

  return (
    <React.Fragment>
      <Wrapper>
        <Sidebar activeTab={activeTab} />
        <MainContent>
          <About />
          <Experiences />
          <Projects />
          <Footer />
        </MainContent>
      </Wrapper>
      <CursorBoxTracker />
    </React.Fragment>
  );
};

export default App;
