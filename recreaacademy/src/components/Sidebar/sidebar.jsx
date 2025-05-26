import React from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
//import UserAvatar from "../Layout/UserAvatar";
import {
  Box,
  Tooltip,
  IconButton,
  Text,
} from '@chakra-ui/react';

import RecreaLogo from "../../assets/RecreaLogo.png";


const Sidebar = () => {
   const location = useLocation();
   //console.log('aqui: ', location.pathname)
   
   const isActive = (path) => { 
    //console.log('/RecreaAcademy'+path)
    location.pathname === '/RecreaAcademy'+path;
    //console.log(location.pathname === '/RecreaAcademy'+path)
   }

   if(1===2)
    return (
      <Box sx={{ flexGrow: 1 }} marginBottom='10px' >
        <Box position="static" color='white'>
          <Tooltip>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              
            </IconButton>
            <Text variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={RecreaLogo} width={153.12} height={60.96} />{" "}
            </Text>
            
          </Tooltip>
        </Box>
      </Box>
    );

  return (
    <>
      <Box>
        <div className="logo">
          <img src={RecreaLogo} width={153.12} height={60.96} />{" "}
          {/* Cambia la ruta de la imagen según sea necesario */}
        </div>

        <nav className="menu">
          <ul>
            <li>
              <Link to="/RecreaAcademy/" className={isActive("/") ? "active" : ""}>
                <span className="material-symbols-outlined">home</span>
                <Text sx={{ m: 2 }}>Inicio</Text>
              </Link>
            </li>
            <li>
              <Link
                to="/RecreaAcademy/congreso"
                className={isActive("/congreso") ? "active" : ""}
              >
                <span className="material-symbols-outlined">hub</span>
                <Text sx={{ m: 2 }}>Congreso</Text>
              </Link>
            </li>
            <li>
              <Link
                to="/RecreaAcademy/rutas-formativas"
                className={isActive("/rutas-formativas") ? "active" : ""}
              >
                <span className="material-symbols-outlined">route</span>
                <Text sx={{ m: 2 }}>Rutas Formativas</Text>
              </Link>
            </li>
            <li>
              <Link
                to="/RecreaAcademy/innovaciones"
                className={isActive("/innovaciones") ? "active" : ""}
              >
                <span className="material-symbols-outlined">rocket</span>
                <Text sx={{ m: 2 }}>Innovaciones</Text>
              </Link>
            </li>
            <li>
              <Link
                to="/RecreaAcademy/colaboraciones"
                className={isActive("/colaboraciones") ? "active" : ""}
              >
                <span className="material-symbols-outlined">groups</span>
                <Text sx={{ m: 2 }}>Colaboraciones</Text>
              </Link>
            </li>
            <li>
              <Link
                to="/RecreaAcademy/ranking"
                className={isActive("/ranking") ? "active" : ""}
              >
                <span className="material-symbols-outlined">star_rate</span>
                <Text sx={{ m: 2 }}>Ranking</Text>
              </Link>
            </li>
            <li>
              <Link
                to="/RecreaAcademy/eventos"
                className={isActive("/eventos") ? "active" : ""}
              >
                <span className="material-symbols-outlined">calendar_month</span>{" "}
                <Text sx={{ m: 2 }}>Eventos</Text>
              </Link>
            </li>
            <li>
              <Link
                to="/RecreaAcademy/foro"
                className={isActive("/comunidad") ? "active" : ""}
              >
                <span className="material-symbols-outlined">forum</span>
                <Text sx={{ m: 2 }}>Comunidad Recrea</Text>
              </Link>
            </li>
            <li>
              <Link
                to="/RecreaAcademy/mi-portafolio"
                className={isActive("/mi-portafolio") ? "active" : ""}
              >
                <span className="material-symbols-outlined">work</span>
                <Text sx={{ m: 2 }}>Mi Portafolio</Text>
              </Link>
            </li>
          </ul>
        </nav>
      </Box>
      
    </>
  );
};

export default Sidebar;
