"use client";
import React, {useState} from 'react';

import styles from "./links.module.css";
import NavLink from "@/components/navbar/links/navLink/navLink";
import Image from "next/image";
import {handleLogout} from "@/lib/actions";

const links = [
  { href: '/', label: 'Homepage' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

const Links =  ({ session }) => {
  const [open, setOpen] = useState(false);


  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => {
          return (
            <NavLink key={index} item={link} />
          );
        })}
        {session?.user ?
          ( // If session is active
            <>
              {session.user?.isAdmin && <NavLink item={{ href: '/admin', label: 'Admin' }} />}
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
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