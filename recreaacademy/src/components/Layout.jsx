// src/components/Layout.jsx
import React from "react";
import Sidebar from "./Sidebar/sidebar"; // Asegúrate de que la ruta sea correcta

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
