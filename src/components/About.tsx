import useDeviceDetection from "../hooks/useDeviceDetection";
import { RefObject } from "react";
import "../styles/About.css";

interface AboutProps {
  forwardedRef?: RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({ forwardedRef }) => {
  const isMobile = useDeviceDetection();

  return (
    <div ref={forwardedRef} id="about">
      {isMobile ? <h3 className="about-title">ABOUT</h3> : null}
      <p className="about-description">
        From a young age, I have always had a passion for coding, fueled by the
        wonder of how the internet works. I used to play with custom Google blog
        templates using HTML and CSS and it was really fun. Fast-forwarded to
        today, and I turned my passion into success in building production
        software.
        <br />
        <br />I have a <b> degree in Software Engineering </b> backed up by{" "}
        <b>1.4 years of practical experience</b> with a focus on building
        robust, high-quality software and solving business problems. I've used a
        variety of programming languages including{" "}
        <b> JavaScript, Java, Dart, and PHP.</b>
        <br />
        <br />
        When I'm away from the computer, you'll find me at the gym, hanging out
        with my brother or reading a book.
      </p>
    </div>
  );
};

export default About;
