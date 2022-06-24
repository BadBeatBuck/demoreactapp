import React, { useEffect, useState } from "react";
// import Table001 from "./Components/Table-001/table";
// import Table002 from "./Components/table-002-mui-data-tables/table";

import css from "./App.module.scss";
// import Table003 from "./Components/table-003-mui-rctable/table";
// import Table004 from "./Components/table-004-react-data-table/table";
import Chart001 from "./Components/chart-001-highcharts/chart";
import { Button, Form } from "react-bootstrap";
import { render } from "@testing-library/react";
// import data01 from "./data/data-001";

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
    const response = await fetch("/express_backend");
    if (response.status !== 200) {
      throw Error(body.message);
    }
    const body = await response.json();
    const cryptoFeed = body.express;

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

      const numPoints = 100;
      const dummyData = [...Array(numPoints).keys()];
      dummyData.fill(value, 0, numPoints);
      const singleSeries = { data: dummyData };
      series.push(singleSeries);
    }

    // const cryptoFeed = tokenData.map((item) => {
    //   return item[0];
    // });
    // console.log({ cryptoFeed });
    // const dataMin = Math.min(...cryptoFeed);
    // const dataMax = Math.max(...cryptoFeed);
    // console.log({ dataMin });

    console.log({ cryptoFeed });

    // setPriceLow(dataMin);
    // setPriceHigh(dataMax);

    series.unshift({ data: cryptoFeed });
    return series;
    // setSeries(series);
  };

  // const series = [1, 2, 3];
  const series = createGridLines(cryptoFeed);
  console.log({ cryptoFeed, priceLow });

  const renderForm = () => {
    // const form = []
    const form = (
      <div className={css.form}>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Low Price</Form.Label>
            <Form.Control
              onChange={onPriceLow}
              // onBlur={createGridLines}
              value={priceLow}
              type="number"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>High Price</Form.Label>
            <Form.Control
              onChange={onPriceHigh}
              // onBlur={createGridLines}
              value={priceHigh}
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

  return (
    <div className={css.main}>
      {renderForm()}
      {/* <div className={css.header}>Bots</div> */}
      {/* <Table002 /> */}
      {/* <Table003 /> */}
      {/* <Table004 /> */}

      {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}

      <Chart001 series={series} />
      {/* <Table001 /> */}
    </div>
  );
}

export default App;
