import LandingPageSection from "../LandingPageSection";
import { aboutText } from "../../../../configs/landingPage";
import s from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <LandingPageSection title="About Us">
        <p className={s.aboutText}>{aboutText}</p>
      </LandingPageSection>
    </section>
  );
};

export default About;
