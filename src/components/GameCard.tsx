import type { Game } from "../data/games";
import React from "react";
interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <div className="game-card">
      <img
        src={game.image}
        alt={game.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{game.title}</h3>
      <div>
        {game.platforms.map((p, i) => (
          <span key={i} style={{ marginRight: 5, fontSize: 12 }}>
            {p}
          </span>
        ))}
      </div>
      <div style={{ marginTop: 5 }}>
        <span
          style={{
            backgroundColor: "#2e7d32",
            padding: "2px 6px",
            borderRadius: 5,
          }}
        >
          {game.score}
        </span>
      </div>
    </div>
  );
};
