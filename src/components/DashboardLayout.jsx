import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";


export default function DashboardLayout() {
  return (
    <>
      <DashboardHeader />
        <div>
        <Outlet />
        </div>
    </>

  );
}