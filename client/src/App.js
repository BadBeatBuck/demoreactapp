import React, { useEffect, useState } from "react";
// import Table001 from "./Components/Table-001/table";
// import Table002 from "./Components/table-002-mui-data-tables/table";

import css from "./App.module.scss";
// import Table003 from "./Components/table-003-mui-rctable/table";
// import Table004 from "./Components/table-004-react-data-table/table";
import Chart001 from "./Components/chart-001-highcharts/chart";
import { Form } from "react-bootstrap";
// import data01 from "./data/data-001";
import ccxt from "ccxt";

function App() {
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
    // // const response = await fetch("/express_backend");
    // if (response.status !== 200) {
    //   throw Error(body.message);
    // }
    // const body = await response.json();
    // const cryptoFeed = body.express;

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
    const ohlcv = await new ccxt.binance().fetchOHLCV("BTC/USDT", "5m");
    // const ohlcv = await new ccxt.binance().fetchOHLCV("BTC/USDT", "1m");

    const numPoints = 500;

    const index = 4;
    const lastPrice = ohlcv[ohlcv.length - 1][index]; // closing price
    // const series = ohlcv.map((x) => x[index]); // closing price
    const series = ohlcv.slice(-numPoints).map((x) => x[index]); // closing price

    console.log({ series });
    // res.send({ express: series });
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
  console.log({ cryptoFeed });
  console.log(cryptoFeed.length);

  const renderForm = () => {
    const form = (
      <div className={css.form}>
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
        </Form>
      </div>
    );

    return form;
  };

  const options = {
    yAxis: {
      min: priceLow * 1,
      max: priceHigh * 1,
      // min: priceLow * 0.95,
      // max: priceHigh * 1.05,
      startOnTick: false,
      endOnTick: false,
    },
  };

  console.log(ccxt.exchanges); // print all available exchanges

  return (
    <div className={css.main}>
      <div className={css.container}>
        {renderForm()}
        <Chart001 series={series} options={options} />
        <Chart001 series={series} options={options} />
        {/* <div className={css.header}>Bots</div> */}
        {/* <Table002 /> */}
        {/* <Table003 /> */}
        {/* <Table004 /> */}

        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}

        {/* <Table001 /> */}
      </div>
    </div>
  );
}

export default App;
