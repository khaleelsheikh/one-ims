import Link from "next/link";
import React from "react";

const SideNavbar = () => {
  return (
    <>
      <div className="h-[96vh] w-40 border border-r-4">
        <ul className="py-2">
          <li className="px-4 py-2 ">
            <Link
              href={"/dashboard"}
              className="hover:text-rose-600 font-semibold"
            >
              Dashboard
            </Link>
          </li>

          <li className="px-4 ">
            <Link className="hover:text-rose-600 font-semibold" href={"/parts"}>
              Parts
            </Link>
            <ul className="px-2">
              <li>
                <Link
                  href={"/parts/add"}
                  className="hover:text-rose-600 text-sm"
                >
                  Add Part
                </Link>
              </li>
              <li>
                <Link
                  href={"/parts/edit"}
                  className="hover:text-rose-600 text-sm"
                >
                  Edit Part
                </Link>
              </li>
            </ul>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </>
  );
};

export default SideNavbar;
