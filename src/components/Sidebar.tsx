import React from "react";

const categories = [
  "Action",
  "Indie",
  "Adventure",
  "RPG",
  "Strategy",
  "Shooter",
  "Casual",
  "Simulation",
  "Puzzle",
  "Arcade",
  "Platformer",
];

export const SideBar = () => {
  return (
    <div className="sidebar">
      {categories.map((cat) => (
        <div key={cat} style={{ marginBottom: 10 }}>
          {cat}
        </div>
      ))}
    </div>
  );
};
