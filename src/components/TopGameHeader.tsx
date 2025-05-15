import React from "react";
import Slider from "react-slick";
import { topGames } from "../data/games";

// تنظیمات اسلایدر
export const TopGameHeader: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      style={{
        maxWidth: 900,
        margin: "30px auto",
        padding: "0 15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#f57c00",
          marginBottom: 25,
          fontSize: "2rem",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        Top Games
      </h2>

      <Slider {...settings}>
        {topGames.map(({ id, title, score, image }) => (
          <div key={id} style={{ padding: "0 10px" }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 18px rgba(0,0,0,0.2)",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: "#222",
                color: "#fff",
                position: "relative",
                minHeight: 200,
                minWidth: 100,
                maxHeight: 250,
                maxWidth: 200,
                display: "flex",
                flexDirection: "column",
              }}
              className="game-card"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "scale(1.05)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 24px rgba(245, 124, 0, 0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "scale(1)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 18px rgba(0,0,0,0.2)";
              }}
            >
              <img
                src={image}
                alt={title}
                style={{
                  width: "100%",
                  height: 250,
                  objectFit: "cover",
                  display: "block",
                  borderTopLeftRadius: 13,
                  borderTopRightRadius: 13,
                  userSelect: "none",
                }}
                draggable={false}
              />

              <div style={{ padding: 15, flexGrow: 1 }}>
                <h3
                  style={{
                    margin: "0 0 8px 0",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={title}
                >
                  {title}
                </h3>
                <div
                  style={{
                    fontSize: "1rem",
                    color: "#fbc02d",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                  }}
                >
                  Score: {score.toFixed(1)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
