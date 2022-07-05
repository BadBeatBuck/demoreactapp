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

function Chart003(props) {
  Indicators(HighStock);
  DragPanes(HighStock);
  AnnotationsAdvanced(HighStock);
  PriceIndicator(HighStock);
  FullScreen(HighStock);
  StockTools(HighStock);
  Boost(HighStock);

  const className = cx(css.main, {
    [props.className]: !!props.className,
  });

  return (
    <div className={className}>
      <HighchartsReact
        highcharts={HighStock}
        constructorType="stockChart"
        options={{
          chart: {
            style: {
              fontFamily: "serif",
            },
            renderTo: "container",
            animation: false,
          },
          rangeSelector: {
            selected: 1,
            x: 20, // indent x
            buttons: [
              {
                type: "day",
                count: 1,
                text: "1d",
                // events: {
                //   click: function () {
                //     alert("Clicked button");
                //   },
                // },
              },
              {
                type: "day",
                count: 2,
                text: "2d",
              },
              {
                type: "all",
                text: "All",
              },
            ],
          },
          yAxis: [
            {
              labels: {
                align: "left",
              },
              height: "80%",
              resize: {
                enabled: true,
              },
            },
            {
              labels: {
                align: "left",
              },
              top: "80%",
              height: "20%",
              offset: 0,
            },
          ],

          series: [
            {
              type: "candlestick",
              showInNavigator: true,
              navigatorOptions: {},
              id: "-stock-price",
              name: " Stock Price",
              // data: data,
              data: props.data,
              dataGrouping: {
                forced: true,
                units: [
                  // ["minute", [15]],
                  ["minute", [1, 5, 15]],
                  ["hour", [1]],
                  // ["day", [1]],
                  // ["week", [1]],
                  // ["month", [1, 3, 6]],
                ],
              },
            },
            // {
            //   type: "column",
            //   id: "-volume",
            //   name: " Volume",
            //   data: props.volume,
            //   yAxis: 1,
            // },
          ],
          responsive: {
            rules: [
              {
                condition: {
                  maxWidth: 800,
                },
                chartOptions: {
                  rangeSelector: {
                    inputEnabled: false,
                  },
                },
              },
            ],
          },
          stockTools: {
            gui: {
              buttons: [
                "indicators",
                // "typeChange",
                "currentPriceIndicator",
                "fullScreen",
              ],
            },
          },
        }}
      />
    </div>
  );
}

export default Chart003;
