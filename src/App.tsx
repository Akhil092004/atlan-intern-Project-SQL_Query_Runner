/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import "./App.css";
import QueryRegion from "./components/QueryRegion";
import Footer from "./components/Footer";
import DropdownSelector from "./components/DropdownSelector";
import ResultTable from "./components/ResultTable";
import Header from "./components/Header";
import { dataForQueries } from "./data/queries";

function App() {
  const [selectedQueryIndex, setSelectedQueryIndex] = useState<number>(-1);
  const [toggleToDropdown, setToggleToDropdown] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  const changeToggle = () => {
    setToggleToDropdown(!toggleToDropdown);
  };

  useEffect(() => {
    if (selectedQueryIndex !== -1) {
      setData(dataForQueries[selectedQueryIndex]);
    }
  }, [selectedQueryIndex]);

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="left-panel">
          <button
            onClick={changeToggle}
            style={{
              marginBottom: "20px",
              padding: "12px 18px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              background: toggleToDropdown
                ? "linear-gradient(135deg, #007bff, #0056b3)"
                : "linear-gradient(135deg, #28a745, #218838)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {toggleToDropdown ? "🚀 Run a Personal Query" : "🔽 Switch to Dropdown"}
          </button>

          {toggleToDropdown ? (
            <DropdownSelector setSelectedQueryIndex={setSelectedQueryIndex} />
          ) : (
            <QueryRegion setdata={setData} />
          )}
        </div>
        <div className="right-panel">
          <ResultTable data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
