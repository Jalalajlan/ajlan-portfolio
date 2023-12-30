import MainContent from "./components/MainContent";
import Experience from "./components/Experience";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import About from "./components/About";
import "./styles/fonts.css";
import "./App.css";

const App = () => {
  return (
    <Wrapper>
      <Sidebar />
      <MainContent>
        <About />
        <About />
        <About />
        <About />
        <About />
        <Experience />
      </MainContent>
    </Wrapper>
  );
};

export default App;
