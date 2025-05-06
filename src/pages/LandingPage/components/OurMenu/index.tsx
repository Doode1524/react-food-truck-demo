import LandingPageSection from "../LandingPageSection";
import { menuItems } from "../../../../configs/landingPage";
import s from "./OurMenu.module.css";

const OurMenu = () => {
  return (
    <section id="menu">
      <LandingPageSection title="Our Menu" hasDivider={false}>
        <div className={s.menuGallery}>
          {menuItems.map((item, index) => (
            <div key={index} className={s.menuItem}>
              <img className={s.menuImage} src={item.img} alt={item.name} />
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </LandingPageSection>
    </section>
  );
};

export default OurMenu;
