import LandingPageSection from "../LandingPageSection";
import { teamMembers } from "../../../../configs/landingPage";
import s from "./OurTeam.module.css";

const OurTeam = () => {
  return (
    <LandingPageSection title="Our Team">
      <div className={s.teamGallery}>
        {teamMembers.map((member) => (
          <div className={s.teamMember}>
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
  );
};

export default OurTeam;
