import { useTheme } from "../context/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        padding: "0.5rem",
        background: theme === "light" ? "#f4f4f4" : "#222",
        color: theme === "light" ? "#000" : "white",
        textAlign: "center",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s ease, color 0.3s ease",
        borderBottom: theme === "light" ? "1px solid #ddd" : "1px solid #444",
      }}
    >
      <h2 style={{ marginLeft: "50px" }}>SQL Query Runner - ATLAN</h2>
      <button
        style={{
          marginRight: "50px",
          padding: "8px 16px",
          border: "none",
          cursor: "pointer",
          background: theme === "light" ? "#222" : "#f4f4f4",
          color: theme === "light" ? "white" : "#222",
          borderRadius: "5px",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
}
