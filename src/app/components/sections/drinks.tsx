import React from "react";
import Image from "next/image";
import styles from "./drinks.module.css";
import drinkImg from "../../../../public/images/bebida.png";
import cocaImg from "../../../../public/images/coca.png";
import jamaicaImg from "../../../../public/images/jamaica.jpg";
import lechuguilla from "../../../../public/images/el grullense.jpg";

 export const drinks = () => {
  return (
    <div>
      <Image src={drinkImg} alt="bebida" width={200} height={200} />
      <div className={styles.section}>
        <div className={styles.containerSection}></div>
        <h1>Bebidas</h1>
        <h3>Agua fresca bien helada y refresco para acompañar</h3>
        <div className={styles.productContainer}>
          <div className={styles.descriptionandImg}>
            <div className={styles.productImage}>
              <Image src={jamaicaImg} alt="jamaica" width={200} height={200} />
            </div>
            <div className={styles.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
          <div className={styles.descriptionandImg}>
            <div className={styles.productImage}>
              <Image src={cocaImg} alt="cocacola" width={200} height={200} />
            </div>
            <div className={styles.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
          <div className={styles.descriptionandImg}>
            <div className={styles.productImage}>
              <Image
                src={lechuguilla}
                alt="lechuguilla"
                width={200}
                height={200}
              />
            </div>
            <div className={styles.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


