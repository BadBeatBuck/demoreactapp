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
import Hollowcandlestick from "highcharts/modules/hollowcandlestick.js";
import Boost from "highcharts/modules/boost";
import More from "highcharts/highcharts-more";

import cx from "classnames";

import getOptions from "./options";
import Constants from "../../Constants";

import css from "./chart.module.scss";

// const [options] = useState({...});

const addColumnChart = ({ candleData }) => {
  const columnBars = [];

  const bar = {
    name: "Range",
    enableMouseTracking: false,
    type: "arearange",
    lineWidth: 0,
    fillOpacity: 0.1,
    zIndex: 0,
  };

  candleData.forEach((item, index) => {
    if (index % 10 === 0 && candleData[index + 10]) {
      const { colors, min, max } = Constants.vertBars;

      const color = index % 20 === 0 ? colors.outer : colors.inner;

      const point1 = candleData[index];
      const point2 = candleData[index + 10];

      const areaMin = Constants.mainChart.min;
      const areaMax = Constants.mainChart.max;

      const data = [
        [point1[Constants.ohlcvDefs.time], areaMin, areaMax],
        [point2[Constants.ohlcvDefs.time], areaMin, areaMax],
      ];
      const newBar = { ...bar, data, color };
      columnBars.push(newBar);
    }
  });

  return columnBars;
};

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

    const data = [];
    for (let i = 0; i < numPoints; i++) {
      if (candleData?.[i]) {
        const newData = [candleData[i][Constants.ohlcvDefs.time], value];
        data.push(newData);
      }
    }

    const dummyData = [...Array(numPoints).keys()];
    dummyData.fill(value, 0, numPoints);
    const singleSeries = {
      data: data,
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

const addCandleChart = ({ candleData, priceLow, priceHigh }) => {
  const candleData2 = [];
  candleData.forEach((item) => {
    const { open, close } = Constants.ohlcvDefs;
    if (true) {
      // if (item[open] > item[close]) {
      const newItem = [...item];
      newItem.color = "black";
      newItem.lineColor = "black";
      newItem.marker = { color: "black", lineColor: "black" };

      candleData2.push(newItem);
    }
  });
  console.log({ candleData2 });

  const greenCandles = {
    // color: "green",
    // lineColor: "red",
    // fillColor: "yellow",
    type: "candlestick",
    enableMouseTracking: false,
    showInNavigator: true,
    id: "-stock-price1",
    name: " Stock Price",
    data: candleData2,
    dataGrouping: {
      forced: true,
      units: [
        ["minute", [1, 5, 15]],
        ["hour", [1]],
      ],
    },
  };

  return greenCandles;
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

const getChartMaxMin = ({ candleData, priceLow, priceHigh }) => {
  //
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
  Hollowcandlestick(HighStock);

  const chartComponent = useRef(null);

  useEffect(() => {
    const chart = chartComponent.current.chart;
    console.log("====================>>>>>render chart");
    // chart?.renderer
    //   .rect(100, 100, 30, 50, 5)
    //   .attr({
    //     "stroke-width": 2,
    //     stroke: "red",
    //     fill: "yellow",
    //     zIndex: 3,
    //   })
    //   .add();
  }, []);

  const { priceLow, priceHigh, candleData = [] } = props;

  const options2 = props.options || {};

  const className = cx(css.main, {
    [props.className]: !!props.className,
  });

  // const { minY, maxY } = getChartMaxMin({ candleData });
  const chartOptions = { minY: 10_000, maxY: 30_000 };

  const candleChart = addCandleChart({ candleData, priceLow, priceHigh });
  const gridLines = addGridlines({ candleData, priceLow, priceHigh });
  const columnBars = addColumnChart({ candleData });

  const serieses = [candleChart, ...gridLines, ...columnBars];

  const combinedOptions = {
    ...getOptions({ serieses }),
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
