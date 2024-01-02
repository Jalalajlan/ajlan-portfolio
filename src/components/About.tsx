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
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an advertising agency, a start-up, a student-led
        design studio, and a huge corporation.
        <br />
        <br />
        My main focus these days is building products and leading projects for
        our clients at Upstatement. In my free time, I've also released an
        online video course that covers everything you need to know to build a
        web app with the <b>Spotify API</b>.
        <br />
        <br />
        When I’m not at the computer, I’m usually rock climbing, hanging out
        with my wife and two cats, or running around Hyrule searching for{" "}
        <b>Korok seeds</b>.
      </p>
    </div>
  );
};

export default About;
