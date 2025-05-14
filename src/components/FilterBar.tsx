import React from "react";

export const FilterBar = () => {
  return (
    <div style={{ marginBottom: 20, display: "flex", gap: 10 }}>
      <select>
        <option>Platforms</option>
        <option>Windows</option>
        <option>PlayStation</option>
        <option>Xbox</option>
      </select>
      <select>
        <option>Order by: Relevance</option>
        <option>Score</option>
        <option>Title</option>
      </select>
    </div>
  );
};
