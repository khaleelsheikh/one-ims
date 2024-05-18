"use client";
import React from "react";
import SideNavbar from "@/app/components/SideNavbar";
import LogoutButton from "../components/LogoutButton";

const Dashboard = () => {
  let username = "Khaleel R Sheikh";
  return (
    <>
      <div className="flex">
        <SideNavbar />
        <div className="flex-grow p-4 h-[96vh]">
          <h1>Welcome {username}</h1>
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
