import React from "react";
import Image from "next/image";
import beansImg from "../../../../public/images/beans.jpg";
import styles from "./menu.module.css";
import { Cards } from "./cards";

export const Menu = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.guisadostexts}>
          <div>
            <h1 className={styles.numbert}>13</h1>
            <h2 className={styles.titleFont}>Guisados</h2>
          </div>
          <div className={styles.ndsection}>
            <h2 className={styles.ndtext}>
              Guisados cocinados al día con la mejor calidad.
            </h2>
          </div>
        </div>
        <Cards image={beansImg} text="Lorem" color="light" />
        <Cards image={beansImg} text="Lorem" color="light" />
        <Cards image={beansImg} text="Lorem" color="light" />
      </div>
    </div>
  );
};
