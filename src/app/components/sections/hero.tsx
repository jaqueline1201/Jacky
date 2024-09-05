import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";
import tacoImg from "../../../../public/images/taco1.png";

export const Hero = () => {
  return (
    <div>
      <div className={styles.comment}>13 guisador a escoger</div>
      <div className={styles.comment}>Los mejores tacos de colima</div>
      <div className={styles.comment}>Taco que no cierra no es taco</div>
      <div className={styles.comment}>
        Amo esos tacos no puedo comer solo uno
      </div>
      <div className={styles.comment}> Y lo mejor... las salsas uff!</div>
      <Image src={tacoImg} alt="Taco image" width={500} height={500} className={styles.images}/>
      <div className={styles.commentw}>Verduras frescas del día</div>
      <div className={styles.commentw}>Las tortillas del día</div>
      <div className={styles.commentw}>Con unas bebidas bien frias</div>
    </div>
  );
};
