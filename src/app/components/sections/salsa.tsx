import React from "react";
import Image from "next/image";
import salsaImg from "../../../../public/images/salsa.jpg";
import chileImg from "../../../../public/images/chiles.png";
import styles from "./salsa.module.css";
import { Cards } from "./cards";

export const Salsa = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <Image
          src={chileImg}
          alt="Chile"
          width={1400}
          height={1000}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.ndpart}>
        <div className={styles.section}>
          <h1 className={styles.titleFont}>5 Salsas</h1>
          <h3 className={styles.sentece}>
            Lo que se hace bien, se siente y se disfruta
          </h3>
        </div>
      </div>
      <div className={styles.cardcontainer}>
        <Cards image={salsaImg} text="lorem" color="dark" />
        <Cards image={salsaImg} text="lorem" color="dark" />
        <Cards image={salsaImg} text="lorem" color="dark" />
      </div>
    </div>
  );
};
