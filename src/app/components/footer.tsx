"use client";
import React from "react";
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/images/logo2.png";

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      <p>{`© ${year} All Rights Reserved.`}</p>
      <Link href="../../">
        <Image src={logoImg} alt="logo" width={125} height={125} />
      </Link>
    </div>
  );
};
