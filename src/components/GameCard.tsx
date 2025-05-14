import type { Game } from "../data/games";
import React from "react";
interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <div
      className="game-card"
      style={{
        backgroundColor: "#1a1a1a",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "auto", // تغییر height به auto برای ریسپانسیو بودن
        width: "100%", // عرض به صورت نسبی
        maxWidth: "350px", // حداکثر عرض برای کارت
        margin: "20px", // فاصله از اطراف
      }}
    >
      <img
        src={game.image}
        alt={game.title}
        style={{
          borderRadius: "12px",
          width: "100%",
          aspectRatio: "12 / 9",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "15px" }}></div>

      <h3 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "10px" }}>
        {game.title}
      </h3>
      <div
        style={{
          color: "#ccc",
          fontSize: "1rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
        title={game.platforms.join(", ")}
      >
        {game.platforms.join(" • ")}
      </div>

      <div style={{ marginTop: "15px" }}>
        <span
          style={{
            backgroundColor: "#2e7d32",
            padding: "5px 12px",
            borderRadius: "10px",
            fontSize: "1rem",
            textOverflow: "ellipsis",
          }}
        >
          {game.score}
        </span>
      </div>
    </div>
  );
};
