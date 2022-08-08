import { useEffect } from "react";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";

import getOptions from "./options";

import css from "./table-005.module.scss";

const options = getOptions({});
console.log({ options });

const workSheets = [
  {
    name: "results", //Worksheet name
    color: "", //Worksheet color
    id: 0, //Worksheet id
    status: 1, //Worksheet active status
    order: 0, //The order of the worksheet
    hide: 0, //Whether worksheet hide
    row: 36, //the number of rows in a sheet
    column: 18, //the number of columns in a sheet
    defaultRowHeight: 19, //Customized default row height
    defaultColWidth: 73, //Customized default column width
    // celldata: [], //Initial the cell data
    celldata: [{ r: 0, c: 0, v: { m: "2345", v: "2345" } }],
    // celldata: [{ r: 0, c: 0, v: "999" }],
    config: {
      merge: {}, //merged cells
      rowlen: {}, //Table row height
      columnlen: {}, //Table column width
      rowhidden: {}, //hidden rows
      colhidden: {}, //hidden columns
      borderInfo: {}, //borders
      authority: {}, //Worksheet protection
    },
    scrollLeft: 0, //Left and right scroll bar position
    scrollTop: 315, //Up and down scroll bar position
    luckysheet_select_save: [], //selected area
    calcChain: [], //Formula chain
    isPivotTable: false, //Whether is pivot table
    pivotTable: {}, //Pivot table settings
    filter_select: {}, //Filter range
    filter: null, //Filter configuration
    luckysheet_alternateformat_save: [], //Alternate colors
    luckysheet_alternateformat_save_modelCustom: [], //Customize alternate colors
    luckysheet_conditionformat_save: {}, //condition format
    frozen: {}, //freeze row and column configuration
    chart: [], //Chart configuration
    zoomRatio: 1, // zoom ratio
    image: [], //image
    showGridLines: 1, //Whether to show grid lines
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
