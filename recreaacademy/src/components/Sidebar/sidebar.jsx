import React from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import RecreaLogo from "../../assets/RecreaLogo.png";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={RecreaLogo} width={153.12} height={60.96} />{" "}
        {/* Cambia la ruta de la imagen según sea necesario */}
      </div>

      <nav className="menu">
        <ul>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              <span className="material-symbols-outlined">home</span>
              <Typography sx={{ m: 2 }}>Inicio</Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/congreso"
              className={isActive("/congreso") ? "active" : ""}
            >
              <span class="material-symbols-outlined">hub</span>
              <Typography sx={{ m: 2 }}>Congreso</Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/rutas-formativas"
              className={isActive("/rutas-formativas") ? "active" : ""}
            >
              <span className="material-symbols-outlined">route</span>
              <Typography sx={{ m: 2 }}>Rutas Formativas</Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/innovaciones"
              className={isActive("/innovaciones") ? "active" : ""}
            >
              <span class="material-symbols-outlined">rocket</span>
              <Typography sx={{ m: 2 }}>Innovaciones</Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/colaboraciones"
              className={isActive("/colaboraciones") ? "active" : ""}
            >
              <span class="material-symbols-outlined">groups</span>
              <Typography sx={{ m: 2 }}>Colaboraciones</Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/ranking"
              className={isActive("/ranking") ? "active" : ""}
            >
              <span class="material-symbols-outlined">star_rate</span>
              <Typography sx={{ m: 2 }}>Ranking</Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/eventos"
              className={isActive("/eventos") ? "active" : ""}
            >
              <span class="material-symbols-outlined">calendar_month</span>{" "}
              <Typography sx={{ m: 2 }}>Eventos</Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/comunidad"
              className={isActive("/comunidad") ? "active" : ""}
            >
              <span class="material-symbols-outlined">forum</span>
              <Typography sx={{ m: 2 }}>Comunidad Recrea</Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/mi-portafolio"
              className={isActive("/mi-portafolio") ? "active" : ""}
            >
              <span class="material-symbols-outlined">work</span>
              <Typography sx={{ m: 2 }}>Mi Portafolio</Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
