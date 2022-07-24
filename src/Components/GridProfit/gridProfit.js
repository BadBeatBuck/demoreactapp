import React, { useEffect, useState } from "react";

import { Button, Form } from "react-bootstrap";
import last from "lodash.last";

import Constants from "../../Constants";

import css from "./gridProfit.module.scss";

const getSliceLevels = ({ priceLow, priceHigh, numSlices }) => {
  const output = [];
  const stepSize = (priceHigh - priceLow) / numSlices;
  for (let i = 0; i < parseInt(numSlices) + 1; i++) {
    const price = priceLow + i * stepSize;
    output.push(price);
  }

  console.log({ output });
  return output;
};

const findStartIndex = ({ levels, priceStart }) => {
  let output = 0;
  levels.forEach((level, index) => {
    console.log({ priceStart, level });
    if (priceStart > level) {
      output = index;
    }
  });

  return output;
};

const calcTotalProfit = ({ priceLow, priceHigh, numSlices, candleData }) => {
  const priceStart = candleData[0]?.[Constants.ohlcvDefs.high];
  const priceEnd = last(candleData)?.[Constants.ohlcvDefs.high];

  const levels = getSliceLevels({
    priceLow,
    priceHigh,
    numSlices,
    candleData,
  });

  const startIndex = findStartIndex({ levels, priceStart });

  // const levels = [22000, 22500, 23000, 23500];
  const nextBuyIndex = 1;
  const nextSellIndex = 2;

  const nextBuyPrice = levels[nextBuyIndex];
  const nextSellPrice = levels[nextSellIndex];

  const avgPrices = candleData.map((item) => {
    return (item[Constants.ohlcvDefs.high] + item[Constants.ohlcvDefs.low]) / 2;
  });
  console.log({ priceStart, levels, startIndex });

  return 999;
};

function GridProfit(props) {
  console.log({ props });

  const { configuratorData, candleData } = props;
  const { priceLow, priceHigh, numSlices } = configuratorData;

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
