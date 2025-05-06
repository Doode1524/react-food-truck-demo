import { footerContent } from "../../configs/footerContent";
import s from "./Footer.module.css";

const Footer = () => {
  const { description, phone, email, facebook, copyright } = footerContent;
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <h1 className={s.footerTitle}>Contact Us</h1>
        <p className={s.footerText}>{description}</p>

        <div className={s.contactInfo}>
          <div className={s.contactItem}>
            <span className={s.contactLabel}>Phone:</span> {phone}
          </div>
          <div className={s.contactItem}>
            <span className={s.contactLabel}>Email:</span> {email}
          </div>
          <div className={s.contactItem}>
            <span className={s.contactLabel}>Facebook:</span> {facebook}
          </div>
        </div>

        <div className={s.copyright}>
          © {new Date().getFullYear()} {copyright}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
