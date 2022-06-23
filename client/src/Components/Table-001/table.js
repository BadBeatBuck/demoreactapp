import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import css from "./table.module.scss";
import React, { useState } from "react";

import data from "./data";

function Table001(props) {
  const [rowData] = useState(data);

  const [columnDefs] = useState([
    { field: "id" },
    { field: "symbol" },
    { field: "token" },
    { field: "totalCost", cellRenderer: "agSparklineCellRenderer" },
    { field: "totalProfit" },
    { field: "totalProfitRate" },
    { field: "yearProfitRate" },
    { field: "price" },
    { field: "token" },
    { field: "token" },
  ]);

  console.log("data", data[0]);
  return (
    <div className={css.main}>
      <div className="ag-theme-alpine" style={{ height: 400, width: 2000 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </div>
  );
}

export default Table001;
