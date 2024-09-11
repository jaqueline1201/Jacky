import React from "react";
import styles from "./menu.module.css";
// import { Menu } from "./menu-section";
import { Header } from "../components/header";
import { Cards } from "../components/sections/cards";
import { Section } from "../components/section";
import meatimg from "../../../public/images/menupage/meat.jpg";

const page = () => {
  return (
    <div>
      <Header text="Menu" />
      <Section>
        <h2 className={styles.subtitle}>Guisados</h2>
        <div className={styles.container1}>
          <Cards image={meatimg} color="light" text="Adobada" />
          <Cards image={meatimg} color="light" text="Barbacoa" />
          <Cards image={meatimg} color="light" text="Cabeza" />
          <Cards image={meatimg} color="light" text="Carne" />
          <Cards image={meatimg} color="light" text="Chicharron" />
          <Cards image={meatimg} color="light" text="Cochinita" />
          <Cards image={meatimg} color="light" text="Costilla" />
          <Cards image={meatimg} color="light" text="Frijol" />
          <Cards image={meatimg} color="light" text="Higado" />
          <Cards image={meatimg} color="light" text="Lengua" />
          <Cards image={meatimg} color="light" text="Machaca" />
          <Cards image={meatimg} color="light" text="Papa" />
          <Cards image={meatimg} color="light" text="Pastor" />
          <Cards image={meatimg} color="light" text="Suadero" />
        </div>
        <h2 className={styles.subtitle}>Salsas</h2>
        <div className={styles.container2}>
          <Cards image={meatimg} color="light" text="Salsa verde" />
          <Cards image={meatimg} color="light" text="Salsa verde" />
          <Cards image={meatimg} color="light" text="Salsa verde" />
          <Cards image={meatimg} color="light" text="Salsa verde" />
          <Cards image={meatimg} color="light" text="Salsa verde" />
        </div>
        <h2 className={styles.subtitle}>Bebidas</h2>
        <div className={styles.container3}>
          <Cards image={meatimg} color="light" text="Salsa verde" />
          <Cards image={meatimg} color="light" text="Salsa verde" />
          <Cards image={meatimg} color="light" text="Salsa verde" />
        </div>
      </Section>
    </div>
  );
};

export default page;
