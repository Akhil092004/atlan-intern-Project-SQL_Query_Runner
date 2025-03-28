import { useState } from 'react';
import { queries } from '../data/queries';

function DropdownSelector(props: { setSelectedQueryIndex: (arg: number) => void }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px",height:"100%" }}>
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
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: hoverIndex === index ? "lightgray" : "white",
            width: "30vw",
          }}
        >
          {query}
        </div>
      ))}
    </div>
  );
}

export default DropdownSelector;
