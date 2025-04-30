import React from "react";
import {
  FaHome,
  FaRoute,          // Para Rutas Formativas
  FaLightbulb,        // Para Innovaciones
  FaUsers,            // Para Colaboraciones
  FaStar,             // Para Ranking
  FaCalendarAlt,      // Para Eventos
  FaBriefcase         // Para Mi Portafolio
} from "react-icons/fa";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>
          <span className="recrea">Recrea</span>{" "}
          <span className="academy">Academy</span>
          <span className="year">2025</span>
        </h2>
      </div>

      <nav className="menu">
        <ul>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              <FaHome /> <Typography sx={{ m: 2 }}>Inicio</Typography>
            </Link>
          </li>
          <li>
            <Link to="/rutas-formativas" className={isActive("/rutas-formativas") ? "active" : ""}>
              <FaRoute /> <Typography sx={{ m: 2 }}>Rutas Formativas</Typography>
            </Link>
          </li>
          <li>
            <Link to="/innovaciones" className={isActive("/innovaciones") ? "active" : ""}>
              <FaLightbulb /> <Typography sx={{ m: 2 }}>Innovaciones</Typography>
            </Link>
          </li>
          <li>
            <Link to="/colaboraciones" className={isActive("/colaboraciones") ? "active" : ""}>
              <FaUsers /> <Typography sx={{ m: 2 }}>Colaboraciones</Typography>
            </Link>
          </li>
          <li>
            <Link to="/ranking" className={isActive("/ranking") ? "active" : ""}>
              <FaStar /> <Typography sx={{ m: 2 }}>Ranking</Typography>
            </Link>
          </li>
          <li>
            <Link to="/eventos" className={isActive("/eventos") ? "active" : ""}>
              <FaCalendarAlt /> <Typography sx={{ m: 2 }}>Eventos</Typography>
            </Link>
          </li>
          <li>
            <Link to="/mi-portafolio" className={isActive("/mi-portafolio") ? "active" : ""}>
              <FaBriefcase /> <Typography sx={{ m: 2 }}>Mi Portafolio</Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
