import React, { Children } from "react";
import styles from "./cards.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";

type CardsProp = {
  image: StaticImageData;
  text: string;
  color: "dark" | "light";
};

export const Cards = (props: CardsProp) => {
  let colorclass = "";

  if (props.color == "dark") {
    colorclass = "darkcontainer";
  } else {
    colorclass = "lightcontainer";
  }

  return (
    <div className={`${styles.cards} ${colorclass}`}>
      <Image className={styles.image} src={props.image} alt=""></Image>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};
