import React, { useEffect, useState } from "react";
import ccxt from "ccxt";

import { Button, Form } from "react-bootstrap";

import { DataStore } from "@aws-amplify/datastore";
import { Bot } from "../../models";

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Table003 from "../table-003-mui-rctable/table";
import Chart003 from "../Chart-003-highstock/chart";
import { Chart007 } from "../Chart-007-lwcharts-2/chart";

import GridProfit from "../GridProfit/gridProfit";
import Constants from "../../Constants";

import css from "./dashboard.module.scss";
import Table005 from "../Table-005-fortune-sheet/table-005";

const numPoints = 500;

function Dashboard() {
  const params = {
    priceLow: 23_000,
    priceHigh: 24_000,
    numSlices: 20,
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

    const dataMin = Math.min(...cryptoFeed);
    const dataMax = Math.max(...cryptoFeed);
    const roundedMin = Math.round(dataMin / 100) * 100;
    const roundedMax = Math.round(dataMax / 100) * 100;

    setPriceLow(22_000);
    setPriceHigh(24_000);
    // setPriceLow(roundedMin);
    // setPriceHigh(roundedMax);
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

  const configuratorData = { priceLow, priceHigh, numSlices };

  return (
    <div className={css.main}>
      <div className={css.chartRows}>
        <div className={css.chartRow}>
          <div className={css.form}>{renderForm()}</div>
          <Chart007
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
      <div className={css.tableRow}>
        <GridProfit
          configuratorData={configuratorData}
          candleData={candleData}
        />
        {/* <Table005 /> */}
      </div>
    </div>
  );
}

export default Dashboard;
