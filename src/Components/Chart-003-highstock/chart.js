import React from "react";
import { useRef, useEffect } from "react";

import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Indicators from "highcharts/indicators/indicators-all.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import FullScreen from "highcharts/modules/full-screen.js";
import StockTools from "highcharts/modules/stock-tools.js";
import Boost from "highcharts/modules/boost";
import More from "highcharts/highcharts-more";

import cx from "classnames";

import css from "./chart.module.scss";
import getOptions from "./options";

// const [options] = useState({...});

const createGridLines = ({ candleData, priceLow, priceHigh }) => {
  const numSlices = 10;
  const gridLines = [];
  const priceLow2 = parseInt(priceLow);
  const priceHigh2 = parseInt(priceHigh);
  const numSlices2 = parseInt(numSlices);

  const stepSize = (priceHigh2 - priceLow2) / numSlices2;

  for (let i = 0; i < numSlices2 + 1; i++) {
    const value = priceLow2 + i * stepSize;
    const numPoints = candleData.length;

    const data2 = [];
    for (let i = 0; i < numPoints; i++) {
      if (candleData?.[i]) {
        const newData = [candleData[i][0], value];
        data2.push(newData);
      }
    }

    const dummyData = [...Array(numPoints).keys()];
    dummyData.fill(value, 0, numPoints);
    const singleSeries = {
      data: data2,
      dataGrouping: { enabled: false },
      tooltip: { valueDecimals: 2 },
      type: "line",
      name: " Volume",
      enableMouseTracking: false,
    };
    gridLines.push(singleSeries);
  }

  return { gridLines };
};

const addGridlines = ({ candleData, priceLow, priceHigh }) => {
  const { gridLines } = createGridLines({ candleData, priceLow, priceHigh });
  console.log({ gridLines });
  const serieses = gridLines || [];

  const innerLineOptions = {
    color: "#f50057",
    lineWidth: 1,
    marker: {
      enabled: false,
    },
  };

  const outerLineOptions = {
    color: "#293592",
    lineWidth: 3,
    marker: {
      enabled: false,
    },
  };

  serieses.forEach((item, index) => {
    if (index === 0 || index === serieses.length - 1) {
      Object.assign(item, outerLineOptions);
    } else {
      Object.assign(item, innerLineOptions);
    }
  });
  return serieses;
};

function Chart003(props = {}) {
  Indicators(HighStock);
  DragPanes(HighStock);
  AnnotationsAdvanced(HighStock);
  PriceIndicator(HighStock);
  FullScreen(HighStock);
  StockTools(HighStock);
  Boost(HighStock);
  More(HighStock);

  const chartComponent = useRef(null);

  useEffect(() => {
    const chart = chartComponent.current.chart;
    console.log("====================>>>>>render chart");
    chart?.renderer
      .rect(100, 100, 30, 50, 5)
      .attr({
        "stroke-width": 2,
        stroke: "red",
        fill: "yellow",
        zIndex: 3,
      })
      .add();
  }, []);

  const { priceLow, priceHigh, candleData = [] } = props;

  const options2 = props.options || {};

  const className = cx(css.main, {
    [props.className]: !!props.className,
  });

  const gridLines = addGridlines({ candleData, priceLow, priceHigh });

  const combinedOptions = {
    ...getOptions({ candleData, gridLines }),
    ...options2,
  };

  return (
    <div className={className}>
      <HighchartsReact
        ref={chartComponent}
        highcharts={HighStock}
        constructorType="stockChart"
        options={combinedOptions}
      />
    </div>
  );
}

export default Chart003;
