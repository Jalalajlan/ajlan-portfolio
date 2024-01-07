import useDeviceDetection from "../hooks/useDeviceDetection";
import useTranslation from "../hooks/useTranslation";
import "../styles/About.css";

const About: React.FC = () => {
  const translation = useTranslation();
  const isMobile = useDeviceDetection();

  return (
    <div id="about">
      {isMobile ? (
        <h3 className="about-title">{translation.about.toUpperCase()}</h3>
      ) : null}
      <p
        className="about-description"
        dangerouslySetInnerHTML={{ __html: translation.aboutDescription }}
      ></p>
    </div>
  );
};

export default About;
