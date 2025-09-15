// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/mainwebsite/Home";
import Contact from "./pages/mainwebsite/Contact";
import Services from "./pages/mainwebsite/Services";
import Login from "./Login";
import RequestDemo from "./Demo";
import Dashboard from "./pages/dashboard/Home";
import Layout from "./components/Layout";
import DashboardLayout from "./components/DashboardLayout";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main website layout with header/footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="demo" element={<RequestDemo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Dashboard layout without header/footer */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          {/* Add more dashboard subroutes here if needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
