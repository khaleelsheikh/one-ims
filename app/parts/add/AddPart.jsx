"use client"
import SideNavbar from "@/app/components/SideNavbar";
import React from "react";

const AddPart = () => {
  return (
    <>
      <div className="flex">
          <SideNavbar />
          <div className="flex-grow p-4 h-[96vh]">This is Add part page</div>
        </div>
    </>
  );
};

export default AddPart;
