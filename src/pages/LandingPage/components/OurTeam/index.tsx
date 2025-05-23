import LandingPageSection from "../LandingPageSection";
import { teamMembers } from "../../../../configs/landingPage";
import s from "./OurTeam.module.css";

const OurTeam = () => {
  return (
    <section id="team">
      <LandingPageSection title="Our Team">
        <div className={s.teamGallery}>
          {teamMembers.map((member, index) => (
            <div key={index} className={s.teamMember}>
              <img
                className={s.teamMemberImage}
                src={member.img}
                alt={member.name}
              />
              <h1>{member.name}</h1>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </LandingPageSection>
    </section>
  );
};

export default OurTeam;
