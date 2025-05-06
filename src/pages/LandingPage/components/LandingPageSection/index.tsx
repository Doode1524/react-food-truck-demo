import React from "react";
import s from "./LandingPageSection.module.css";

interface IProps {
  title: string;
  children: React.ReactNode;
}

const LandingPageSection = ({ children, title }: IProps) => {
  return (
    <div className={s.sectionWrapper}>
      <h1 className={s.sectionTitle}>{title}</h1>
      {children}
    </div>
  );
};

export default LandingPageSection;
