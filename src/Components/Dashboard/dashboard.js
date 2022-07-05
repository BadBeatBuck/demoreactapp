import React, { useEffect, useState } from "react";
import ccxt from "ccxt";
import { Button, Form } from "react-bootstrap";
import { DataStore } from "@aws-amplify/datastore";
import { Bot } from "../../models";

import Table003 from "../table-003-mui-rctable/table";
import Chart003 from "../Chart-003-highstock/chart";

import css from "./dashboard.module.scss";

function Dashboard() {
  const params = {
    priceLow: 100,
    priceHigh: 200,
    numSlices: 12,
  };

  const [priceLow, setPriceLow] = useState(params.priceLow);
  const [priceHigh, setPriceHigh] = useState(params.priceHigh);
  const [numSlices, setNumSlices] = useState(params.numSlices);
  const [cryptoFeed, setCryptoFeed] = useState([]);
  const [candleData, setCandleData] = useState([]);

  const fetchData = async () => {
    const { series: cryptoFeed, candleData } = await fetchCrypto();
    console.log({ cryptoFeed, candleData });

    const dataMin = Math.min(...cryptoFeed);
    const dataMax = Math.max(...cryptoFeed);
    const roundedMin = Math.round(dataMin / 100) * 100;
    const roundedMax = Math.round(dataMax / 100) * 100;

    setPriceLow(roundedMin);
    setPriceHigh(roundedMax);
    setCryptoFeed(cryptoFeed);
    setCandleData(candleData);
    console.log({ candleData });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchCrypto = async () => {
    // const candleInterval = "1m";
    const candleInterval = "5m";
    // const candleInterval = "15m";
    // const candleInterval = "1d";
    const tokenPair = "BTC/USDT";

    const ohlcv = await new ccxt.binance().fetchOHLCV(
      tokenPair,
      candleInterval
    );

    const numPoints = 500;

    const index = 4;
    const series = ohlcv.slice(-numPoints).map((x) => x[index]); // closing price

    // await DataStore.save(
    //   new Bot({
    //     priceLow: 123.45,
    //     name: "test-001",
    //   })
    // );

    const models = await DataStore.query(Bot);
    console.log(models);
    return { series, candleData: ohlcv };
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

  const createGridLines = ({ cryptoFeed, candleData }) => {
    const series = [];
    const priceLow2 = parseInt(priceLow);
    const priceHigh2 = parseInt(priceHigh);
    const numSlices2 = parseInt(numSlices);

    const stepSize = (priceHigh2 - priceLow2) / numSlices2;

    for (let i = 0; i < numSlices2 + 1; i++) {
      const value = priceLow2 + i * stepSize;

      const numPoints = cryptoFeed.length;

      const data2 = [];
      for (let i = 0; i < numPoints; i++) {
        if (candleData?.[i]) {
          const newData = [candleData[i][0], value];
          data2.push(newData);
        }
      }

      const dummyData = [...Array(numPoints).keys()];
      dummyData.fill(value, 0, numPoints);
      const singleSeries = {
        data: data2,
        dataGrouping: { enabled: false },
        tooltip: { valueDecimals: 2 },
        type: "line",
        name: " Volume",
      };
      series.push(singleSeries);
    }

    // series.unshift({ data: cryptoFeed });
    return { series };
  };

  const { series } = createGridLines({ cryptoFeed, candleData });

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

  const options = {
    yAxis: {
      min: priceLow * 0.98,
      max: priceHigh * 1.02,
      startOnTick: false,
      endOnTick: false,
    },
  };

  const tableData = [
    { name: "Jack", age: 28, address: "some where", key: "1" },
    { name: "Rose", age: 36, address: "some where", key: "2" },
  ];

  const gridLines = series;

  console.log({ gridLines });
  return (
    <div className={css.main}>
      <div className={css.container}>
        <div className={css.chartRows}>
          {/* <div className={css.chartRow}>
            <div className={css.form}>{renderForm()}</div>
            <Chart003 data={candleData} className={css.chart} />
            <Chart003 data={candleData} className={css.chart} />
          </div> */}
          <div className={css.chartRow}>
            <div className={css.form}>{renderForm()}</div>
            {/* <Chart003 data={candleData} className={css.chart} /> */}
            <Chart003
              data={candleData}
              className={css.chart}
              gridLines={series || []}
            />
            {/* <Chart003 data={candleData} className={css.chart} /> */}
          </div>
        </div>
      </div>
      <div className={css.tableRow}>
        <Table003 data={tableData} series={series} />
      </div>
    </div>
  );
}

export default Dashboard;
