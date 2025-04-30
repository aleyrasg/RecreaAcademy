// src/components/Layout.jsx
import React from "react";
import Sidebar from "../Sidebar/sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <div className="content-container">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
