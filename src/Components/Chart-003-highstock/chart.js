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

// return <HighchartsReact ref={chartComponent} highcharts={Highcharts} options={options} />;

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

  const combinedOptions = {
    ...getOptions({ candleData, priceLow, priceHigh }),
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
