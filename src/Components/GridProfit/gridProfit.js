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
  let startIndex = 0;
  levels.forEach((level, index) => {
    console.log({ priceStart, level, index });
    if (priceStart > level) {
      startIndex = index;
    }
  });

  return startIndex;
};

const getNextBuySellPrices = ({ currentLevelIndex, buy = true, levels }) => {
  let nextSellIndex;
  let nextBuyIndex;

  nextSellIndex = currentLevelIndex + 1;
  nextBuyIndex = currentLevelIndex - 1;

  const nextBuyPrice = levels[nextBuyIndex];
  const nextSellPrice = levels[nextSellIndex];

  return { nextBuyPrice, nextSellPrice };
};

const calcTotalProfit = ({ priceLow, priceHigh, numSlices, candleData }) => {
  const priceStart = candleData[0]?.[Constants.ohlcvDefs.high];
  // const priceEnd = last(candleData)?.[Constants.ohlcvDefs.high];

  const levels = getSliceLevels({
    priceLow,
    priceHigh,
    numSlices,
    candleData,
  });

  let currentLevelIndex = findStartIndex({ levels, priceStart });

  const buyEvents = [];
  const sellEvents = [];

  candleData.forEach((item) => {
    const highWick = item[Constants.ohlcvDefs.high];
    const lowWick = item[Constants.ohlcvDefs.low];

    const avgPrice =
      (item[Constants.ohlcvDefs.high] + item[Constants.ohlcvDefs.low]) / 2;

    const { nextBuyPrice, nextSellPrice } = getNextBuySellPrices({
      currentLevelIndex,
      levels,
    });
    console.log({ nextBuyPrice, nextSellPrice });

    if (highWick > nextSellPrice) {
      currentLevelIndex += 1;
      sellEvents.push(item);
    }

    if (lowWick <= nextBuyPrice) {
      currentLevelIndex -= 1;
      buyEvents.push(item);
    }
  });
  console.log({ sellEvents });

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
