import DataGrid from "react-data-grid";
import css from "./table.module.scss";
import cx from "classnames";

const renderButton = (info) => {
  const { row, column } = info;
  const columnName = column.key;
  const value = row[columnName];

  const className = cx(css.valueButton, {
    [css.true]: value,
    [css.false]: !value,
  });

  return <div>hello </div>;
  return <div className={className}>{value ? "true" : ""}</div>;
};

const columns = [
  { key: "id", name: "ID" },
  { key: "title", name: "Title" },
  {
    key: "cat",
    sortable: true,
    name: "Cat",
    formatter: (info) => renderButton(info),
    width: 30,
  },
];

const rows = [
  { id: 0, cat: "kitty", title: "Example" },
  { id: 1, cat: "kitty", title: "Demo" },
];

function Table004() {
  return <DataGrid columns={columns} rows={rows} />;
}

export default Table004;
