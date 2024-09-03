import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navBar">
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
