import { useState, useEffect } from "react";

const useNavObserver = () => {
  const [activeTab, setActiveTab] = useState<string>("about");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const aboutSection = document.getElementById("about")!;

    const experienceSection = document.getElementById("experience")!;
    const projectsSection = document.getElementById("projects")!;

    if (
      scrollPosition >= aboutSection.offsetTop &&
      scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight
    ) {
      setActiveTab("about");
    } else if (
      scrollPosition >= experienceSection.offsetTop &&
      scrollPosition <
        experienceSection.offsetTop + experienceSection.offsetHeight
    ) {
      setActiveTab("experience");
    } else if (
      scrollPosition >= projectsSection.offsetTop &&
      scrollPosition < projectsSection.offsetTop + projectsSection.offsetHeight
    ) {
      setActiveTab("projects");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeTab;
};

export default useNavObserver;
