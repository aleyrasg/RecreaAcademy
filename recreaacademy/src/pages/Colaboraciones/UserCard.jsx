import React from "react";

function UserCard({ color }) {
  return (
    <div className="user-card" style={{ backgroundColor: color }}>
      <div className="user-icon">👤</div>
      <div className="user-name">Usuario</div>
      <button className="follow-btn" style={{ color }}>
        Seguir
      </button>
    </div>
  );
}

export default UserCard;
