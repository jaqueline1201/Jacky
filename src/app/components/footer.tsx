"use client";
import React from "react";
import { Fragment, useState, useEffect } from "react";
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
      <Image src={logoImg} alt="logo" width={125} height={125} />
    </div>
  );
};
