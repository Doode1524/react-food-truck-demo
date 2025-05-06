import LandingPageSection from "../LandingPageSection";
import { menuItems } from "../../../../configs/landingPage";
import s from "./OurMenu.module.css";

const OurMenu = () => {
  return (
    <LandingPageSection title="Our Menu" hasDivider={false}>
      <div className={s.menuGallery}>
        {menuItems.map((item) => (
          <div className={s.menuItem}>
            <img className={s.menuImage} src={item.img} alt={item.name} />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </LandingPageSection>
  );
};

export default OurMenu;
