import React, { useEffect, useState } from "react";

import { Button, Form } from "react-bootstrap";
import last from "lodash.last";

import Constants from "../../Constants";

import css from "./gridProfit.module.scss";

const calcTotalProfit = ({ priceLow, priceHigh, numSlices, candleData }) => {
  const priceStart = candleData[0]?.[Constants.ohlcvDefs.high];
  const priceEnd = last(candleData)?.[Constants.ohlcvDefs.high];
  console.log({ priceStart, priceEnd });

  return 999;
};

function GridProfit(props) {
  console.log({ props });

  const { priceLow, priceHigh, numSlices, candleData } = props;

  const params = {
    priceLow: 100,
    priceHigh: 200,
    numSlices: 12,
  };

  // const [priceLow, setPriceLow] = useState(params.priceLow);
  // const [priceHigh, setPriceHigh] = useState(params.priceHigh);

  useEffect(() => {
    // fetchData();
  }, []);

  const totalProfit = calcTotalProfit({
    priceLow,
    priceHigh,
    numSlices,
    candleData,
  });

  return (
    <div className={css.main}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Total Profit</Form.Label>
          <Form.Control value={totalProfit} type="number" step="100" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default GridProfit;
