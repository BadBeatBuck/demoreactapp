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

const calcTotalProfit = ({ configuratorData, candleData }) => {
  const priceStart = candleData[0]?.[Constants.ohlcvDefs.high];
  // const priceEnd = last(candleData)?.[Constants.ohlcvDefs.high];

  const { priceLow, priceHigh, numSlices, stakeUsd = 1000 } = configuratorData;

  const levels = getSliceLevels({
    priceLow,
    priceHigh,
    numSlices,
    candleData,
  });

  let currentLevelIndex = findStartIndex({ levels, priceStart });

  const txFeePct = 0.08 / 10;
  const deltaPerSliceUsd = (priceHigh - priceLow) / numSlices;
  const spentPerSlice = stakeUsd / numSlices;
  const incomePerSlice = spentPerSlice * 1;
  const profitPerSlice = stakeUsd / numSlices;
  let totalProfit = 0;
  let totalTokens = 0;
  let totalSpentOnTokens = 0;

  const buyEvents = [];
  const sellEvents = [];

  candleData.forEach((item) => {
    const highWick = item[Constants.ohlcvDefs.high];
    const lowWick = item[Constants.ohlcvDefs.low];

    const { nextBuyPrice, nextSellPrice } = getNextBuySellPrices({
      currentLevelIndex,
      levels,
    });
    // console.log({ nextBuyPrice, nextSellPrice });

    if (highWick > nextSellPrice) {
      const buyPrice = nextSellPrice - deltaPerSliceUsd;
      const priceDeltaPct = ((nextSellPrice - buyPrice) / nextSellPrice) * 100;

      const tokensBought = buyPrice * spentPerSlice * (1 - txFeePct);
      const incomeReceived = (tokensBought / nextBuyPrice) * (1 - txFeePct);
      const profitUsd = incomeReceived - spentPerSlice;
      const gainPerSlicePct = (nextSellPrice / buyPrice - 1) * 100;

      totalProfit += profitPerSlice;
      currentLevelIndex += 1;
      totalSpentOnTokens -= spentPerSlice;
      sellEvents.push(item);
      console.log({
        buyPrice,
        nextSellPrice,
        priceDeltaPct,
        gainPerSlicePct,
        profitUsd,
      });
    }

    if (lowWick <= nextBuyPrice) {
      totalSpentOnTokens += spentPerSlice;
      currentLevelIndex -= 1;
      buyEvents.push(item);
    }
  });
  console.log({ sellEvents, buyEvents, totalSpentOnTokens, deltaPerSliceUsd });

  return { spentPerSlice, totalProfit };
};

function GridProfit(props) {
  console.log({ props });

  const { configuratorData, candleData } = props;
  // const { priceLow, priceHigh, numSlices } = configuratorData;

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

  const { spentPerSlice, totalProfit } = calcTotalProfit({
    configuratorData,
    candleData,
  });

  return (
    <div className={css.main}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Cost Per Slice (USD)</Form.Label>
          <Form.Control value={spentPerSlice} type="number" step="100" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Total Profit</Form.Label>
          <Form.Control value={totalProfit} type="number" step="100" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default GridProfit;
