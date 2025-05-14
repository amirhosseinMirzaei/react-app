import React from "react";
import Slider from "react-slick";
import { topGames } from "../data/games";

// تنظیمات اسلایدر
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3, // تعداد کارت‌های نمایش داده شده
  slidesToScroll: 1,
  centerMode: true, // کارت وسطی بزرگتر میشه
  focusOnSelect: true, // وقتی روی کارت کلیک می‌کنی، بزرگ‌تر میشه
  responsive: [
    {
      breakpoint: 1024, // برای صفحه‌های بزرگتر از 1024px
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, // برای صفحه‌های کوچکتر از 768px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // برای صفحه‌های کوچکتر از 480px
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const TopGameHeader = () => {
  return (
    <div className="top-header-container">
      <Slider {...settings}>
        {topGames.map((game) => (
          <div key={game.id} className="game-card-container">
            <div className="game-card">
              <img src={game.image} alt={game.title} />
              <h3>{game.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
