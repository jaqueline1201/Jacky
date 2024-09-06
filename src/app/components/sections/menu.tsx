import React from "react";
import Image from "next/image";
import beansImg from "../../../../public/images/beans.jpg";
import styles from "./menu.module.css";
import style from "../../page.module.css";

export const Menu = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className="guisados-text">
          <div className="guisados">
            <h1 className={styles.numbert}>13</h1>
            <h2>Guisados</h2>
          </div>
          <div className="text2">
            <h2>Guisados cocinados al día con la mejor calidad.</h2>
          </div>
        </div>
        <div className={style.productContainer}>
          <div className={style.descriptionandImg}>
            <div className={style.productImage}>
              <Image src={beansImg} alt="guisado" width={200} height={200} />
            </div>
            <div className={style.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
          <div className={style.descriptionandImg}>
            <div className={style.productImage}>
              <Image src={beansImg} alt="guisado" width={200} height={200} />
            </div>
            <div className={style.productText}>
              <h3>Photo description</h3>
            </div>
          </div>
          <div className={style.descriptionandImg}>
            <div className={style.productImage}>
              <Image src={beansImg} alt="guisado" width={200} height={200} />
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
