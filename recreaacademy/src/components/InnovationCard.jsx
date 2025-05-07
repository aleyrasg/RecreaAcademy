import React from 'react';

const InnovationCard = ({ color, title, date, icon }) => {
  return (
    <div className={`p-4 rounded-md text-white ${color}`}>
      <div className="text-xl mb-2">{icon}</div>
      <p className="font-bold">{title}</p>
      <p className="text-sm mt-2">{date}</p>
    </div>
  );
};

export default InnovationCard;