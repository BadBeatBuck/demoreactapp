import React from "react";
import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Indicators from "highcharts/indicators/indicators-all.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import FullScreen from "highcharts/modules/full-screen.js";
import StockTools from "highcharts/modules/stock-tools.js";
import Boost from "highcharts/modules/boost";
import cx from "classnames";

import css from "./chart.module.scss";
import getOptions from "./options";

function Chart003(props = {}) {
  Indicators(HighStock);
  DragPanes(HighStock);
  AnnotationsAdvanced(HighStock);
  PriceIndicator(HighStock);
  FullScreen(HighStock);
  StockTools(HighStock);
  Boost(HighStock);

  const options2 = props.options || {};

  const className = cx(css.main, {
    [props.className]: !!props.className,
  });

  const combinedOptions = { ...getOptions(props.data || []), ...options2 };

  return (
    <div className={className}>
      <HighchartsReact
        highcharts={HighStock}
        constructorType="stockChart"
        options={combinedOptions}
      />
    </div>
  );
}

export default Chart003;
