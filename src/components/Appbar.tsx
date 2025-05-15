export const AppBar: React.FC = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        backgroundColor: "#1e1e1e",
        padding: "15px 30px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.7)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#f57c00",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "1.6rem",
          fontWeight: "700",
          gap: "10px",
        }}
      >
        <i className="fas fa-gamepad" style={{ fontSize: "1.4rem" }}></i>
        GameZone
      </div>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: 25,
            margin: 0,
            padding: 0,
            fontWeight: "600",
          }}
        >
          <li
            style={{ cursor: "pointer", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa726")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f57c00")}
          >
            Home
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa726")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f57c00")}
          >
            Games
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa726")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f57c00")}
          >
            About
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa726")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f57c00")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};
