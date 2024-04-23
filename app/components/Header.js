import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
    <div className="bg-[#70afef] border-solid border-b-2 border-[#4295ea]">
      <div className="container mx-auto flex justify-between p-1">
        <div className="font-bold text-2xl">
          <h1>ONE</h1>
        </div>
        <div className="flex place-content-end">
          <ul className="flex flex-row gap-4 items-center">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href={"/dashboard"} className="hover:text-white">Dashboard</Link>
            </li>
            <li>
              <Link href={"/login"} className="hover:text-white">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
