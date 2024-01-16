import React from 'react';
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return home</Link>
    </div>
  );
};

export default NotFound;