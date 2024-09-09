import React from "react";
import styles from "../components/header.module.css";

type HeaderProps = {
  text: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.text}</h1>
    </div>
  );
};
