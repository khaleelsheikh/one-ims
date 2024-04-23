import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div>One</div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
