import React, { useEffect, useState } from "react";
import ccxt from "ccxt";

import { Button, Form } from "react-bootstrap";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";

import { DataStore } from "@aws-amplify/datastore";
import { Bot } from "../../models";

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Table003 from "../table-003-mui-rctable/table";
import Chart003 from "../Chart-003-highstock/chart";
import { Chart007 } from "../Chart-007-lwcharts-2/chart";

import GridProfit from "../GridProfit/gridProfit";
import Constants from "../../Constants";

import css from "./dashboard.module.scss";

const numPoints = 500;

function Dashboard() {
  const params = {
    priceLow: 100,
    priceHigh: 200,
    numSlices: 12,
  };

  const [priceLow, setPriceLow] = useState(params.priceLow);
  const [priceHigh, setPriceHigh] = useState(params.priceHigh);
  const [numSlices, setNumSlices] = useState(params.numSlices);
  const [candleData, setCandleData] = useState([]);

  const fetchData = async () => {
    const { candleData } = await fetchCrypto();
    const cryptoFeed = candleData
      .slice(-numPoints)
      .map((x) => x[Constants.ohlcvDefs.close]); // closing price
    console.log({ cryptoFeed, candleData });

    const dataMin = Math.min(...cryptoFeed);
    const dataMax = Math.max(...cryptoFeed);
    const roundedMin = Math.round(dataMin / 100) * 100;
    const roundedMax = Math.round(dataMax / 100) * 100;

    setPriceLow(roundedMin);
    setPriceHigh(roundedMax);
    setCandleData(candleData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchCrypto = async () => {
    // const candleInterval = "1m";
    const candleInterval = "5m";
    const tokenPair = "BTC/USDT";

    const ohlcv = await new ccxt.binance().fetchOHLCV(
      tokenPair,
      candleInterval
    );

    // await DataStore.save(
    //   new Bot({
    //     priceLow: 123.45,
    //     name: "test-001",
    //   })
    // );

    const models = await DataStore.query(Bot);
    console.log(models);
    return { candleData: ohlcv };
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // need to refresh here
  };

  const onPriceLow = (event) => {
    setPriceLow(event.target.value);
  };

  const onPriceHigh = (event) => {
    setPriceHigh(event.target.value);
  };

  const onNumSlices = (event) => {
    setNumSlices(event.target.value);
  };

  const renderForm = () => {
    const form = (
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>High Price</Form.Label>
          <Form.Control
            onChange={onPriceHigh}
            value={priceHigh}
            type="number"
            step="100"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Low Price</Form.Label>
          <Form.Control
            onChange={onPriceLow}
            value={priceLow}
            type="number"
            step="100"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Num Slices</Form.Label>
          <Form.Control
            onChange={onNumSlices}
            value={numSlices}
            type="number"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );

    return form;
  };

  const tableData = [
    { name: "Jack", age: 28, address: "some where", key: "1" },
    { name: "Rose", age: 36, address: "some where", key: "2" },
  ];

  const onChangeFortuneTable = (data) => {
    console.log({ data });
  };

  const testData = [
    {
      name: "Cell", //Worksheet name
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
    {
      name: "Sheet3",
      color: "",
      id: "2",
      status: 0,
      order: 2,
      celldata: [],
      config: {},
    },
  ];

  const settings = {
    data: testData,
    onChange: onChangeFortuneTable,
    lang: "zh", // set language
  };

  const testOptions = {
    autosize: true,
    symbol: "BINANCE:BTCUSDT",
    interval: "1",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    allow_symbol_change: true,
    container_id: "tradingview_b461c",
  };

  const test = {
    colors: {
      backgroundColor: "white",
      lineColor: "#2962FF",
      textColor: "black",
      areaTopColor: "#2962FF",
      areaBottomColor: "rgba(41, 98, 255, 0.28)",
    },
  };

  const configuratorData = { priceLow, priceHigh, numSlices };

  return (
    <div className={css.main}>
      <div className={css.chartRows}>
        <div className={css.chartRow}>
          <div className={css.form}>
            {renderForm()}

            <GridProfit />
          </div>
          <Chart007
            // colors={test.colors}
            candleData={candleData}
            configuratorData={configuratorData}
          />
          {/* <Chart003
              candleData={candleData}
              configuratorData={{ priceLow, priceHigh }}
              priceLow={priceLow}
              priceHigh={priceHigh}
              className={css.chart}
            /> */}
        </div>
      </div>
      {/* <div className={css.tableRow}> */}
      {/* <Workbook data={[{ name: "Sheet1" }]} /> */}
      {/* <Workbook {...settings} /> */}
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
