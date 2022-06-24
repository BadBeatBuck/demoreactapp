import React, { useEffect, useState } from "react";
// import Table001 from "./Components/Table-001/table";
// import Table002 from "./Components/table-002-mui-data-tables/table";

import css from "./App.module.scss";
// import Table003 from "./Components/table-003-mui-rctable/table";
// import Table004 from "./Components/table-004-react-data-table/table";
import Chart001 from "./Components/chart-001-highcharts/chart";
import { Button, Form } from "react-bootstrap";
// import data01 from "./data/data-001";

function App() {
  const params = {
    priceLow: 100,
    priceHigh: 200,
    numSlices: 5,
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
  const [series, setSeries] = useState(defaultSeries);
  const [cryptoFeed, setCryptoFeed] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();
    const cryptoFeed = body.express;

    setCryptoFeed(cryptoFeed);
    console.log({ body });

    if (response.status !== 200) {
      throw Error(body.message);
    }
    calcSeries(cryptoFeed);
    return body;
  };

  useEffect(() => {
    callBackendAPI();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    calcSeries();
  };

  const onPriceLow = (event) => {
    setPriceLow(event.target.value);
  };

  const onPriceHigh = (event) => {
    setPriceHigh(event.target.value);
  };

  const onNumSlices = (event) => {
    setNumSlices(event.target.value);
    calcSeries();
  };

  const calcSeries = (passedCryptoFeed) => {
    console.log(
      "calcSeries---------------------------------------------------->>"
    );
    const series = [];
    const priceLow2 = parseInt(priceLow);
    const priceHigh2 = parseInt(priceHigh);
    const numSlices2 = parseInt(numSlices);

    const stepSize = (priceHigh2 - priceLow2) / numSlices2;

    for (let i = 0; i < numSlices2 + 1; i++) {
      const value = priceLow2 + i * stepSize;

      const numPoints = 100;
      const dummyData = [...Array(numPoints).keys()];
      dummyData.fill(value, 0, numPoints);
      const singleSeries = { data: dummyData };
      series.push(singleSeries);
    }

    // const tokenData = data01;
    const test = passedCryptoFeed || cryptoFeed;
    // const test = [1, 2, 3, 4];
    // const test = tokenData.map((item) => {
    //   return item[0];
    // });
    console.log({ test });

    const dataMin = Math.min(...test);
    const dataMax = Math.max(...test);
    console.log({ test });
    console.log({ dataMin });

    setPriceLow(dataMin);
    setPriceHigh(dataMax);

    series.unshift({ data: test });
    setSeries(series);
  };

  console.log({ cryptoFeed, priceLow });

  return (
    <div className={css.main}>
      {/* <div className={css.header}>Bots</div> */}
      {/* <Table002 /> */}
      {/* <Table003 /> */}
      {/* <Table004 /> */}

      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Low Price</Form.Label>
          <Form.Control
            onChange={onPriceLow}
            // onBlur={calcSeries}
            value={priceLow}
            type="number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>High Price</Form.Label>
          <Form.Control
            onChange={onPriceHigh}
            // onBlur={calcSeries}
            value={priceHigh}
            type="number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Num Slices</Form.Label>
          <Form.Control
            onChange={onNumSlices}
            // onBlur={calcSeries}
            value={numSlices}
            type="number"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Chart001 series={series} />
      {/* <Table001 /> */}
    </div>
  );
}

export default App;
