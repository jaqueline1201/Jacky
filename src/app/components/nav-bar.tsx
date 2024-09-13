import styles from "./navbar.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/images/logo.png";

export const Navbar = () => {
  return (
    <div className={styles.content}>
    <div className={styles.navBar}>
      <Link href="../../">
        <Image src={logoImg} alt="logo" width={100} height={100} />
      </Link>
      <div className={styles.navBarR}>
        <div className={styles.elements}>
          <ul>
            <li className={styles.optionsN}>
              <Link className={styles.decoration} href="../about/">Conocenos</Link>
            </li>
            <li className={styles.optionsN}>
              <Link className={styles.decoration} href="../menu/">Menú</Link>
            </li>
            <li className={styles.optionsN}>
              <Link className={styles.decoration} href="../contact/">Contactanos</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};
