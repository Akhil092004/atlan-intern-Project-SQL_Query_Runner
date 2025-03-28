/* eslint-disable @typescript-eslint/no-explicit-any */

import allData from "../data/data.json";

function QueryRegion(props : {setdata : (arg:any[]) => void}) {

  const generateData = () => {
    return [...allData].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 10));
  };


  return (
    <div style={{ height: "100%" }}>
      <textarea
      placeholder="Enter your query here"
        style={{
          height: "90%",
          width: "85%",
          fontSize: "20px",
          padding: "10px",
          resize: "none",
          verticalAlign: "top",
        }}
      />

      <button
        style={{
          marginTop: "10px",
          width: "90%",
          padding: "10px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={()=>props.setdata(generateData())}
      > Run Query </button>
    </div>
  );
}

export default QueryRegion;
