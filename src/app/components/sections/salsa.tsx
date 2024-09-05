import React from "react";
import Image from "next/image";
import salsaImg from "../../../../public/images/salsa.jpg";
import chileImg from "../../../../public/images/chiles.png";
import styles from "./salsa.module.css";

export const salsa = () => {
  return (
    <div>
      <Image src={chileImg} alt="Chile" width={100} height={100} />
      <div className={styles.section}>
        <div className={styles.containerSection}></div>
        <h1>5 Salsas</h1>
        <h3>Lo que se hace bien, se siente y se disfruta</h3>
        <div className={styles.productContainer}>
          <div className={styles.descriptionandImgB}>
            <div className={styles.productImage}>
              <Image src={salsaImg} alt="salsa" width={200} height={200} />
            </div>
            <div className={styles.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
          <div className={styles.descriptionandImgB}>
            <div className={styles.productImage}>
              <Image src={salsaImg} alt="salsa" width={200} height={200} />
            </div>
            <div className={styles.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
          <div className={styles.descriptionandImgB}>
            <div className={styles.productImage}>
              <Image src={salsaImg} alt="salsa" width={200} height={200} />
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
