export const scrollTo = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({
    behavior: "smooth",
  });
};
