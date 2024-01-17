"use client";

import React from 'react';
import Link from "next/link";
import styles from "./navLink.module.css";
import {usePathname} from "next/navigation";

const NavLink = ({item}) => {
  const pathName = usePathname();

  console.log( pathName,item.href);

  return (
    <div>
      <Link
        href={item.href}
        className={`${styles.container} ${pathName === item.href && styles.active}`}
      >
        {item.label}
      </Link>
    </div>
  );
};

export default NavLink;
