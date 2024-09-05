import React from "react";
import styles from "./contact.module.css";
import { Alegreya } from "next/font/google";

const page = () => {
  return (
    <div>
      <div className={styles.sections}>
        <h1 className={styles.title}>Contacto</h1>
      </div>
      <div className={styles.sections}>
        <form className={styles.container}>
          <div className={styles.block}>
            <label htmlFor="frm-name">Nombre</label>
            <input id="frm-name" type="text" name="name" required />
          </div>
          <div className={styles.block}>
            <label htmlFor="frm-phone">Teléfono</label>
            <input id="frm-phone" type="text" name="phone" required />
          </div>
          <div className={styles.block}>
            <label htmlFor="frm-email">Correo electronico</label>
            <input id="frm-email" type="text" name="email" required />
          </div>
          <div className={styles.block}>
            <label htmlFor="frm-messsage">Mensaje</label>
            <input id="frm-message" type="text" name="message" required />
          </div>
          <div className={styles.btn}>
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
