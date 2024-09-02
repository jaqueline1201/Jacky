"use client";
import React from "react";
import { Fragment, useState, useEffect } from "react";

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      <p>{`© ${year} All Rights Reserved.`}</p>
    </div>
  );
};
