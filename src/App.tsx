import React from "react";
import { SideBar } from "./components/Sidebar";
import type { Game } from "./data/games";
import { games } from "./data/games";
import { FilterBar } from "./components/FilterBar";
import { GameCard } from "./components/GameCard";

export const App = () => {
  return (
    <div className="container">
      <SideBar></SideBar>
      <div className="main">
        <FilterBar></FilterBar>
        <div className="game-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
