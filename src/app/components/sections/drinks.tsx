import React from "react";
import Image from "next/image";
import styles from "./drinks.module.css";
import style from "../../page.module.css";
import drinkImg from "../../../../public/images/bebida.png";
import cocaImg from "../../../../public/images/coca.png";
import jamaicaImg from "../../../../public/images/jamaica.jpg";
import lechuguilla from "../../../../public/images/el grullense.jpg";

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
        <div className={styles.containerSection}></div>
        <h1 className={styles.titleFont}>Bebidas</h1>
        <h3>Agua fresca bien helada y refresco para acompañar</h3>
        <div className={style.productContainer}>
          <div className={style.descriptionandImg}>
            <div className={style.productImage}>
              <Image src={jamaicaImg} alt="jamaica" width={200} height={200} />
            </div>
            <div className={style.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
          <div className={style.descriptionandImg}>
            <div className={style.productImage}>
              <Image src={cocaImg} alt="cocacola" width={200} height={200} />
            </div>
            <div className={style.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
          <div className={style.descriptionandImg}>
            <div className={style.productImage}>
              <Image
                src={lechuguilla}
                alt="lechuguilla"
                width={200}
                height={200}
              />
            </div>
            <div className={style.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
