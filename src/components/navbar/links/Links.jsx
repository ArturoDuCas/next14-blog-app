import React from 'react';

import styles from "./links.module.css";
import NavLink from "@/components/navbar/links/navLink/navLink";

const Links = () => {

  const links = [
    { href: '/', label: 'Homepage' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  // TODO: Replace these temporary variables with real ones
  const session = true;
  const isAdmin = true;

  return (
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
  );
};

export default Links;