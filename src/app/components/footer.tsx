"use client";
import React from "react";
import { Fragment, useState, useEffect } from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/images/logo.png";

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className={styles.footsection}>
      <div className={styles.copyright}>
        <p>{`© ${year} All Rights Reserved.`}</p>
      </div>
      <div className={styles.imgfooter}>
        <Link href="../../">
          <Image src={logoImg} alt="logo" width={125} height={125} />
        </Link>
      </div>
    </div>
  );
};
