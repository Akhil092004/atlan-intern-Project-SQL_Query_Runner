/* eslint-disable @typescript-eslint/no-explicit-any */

import "../App.css";

function ResultTable({ data }: { data: any[] }) {
  if (!data || data.length === 0) {
    return <div>No Data Available</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto scrollable-content">
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            {headers.map((header) => (
              <th key={header} className="border border-gray-400 px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {headers.map((header) => (
                <td key={header} className="border border-gray-400 px-4 py-2">
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
