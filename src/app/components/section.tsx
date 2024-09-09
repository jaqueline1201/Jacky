import React from "react";
import styles from "./sections.module.css";

type SectionProps = {
  children: React.ReactNode;
};

export const Section = (props: SectionProps) => {
  
  return (
    <div className={styles.section}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
