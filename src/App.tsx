import React, { useState } from "react";
import { SideBar } from "./components/Sidebar";
import type { Game } from "./data/games";
import { games } from "./data/games";
import { FilterBar } from "./components/FilterBar";
import { GameCard } from "./components/GameCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopGameHeader } from "./components/TopGameHeader";
import { AppBar } from "./components/Appbar";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      {/* هدر در بالا */}
      <AppBar></AppBar>
      <TopGameHeader />

      {/* محتوای اصلی: سایدبار + لیست بازی‌ها */}
      <div className="content" style={{ display: "flex" }}>
        <SideBar />

        <main style={{ flex: 1, padding: "20px" }}>
          <FilterBar />
          <div
            className="game-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "12px",
            }}
          >
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
