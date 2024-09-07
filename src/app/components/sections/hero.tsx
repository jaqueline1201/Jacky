import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";
import tacoImg from "../../../../public/images/taco1.png";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainset}>
        <div
          className={`${styles.comment} ${styles.darkcmnt} ${styles.circle}`}
        >
          13 guisados a escoger
        </div>
        <div
          className={`${styles.comment} ${styles.darkcmnt} ${styles.circle}`}
        >
          Los mejores tacos de colima
        </div>
        <div
          className={`${styles.comment} ${styles.darkcmnt} ${styles.circle}`}
        >
          Taco que no cierra no es taco
        </div>
        <div
          className={`${styles.comment} ${styles.darkcmnt} ${styles.circle}`}
        >
          Amo esos tacos no puedo comer solo uno
        </div>
        <div
          className={`${styles.comment} ${styles.darkcmnt} ${styles.circle}`}
        >
          Y lo mejor... las salsas uff!
        </div>

        <Image
          className={styles.images}
          src={tacoImg}
          alt="Taco image"
          width={1400}
          height={1000}
          sizes="100vw"
        />

        <div
          className={`${styles.comment} ${styles.lightcmnt} ${styles.circle2}`}
        >
          Verduras frescas del día
        </div>
        <div
          className={`${styles.comment} ${styles.lightcmnt} ${styles.circle2}`}
        >
          Las tortillas del día
        </div>
        <div
          className={`${styles.comment} ${styles.lightcmnt} ${styles.circle2}`}
        >
          Con unas bebidas bien frias
        </div>
      </div>
    </div>
  );
};
