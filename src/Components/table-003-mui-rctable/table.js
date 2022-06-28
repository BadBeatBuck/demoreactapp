import React, { useState } from "react";
import data from "./data";
import Table from "rc-table";

import css from "./table.module.scss";

function Table003(props) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: 100,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 200,
    },
    {
      title: "Operations",
      dataIndex: "",
      key: "operations",
      render: () => <a href="#">Delete</a>,
    },
  ];

  return <Table columns={columns} data={props.data} />;
}

export default Table003;
