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
    <div className={`${styles.descriptionandImg} ${colorclass}`}>
      <Image src={props.image} alt=""></Image>
      <div>{props.text}</div>
    </div>
  );
};
