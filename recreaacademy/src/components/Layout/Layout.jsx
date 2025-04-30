// src/components/Layout.jsx
import React from "react";
import Sidebar from "../Sidebar/sidebar"; 
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </>
  );
};

export default Layout;
