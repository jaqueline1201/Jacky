import React from "react";
import Image from "next/image";
import salsaImg from "../../../../public/images/salsa.jpg";
import chileImg from "../../../../public/images/chiles.png";
import styles from "./salsa.module.css";
import style from "../../page.module.css";

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
          <div className={style.containerSection}></div>
          <h1>5 Salsas</h1>
          <h3>Lo que se hace bien, se siente y se disfruta</h3>
          <div className={style.productContainer}>
            <div className={style.descriptionandImgB}>
              <div className={style.productImage}>
                <Image src={salsaImg} alt="salsa" width={200} height={200} />
              </div>
              <div className={style.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
            <div className={style.descriptionandImgB}>
              <div className={style.productImage}>
                <Image src={salsaImg} alt="salsa" width={200} height={200} />
              </div>
              <div className={style.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
            <div className={style.descriptionandImgB}>
              <div className={style.productImage}>
                <Image src={salsaImg} alt="salsa" width={200} height={200} />
              </div>
              <div className={style.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
