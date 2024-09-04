import styles from "./page.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/images/logo2.png";

export const Navbar = () => {
  return (
    <div className="navBar">
      <Link href="../../">
        <Image src={logoImg} alt="logo" width={100} height={100} />
      </Link>
      <div className="navBarR">
        <div className="elements">
          <ul>
            <li>
              <Link href="../about/">Conocenos</Link>
            </li>
            <li>
              <Link href="../menu/">Menú</Link>
            </li>
            <li>
              <Link href="../contact/">Contactanos</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
