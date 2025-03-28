/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import "./App.css";
import QueryRegion from './components/QueryRegion';
import Footer from './components/Footer';
import DropdownSelector from './components/DropdownSelector';
import ResultTable from './components/ResultTable';
import Header from "./components/Header";
import { dataForQueries } from "./data/queries";


function App() {

  
    const [selectedQueryIndex, setSelectedQueryIndex] = useState<number>(-1);
    const [toggleToDropdown, setToggleToDropdown] = useState<boolean>(true);
    const [data, setData] = useState<any[]>([]);


    const changeToggle = () =>{
      setToggleToDropdown(!toggleToDropdown);
    }

    useEffect(()=>{
      if(selectedQueryIndex !== -1){
        setData(dataForQueries[selectedQueryIndex]);
      }
    },[selectedQueryIndex])

  console.log(selectedQueryIndex)
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="left-panel">
          <button
            onClick={changeToggle}
            style={{ marginBottom: "20px",width:"fit-content",backgroundColor:"gray",color:"white",padding:"15px",borderRadius:"10px" }}  
          >
            {toggleToDropdown ? "Run a personal Query" : "Switch to Dropdown"}
          </button>
          {toggleToDropdown? 
          <DropdownSelector setSelectedQueryIndex={setSelectedQueryIndex}/>:
          <QueryRegion setdata = {setData}/>}
        </div>
        <div className="right-panel">
          <ResultTable  data = {data}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

