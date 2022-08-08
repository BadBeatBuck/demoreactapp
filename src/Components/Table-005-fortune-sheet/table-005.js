import { useEffect } from "react";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";

import getOptions from "./options";

import css from "./table-005.module.scss";

const sheetOptions = getOptions({});
console.log({ sheetOptions });

const workSheets = [
  {
    name: "results", //Worksheet name
    color: "", //Worksheet color
    id: 0, //Worksheet id
    status: 1, //Worksheet active status
    order: 0, //The order of the worksheet
    celldata: [{ r: 0, c: 0, v: { m: "2345", v: "2345" } }],
    ...sheetOptions,
  },
  {
    name: "Sheet2",
    color: "",
    id: "1",
    status: 0,
    order: 1,
    celldata: [],
    config: {},
  },
];

function Table005(props) {
  const onChangeFortuneTable = (data) => {
    console.log({ data });
    console.log(data[0]?.celldata?.[0]?.v?.v);
  };

  const settings = {
    data: workSheets,
    onChange: onChangeFortuneTable,
    lang: "zh", // set language
  };

  // const [series, setSeries] = useState([]);

  useEffect(() => {
    // setSeries(props.series);
  }, [props.series]);

  // options.series[0].data = series;

  return (
    <div className={css.main}>
      <Workbook {...settings} />
    </div>
  );
}

export default Table005;
