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
// import "./style.css";

function Chart003(props) {
  Indicators(HighStock);
  DragPanes(HighStock);
  AnnotationsAdvanced(HighStock);
  PriceIndicator(HighStock);
  FullScreen(HighStock);
  StockTools(HighStock);
  Boost(HighStock);

  return (
    <HighchartsReact
      highcharts={HighStock}
      constructorType="stockChart"
      containerProps={{ style: { height: "400px" } }}
      options={{
        chart: {
          renderTo: "container",
        },
        rangeSelector: {
          x: 20,
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
            id: "-stock-price",
            name: " Stock Price",
            data: props.ohlc,
            dataGrouping: {
              forced: true,
              units: [
                ["day", [1]],
                ["week", [1]],
                ["month", [1, 3, 6]],
              ],
            },
          },
          {
            type: "column",
            id: "-volume",
            name: " Volume",
            data: props.volume,
            yAxis: 1,
          },
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
              "typeChange",
              "currentPriceIndicator",
              "fullScreen",
            ],
          },
        },
      }}
    />
  );
}

export default Chart003;
