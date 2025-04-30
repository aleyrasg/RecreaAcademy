// src/components/Layout.jsx
import React from "react";
import Sidebar from "../Sidebar/sidebar"; 
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main style={{ padding: "20px", marginLeft: "250px" }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
