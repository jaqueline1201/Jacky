import React from "react";
import Image from "next/image";
import beansImg from "../../../../public/images/beans.jpg";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <div>
      
        
        <div className="guisados-text">
          <div className="guisados">
            <h1>13 Guisados</h1>
          </div>
          <div className="text2">
            <h2>Guisados cocinados al día con la mejor calidad.</h2>
          </div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.descriptionandImg}>
            <div className={styles.productImage}>
              <Image src={beansImg} alt="guisado" width={200} height={200} />
            </div>
            <div className={styles.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
          <div className={styles.descriptionandImg}>
            <div className={styles.productImage}>
              <Image src={beansImg} alt="guisado" width={200} height={200} />
            </div>
            <div className={styles.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
          <div className={styles.descriptionandImg}>
            <div className={styles.productImage}>
              <Image src={beansImg} alt="guisado" width={200} height={200} />
            </div>
            <div className={styles.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
      </div>
    </div>
  );
};
