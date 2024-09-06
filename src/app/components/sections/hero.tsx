import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";
import tacoImg from "../../../../public/images/taco1.png";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.comment} ${styles.darkcmnt}`}>
        13 guisador a escoger
      </div>
      <div className={`${styles.comment} ${styles.darkcmnt}`}>
        Los mejores tacos de colima
      </div>
      <div className={`${styles.comment} ${styles.darkcmnt}`}>
        Taco que no cierra no es taco
      </div>
      <div className={`${styles.comment} ${styles.darkcmnt}`}>
        Amo esos tacos no puedo comer solo uno
      </div>
      <div className={`${styles.comment} ${styles.darkcmnt}`}>
        {" "}
        Y lo mejor... las salsas uff!
      </div>
      <div className={styles.images}>
        <Image
          src={tacoImg}
          alt="Taco image"
          width={1400}
          height={1000}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className={`${styles.comment} ${styles.lightcmnt}`}>
        Verduras frescas del día
      </div>
      <div className={`${styles.comment} ${styles.lightcmnt}`}>
        Las tortillas del día
      </div>
      <div className={`${styles.comment} ${styles.lightcmnt}`}>
        Con unas bebidas bien frias
      </div>
    </div>
  );
};
