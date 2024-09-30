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
              Nuestra historia empieza hace ya 10 años, cuando la cochera abrio
              sus puertas por primera vez.
            </p>
            <p className={styles.paragraph1}>
              Nuestro enfoque siempre a sido ofrecer la mejor calidad al mejor
              precio.
            </p>
          </div>
          <div className={styles.imagescontainer}>
            <div className={styles.img1}>
              <Image src={tacologo} alt="image" className={styles.photo1} />
            </div>
            <div className={styles.img1}>
              <Image src={tacologo} alt="image" className={styles.photo1} />
            </div>
            <div className={styles.img1}>
              <Image src={tacologo} alt="image" className={styles.photo1} />
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.text1}>
              <p>La estrella de nuestra cocina Doña Lety</p>
              <p>Siempre brindado los mejores sabores para nuestros clientes</p>
            </div>
            <div className={styles.imgage2}>
              <Image src={tacologo} alt="image" className={styles.photo2} />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.images3}>
              <Image src={tacologo} alt="image" className={styles.photo3} />
              <Image src={tacologo} alt="image" className={styles.photo3} />
              <Image src={tacologo} alt="image" className={styles.photo3} />
              <Image src={tacologo} alt="image" className={styles.photo3} />
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
