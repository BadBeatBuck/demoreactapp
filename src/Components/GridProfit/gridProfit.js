import React, { useEffect, useState } from "react";

import { Button, Form } from "react-bootstrap";
import { DataStore } from "@aws-amplify/datastore";
import { Bot } from "../../models";

import Constants from "../../Constants";

import css from "./gridProfit.module.scss";

function GridProfit() {
  const params = {
    priceLow: 100,
    priceHigh: 200,
    numSlices: 12,
  };

  const [priceLow, setPriceLow] = useState(params.priceLow);
  const [priceHigh, setPriceHigh] = useState(params.priceHigh);
  const [numSlices, setNumSlices] = useState(params.numSlices);
  const [candleData, setCandleData] = useState([]);

  useEffect(() => {
    // fetchData();
  }, []);

  const totalProfit = 999;

  return (
    <div className={css.main}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>High Price</Form.Label>
          <Form.Text value={totalProfit} type="number" step="100" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default GridProfit;
