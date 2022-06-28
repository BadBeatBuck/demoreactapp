import React, { useEffect, useState } from "react";
import ccxt from "ccxt";
import { Button, Form } from "react-bootstrap";
import { DataStore } from "@aws-amplify/datastore";
import { Todo, Bot } from "../../models";

import Table003 from "../table-003-mui-rctable/table";
import Chart001 from "../chart-001-highcharts/chart";

import Highcharts, { objectEach } from "highcharts";
import HighchartsReact from "highcharts-react-official";

import css from "./dashboard.module.scss";

function Dashboard() {
  const params = {
    priceLow: 100,
    priceHigh: 200,
    numSlices: 12,
  };

  let defaultSeries = [
    {
      data: [1, 200, 100],
    },
    {
      data: [1, 2, 600],
    },
  ];

  const [priceLow, setPriceLow] = useState(params.priceLow);
  const [priceHigh, setPriceHigh] = useState(params.priceHigh);
  const [numSlices, setNumSlices] = useState(params.numSlices);
  const [cryptoFeed, setCryptoFeed] = useState([]);

  const callBackendAPI = async () => {
    const cryptoFeed = await fetchCrypto();

    const dataMin = Math.min(...cryptoFeed);
    const dataMax = Math.max(...cryptoFeed);
    const roundedMin = Math.round(dataMin / 100) * 100;
    const roundedMax = Math.round(dataMax / 100) * 100;

    setPriceLow(roundedMin);
    setPriceHigh(roundedMax);
    setCryptoFeed(cryptoFeed);
  };

  useEffect(() => {
    callBackendAPI();
  }, []);

  const fetchCrypto = async () => {
    // const candleInterval = "1m";
    const candleInterval = "5m";
    const tokenPair = "BTC/USDT";

    const ohlcv = await new ccxt.binance().fetchOHLCV(
      tokenPair,
      candleInterval
    );

    const numPoints = 500;

    const index = 4;
    // const lastPrice = ohlcv[ohlcv.length - 1][index]; // closing price
    const series = ohlcv.slice(-numPoints).map((x) => x[index]); // closing price

    // await DataStore.save(
    //   new Bot({
    //     priceLow: 123.45,
    //     name: "test-001",
    //   })
    // );

    const models = await DataStore.query(Bot);
    console.log(models);
    return series;
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

  const createGridLines = (cryptoFeed) => {
    console.log(
      "createGridLines---------------------------------------------------->>"
    );
    const series = [];
    const priceLow2 = parseInt(priceLow);
    const priceHigh2 = parseInt(priceHigh);
    const numSlices2 = parseInt(numSlices);

    const stepSize = (priceHigh2 - priceLow2) / numSlices2;

    for (let i = 0; i < numSlices2 + 1; i++) {
      const value = priceLow2 + i * stepSize;

      const numPoints = cryptoFeed.length;
      const dummyData = [...Array(numPoints).keys()];
      dummyData.fill(value, 0, numPoints);
      const singleSeries = { data: dummyData };
      series.push(singleSeries);
    }

    series.unshift({ data: cryptoFeed });
    return series;
  };

  const series = createGridLines(cryptoFeed);

  const renderForm = () => {
    const form = (
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>High Price</Form.Label>
          <Form.Control
            onChange={onPriceHigh}
            // onBlur={createGridLines}
            value={priceHigh}
            type="number"
            step="100"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Low Price</Form.Label>
          <Form.Control
            onChange={onPriceLow}
            // onBlur={createGridLines}
            value={priceLow}
            type="number"
            step="100"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Num Slices</Form.Label>
          <Form.Control
            onChange={onNumSlices}
            // onBlur={createGridLines}
            value={numSlices}
            type="number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Num Slices</Form.Label>
          <Form.Control
            onChange={onNumSlices}
            // onBlur={createGridLines}
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
      // min: priceLow * 1,
      // max: priceHigh * 1,
      min: priceLow * 0.98,
      max: priceHigh * 1.02,
      startOnTick: false,
      endOnTick: false,
    },
  };

  // console.log(ccxt.exchanges); // print all available exchanges

  const tableData = [
    { name: "Jack", age: 28, address: "some where", key: "1" },
    { name: "Rose", age: 36, address: "some where", key: "2" },
  ];

  const options2 = {
    title: {
      text: "",
    },
    chart: {
      type: "line",
      width: null,
      height: null,
    },
    legend: { enabled: false },
    series: [],
    rangeSelector: {
      selected: 1,
    },

    yAxis: {
      // min: 20500,
      // max: 21500,
      startOnTick: false,
      endOnTick: false,
    },
    series: [
      {
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
      },
    ],
  };

  return (
    <div className={css.main}>
      {/* <HighchartsReact
        highcharts={Highcharts}
        options={options2}
        updateArgs={[true, true, true, true, true, true, true]}
      /> */}
      {/* <Chart001 className={css.chart} series={series} options={options} /> */}
      <div className={css.container}>
        <div className={css.chartRow}>
          {/* <div className={css.form}>{renderForm()}</div> */}
          <Chart001 className={css.chart} series={series} options={options} />
          <Chart001 className={css.chart} series={series} options={options} />
        </div>
        {/* <div className={css.tableRow}>
          <Table003 data={tableData} />
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;