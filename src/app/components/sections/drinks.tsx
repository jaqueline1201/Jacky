import React from "react";
import Image from "next/image";
import styles from "./drinks.module.css";
import drinkImg from "../../../../public/images/bebida.png";
import cocaImg from "../../../../public/images/coca.png";
import jamaicaImg from "../../../../public/images/jamaica.jpg";
import lechuguilla from "../../../../public/images/el grullense.jpg";
import { Cards } from "./cards";

export const Drinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <Image
          src={drinkImg}
          alt="bebida"
          width={1400}
          height={1000}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.section}>
        <div className={styles.textcontainer}>
          <h1 className={styles.titleFont}>Bebidas</h1>
          <h3 className={styles.sentence}>
            Agua fresca bien helada y refresco para acompañar
          </h3>
        </div>
        <div className={styles.cardcontainer}>
          <Cards image={cocaImg} text="lorem" color="light" />
          <Cards image={jamaicaImg} text="lorem" color="light" />
          <Cards image={lechuguilla} text="lorem" color="light" />
        </div>
      </div>
    </div>
  );
};
