import { navLinks, brandName } from "../../configs/header";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <div className={s.brandContainer}>
        <h1 className={s.brandName}>{brandName}</h1>
      </div>
      <nav className={s.navigation}>
        <ul className={s.navList}>
          {navLinks.map((link, index) => (
            <li key={index} className={s.navItem}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
