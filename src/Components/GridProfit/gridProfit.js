import React, { useEffect, useState } from "react";

import { Button, Form } from "react-bootstrap";
import { DataStore } from "@aws-amplify/datastore";
import { Bot } from "../../models";

import Constants from "../../Constants";

import css from "./gridProfit.module.scss";

const calcTotalProfit = ({ priceLow, priceHigh, numSlices }) => {
  return 999;
};

function GridProfit(props) {
  console.log({ props });

  const { priceLow, priceHigh, numSlices } = props;

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

  const totalProfit = calcTotalProfit({ priceLow, priceHigh, numSlices });

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
