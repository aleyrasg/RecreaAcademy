import React from "react";
import UserCard from "./UserCard";

const users = [
  { id: 1, color: "#FFB127" },
  { id: 2, color: "#FC7D04" },
  { id: 3, color: "#FC083B" },
  { id: 4, color: "#FFB127" },
  { id: 5, color: "#FC7D04" },
  { id: 6, color: "#FC083B" },
];

function UserCarousel() {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {[...users, ...users].map((user, index) => (
          <UserCard key={index} color={user.color} />
        ))}
      </div>
    </div>
  );
}

export default UserCarousel;
