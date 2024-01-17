"use client";
import React, {useState} from 'react';

import styles from "./links.module.css";
import NavLink from "@/components/navbar/links/navLink/navLink";

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

      <button
        className={styles.menuButton}
        onClick={() => setOpen(prev => !prev)}
      >
        Menu
      </button>
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