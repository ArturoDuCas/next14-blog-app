import React from 'react';
import Link from "next/link";

const Links = () => {
  const links = [
    { href: '/', label: 'Homepage' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.href}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Links;