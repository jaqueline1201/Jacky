import React from "react";
import Image from "next/image";
import { Header } from "../components/header";
import tacologo from "../../../public/images/logo.png";
import styles from "./about.module.css";
import { Section } from "../components/section";

const page = () => {
  return (
    <div>
      <Header text="Conocenos" />
      <Section>
        <div className={styles.section1}>
          <div className={styles.text1}>
            <p className={styles.paragraph1}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              maxime tempora cupiditate. At ratione eligendi minus adipisci
            </p>
            <p className={styles.paragraph1}>
              necessitatibus quo quidem alias asperiores sunt! Ipsum iste
              delectus nisi amet expedita voluptatum, iusto impedit adipisci
              maiores rerum velit. Eius nihil magni error!
            </p>
          </div>
          <div className={styles.images}>
            <div className={styles.img1}>
              <Image src={tacologo} alt="image" />
            </div>
            <div className={styles.img1}>
              <Image src={tacologo} alt="image" />
            </div>
            <div className={styles.img1}>
              <Image src={tacologo} alt="image" />
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.text1}>
              <p>La estrella de nuestra cocina Doña Lety</p>
              <p>Siempre brindado los mejores sabores para nuestros clientes</p>
            </div>
            <div className={styles.imgage2}>
              <Image src={tacologo} alt="image" />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.images3}>
              <Image src={tacologo} alt="image" />
              <Image src={tacologo} alt="image" />
              <Image src={tacologo} alt="image" />
              <Image src={tacologo} alt="image" />
            </div>
            <div className={styles.lasttext}>
              <p>
                Desde nuestro inicio hemos buscado los ingredientes mas frescos
                y de la mejor calidad
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
