"use client";
import React from "react";
import SideNavbar from "@/app/components/SideNavbar";



const Dashboard = () => {
  return (
    <>
       <div className="flex">
          <SideNavbar/>
          <div className="flex-grow p-4 h-[96vh]">This is DashBoard</div>
        </div>
    </>
  );
};

export default Dashboard;
