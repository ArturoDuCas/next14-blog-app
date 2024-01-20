"use client";
import React, {useState} from 'react';

import styles from "./links.module.css";
import NavLink from "@/components/navbar/links/navLink/navLink";
import Image from "next/image";

const links = [
  { href: '/', label: 'Homepage' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // TODO: Replace these temporary variables with real ones
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => {
          return (
            <NavLink key={index} item={link} />
          );
        })}
        {session ?
          ( // If session is active
            <>
              {isAdmin && <NavLink item={{ href: '/admin', label: 'Admin' }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) :
          (
            <NavLink item={{ href: '/login', label: 'Login' }} />
          )
        }
      </div>

      <Image
        className={styles.menuButton}
        src="/menu.png" alt="menu"
        width={25} height={25}
        onClick={() => setOpen(prev => !prev)}
      />
      
      { open &&
        <div className={styles.mobileLinks}>
          {links.map((link, index) => {
             return (
               <NavLink key={index} item={link} />
             );
          })}
        </div>
      }
    </div>
  );
};

export default Links;