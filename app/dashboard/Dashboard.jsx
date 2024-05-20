"use client";
import React from "react";
import SideNavbar from "@/app/components/SideNavbar";

const Dashboard = () => {
  let username = "Khaleel R Sheikh";
  return (
    <>
      <div className="flex">
        <SideNavbar />
        <div className="flex-grow p-4 h-[96vh]">
          <h1>Welcome {username}</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
