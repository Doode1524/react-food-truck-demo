import LandingPageSection from "../components/LandingPageSection";
import { aboutText } from "../../../configs/landingPage";
import s from "./About.module.css";

const About = () => {
  return (
    <LandingPageSection title="About Us">
      <p className={s.aboutText}>{aboutText}</p>
    </LandingPageSection>
  );
};

export default About;
