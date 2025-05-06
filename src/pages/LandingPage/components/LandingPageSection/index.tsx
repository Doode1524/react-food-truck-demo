import React from "react";
import s from "./LandingPageSection.module.css";

interface IProps {
  title: string;
  children: React.ReactNode;
  hasDivider?: boolean;
}

const LandingPageSection = ({ children, title, hasDivider = true }: IProps) => {
  return (
    <div className={s.sectionWrapper}>
      <h1 className={s.sectionTitle}>{title}</h1>
      {children}
      {hasDivider && <div className={s.divider} />}
    </div>
  );
};

export default LandingPageSection;
