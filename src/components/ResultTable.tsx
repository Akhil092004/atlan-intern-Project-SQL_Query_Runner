/* eslint-disable @typescript-eslint/no-explicit-any */
import "../App.css";
import { useTheme } from "../context/ThemeProvider";

function ResultTable({ data }: { data: any[] }) {
  const { theme } = useTheme();

  if (!data || data.length === 0) {
    return <div className={theme === "dark" ? "text-white" : "text-black"}>No Data Available</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto scrollable-content">
      <table
        className="table-auto border-collapse w-full"
        style={{
          border: theme === "dark" ? "1px solid white" : "1px solid #444",
          backgroundColor: theme === "dark" ? "#222" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: theme === "dark" ? "#333" : "#ddd",
              color: theme === "dark" ? "#fff" : "#000",
            }}
          >
            {headers.map((header) => (
              <th key={header} className="px-4 py-2" style={{ borderBottom: "1px solid gray" }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ backgroundColor: theme === "dark" ? "#444" : "#fff" }}>
              {headers.map((header) => (
                <td
                  key={header}
                  className="px-4 py-2"
                  style={{
                    borderBottom: "1px solid gray",
                    color: theme === "dark" ? "#fff" : "#000",
                  }}
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
