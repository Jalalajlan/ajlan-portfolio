import CursorBoxTracker from "./components/CursorBoxTracker";
import MainContent from "./components/MainContent";
import Experience from "./components/Experience";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import About from "./components/About";
import "./styles/fonts.css";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Sidebar />
        <MainContent>
          <About />
          <Experience />
        </MainContent>
      </Wrapper>
      <CursorBoxTracker />
    </React.Fragment>
  );
};

export default App;
