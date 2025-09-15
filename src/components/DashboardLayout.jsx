import React from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      {/* Dashboard-specific layout, e.g. sidebar, etc. */}
      <Outlet />
    </div>
  );
}