import { useState } from "react";
import { queries } from "../data/queries";
import { useTheme } from "../context/ThemeProvider";

function DropdownSelector(props: { setSelectedQueryIndex: (arg: number) => void }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", height: "100%" }}>
      {queries.map((query, index) => (
        <div
          key={index}
          onClick={() => props.setSelectedQueryIndex(index)}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          className="query-selector"
          style={{
            cursor: "pointer",
            padding: "10px",
            border: theme === "light" ? "1px solid black" : "1px solid white",
            borderRadius: "5px",
            backgroundColor: hoverIndex === index 
              ? theme === "light" 
                ? "#ddd" 
                : "#444" 
              : theme === "light" 
                ? "#fff" 
                : "#222",
            color: theme === "light" ? "#000" : "#fff",
            width: "30vw",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          {query}
        </div>
      ))}
    </div>
  );
}

export default DropdownSelector;
