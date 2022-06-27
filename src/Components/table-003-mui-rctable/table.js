import React, { useState } from "react";
import data from "./data";
import Table from "rc-table";

import css from "./table.module.scss";

function Table003() {
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

  const data = [
    { name: "Jack", age: 28, address: "some where", key: "1" },
    { name: "Rose", age: 36, address: "some where", key: "2" },
  ];
  return <Table columns={columns} data={data} />;
}

export default Table003;
