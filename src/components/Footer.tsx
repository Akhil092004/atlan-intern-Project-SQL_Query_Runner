
import { useTheme } from "../context/ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        padding: "1.5rem",
        background: theme === "dark" ? "#0d0d0d" : "#222",
        color: theme === "dark" ? "#f1f1f1" : "#e0e0e0",
        textAlign: "center",
        width: "100%",
        transition: "all 0.3s ease-in-out",
        position: "relative",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <p style={{ fontSize: "16px", fontWeight: "500", marginBottom: "5px" }}>
        &copy; 2025 <span style={{ fontWeight: "bold", color: "#ffcc00" }}>SQL Runner</span>. All rights reserved.
      </p>
      <p style={{ fontSize: "14px", opacity: "0.8" }}>Developed by <span style={{ fontWeight: "bold", color: "#4db8ff" }}>Akhil Jain</span></p>
    </footer>
  );
}
