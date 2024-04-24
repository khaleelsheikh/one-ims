import Link from "next/link";
import React from "react";

// bg-[#70afef] border-[#4295ea]

const Header = () => {
  return (
    <>
      <div className="border-solid border-b-2 ">
        <div className="container mx-auto flex justify-between">
          <div className="font-bold text-2xl">
            <h1>ONE</h1>
          </div>
          <div className="flex place-content-end">
            <ul className="flex flex-row gap-4 items-center">
              <li>
                <Link href={"/login"} className="hover:text-rose-600">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
