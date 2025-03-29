/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTheme } from "../context/ThemeProvider";
import allData from "../data/data.json";

function QueryRegion(props: { setdata: (arg: any[]) => void }) {
  const { theme } = useTheme();

  const generateData = () => {
    return [...allData].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 10));
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <textarea
        placeholder="Write your SQL query here..."
        style={{
          height: "200px",
          width: "90%",
          fontSize: "18px",
          padding: "15px",
          resize: "none",
          borderRadius: "8px",
          outline: "none",
          border: "2px solid",
          borderColor: theme === "dark" ? "#555" : "#ccc",
          backgroundColor: theme === "dark" ? "#1e1e1e" : "white",
          color: theme === "dark" ? "#ddd" : "black",
          boxShadow: theme === "dark" ? "0 4px 10px rgba(255, 255, 255, 0.1)" : "0 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
        }}
      />

      <button
        style={{
          marginTop: "15px",
          width: "90%",
          padding: "12px",
          background: theme === "dark" ? "linear-gradient(135deg, #444, #222)" : "linear-gradient(135deg, #007bff, #0056b3)",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: theme === "dark" ? "0 4px 10px rgba(255, 255, 255, 0.1)" : "0 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease-in-out",
        }}
        onClick={() => props.setdata(generateData())}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        🚀 Run Query
      </button>
    </div>
  );
}

export default QueryRegion;
