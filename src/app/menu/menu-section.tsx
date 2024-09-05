import React from "react";
import styles from "./menu.module.css";

type MenuProps = {
  children: React.ReactNode;
};

export const Menu = (props: MenuProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
