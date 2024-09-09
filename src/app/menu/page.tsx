import React from "react";
import styles from "./menu.module.css";
import { Menu } from "./menu-section";
import { Header } from "../components/header";

const page = () => {
  return (
    <div>
      <Header text="Menu"/>
      <div className={styles.sections}>
        <h2>Guisados</h2>
        <Menu>
          <ul className="flavors">
            <li>Adobada</li>
            <li>Barbacoa</li>
            <li>Cabeza</li>
            <li>Carne</li>
            <li>Chicharron</li>
            <li>Cochinita</li>
            <li>Costilla</li>
            <li>Frijol</li>
            <li>Higado</li>
            <li>Lengua</li>
            <li>Machaca</li>
            <li>Papa</li>
            <li>Pastor</li>
            <li>Suadero</li>
          </ul>
        </Menu>
        <h2>Salsas</h2>
        <Menu>
          <ul>
            <li>Salva verde</li>
            <li>Salsa Roja</li>
            <li>Con aguacate</li>
            <li>Habanero</li>
            <li>Pasilla</li>
          </ul>
        </Menu>
        <h2>Bebidas</h2>
        <Menu>
          <ul>
            <li>Agua Fresca</li>
            <li>Refrescos de Coca Cola</li>
            <li>Lechuguillas</li>
          </ul>
        </Menu>
      </div>
    </div>
  );
};

export default page;
