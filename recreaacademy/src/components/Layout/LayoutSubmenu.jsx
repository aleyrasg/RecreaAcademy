// src/components/Layout.jsx
import React from "react";
import Sidebar from "../Sidebar/sidebar";
import "./LayoutSubmenu.css";

const LayoutSubmenu = ({ children }) => {
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

export default LayoutSubmenu;