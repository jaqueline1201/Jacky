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
      <ul>
        <li>
          <Link href="../about/">About</Link>
        </li>
        <li>
          <Link href="../menu/">Menu</Link>
        </li>
        <li>
          <Link href="../contact/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
