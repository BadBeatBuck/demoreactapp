import React, { useState } from "react";

import MUIDataTable from "mui-datatables";
import data from "./data";

import css from "./table.module.scss";

function Table002() {
  const columns = [
    { name: "id" },
    {
      name: "token",

      customBodyRender: (value, tableMeta, updateValue) => {
        // console.log({ value });

        return <div>test</div>;
      },
    },
    { name: "symbol" },
    { name: "token" },
    {
      name: "totalCost",

      customBodyRender: (value, tableMeta, updateValue) => {
        const nf = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

        return nf.format(value);
      },
    },
    { name: "totalProfit" },
    { name: "totalProfitRate" },
    { name: "yearProfitRate" },
    { name: "price" },
    { name: "token" },
  ];

  const options = {
    filterType: "checkbox",
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default Table002;
