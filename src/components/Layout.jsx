// src/components/Layout.jsx
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
