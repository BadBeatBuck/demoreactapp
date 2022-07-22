// https://tradingview.github.io/lightweight-charts/tutorials/react/simple
import React, { useEffect, useRef } from "react";
import css from "./chart.module.scss";

import {
  createChart,
  ColorType,
  LineStyle,
  CrosshairMode,
} from "lightweight-charts";
import Constants from "../../Constants";

export const ChartComponent = (props) => {
  const {
    colors: {},
  } = props;
  const chartContainerRef = useRef();

  const addCandles = ({ chart }) => {
    const candlestickSeries = chart.addCandlestickSeries({
      priceScaleId: "left",
      upColor: "#4bffb5",
      downColor: "#ff4976",
      borderDownColor: "#ff4976",
      borderUpColor: "#4bffb5",
      wickDownColor: "#838ca1",
      wickUpColor: "#838ca1",
    });

    const cleanedData = transformData({ data: props.candleData });
    candlestickSeries.setData(cleanedData);
  };

  const addLines = ({ chart }) => {
    var series = chart.addLineSeries({
      color: "rgb(0, 120, 255)",
      lineWidth: 1,
      crosshairMarkerVisible: false,
      lastValueVisible: false,
      priceLineVisible: false,
    });

    var data = [
      {
        time: {
          year: 2018,
          month: 1,
          day: 1,
        },
        value: 27.58405298746434,
      },
      {
        time: {
          year: 2018,
          month: 1,
          day: 2,
        },
        value: 31.74088841431117,
      },
    ];
    series.setData(data);

    var minimumPrice = data[0].value;
    var maximumPrice = minimumPrice;
    for (var i = 1; i < data.length; i++) {
      var price = data[i].value;
      if (price > maximumPrice) {
        maximumPrice = price;
      }
      if (price < minimumPrice) {
        minimumPrice = price;
      }
    }

    var lineWidth = 1;
    var minPriceLine = {
      price: minimumPrice,
      color: "#be1238",
      lineWidth: lineWidth,
      lineStyle: LineStyle.Solid,
      axisLabelVisible: true,
      title: "minimum price",
    };

    series.createPriceLine(minPriceLine);
  };

  const createChart2 = ({ candleData }) => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      rightPriceScale: {
        visible: true,
        borderColor: "rgba(197, 203, 206, 1)",
      },
      leftPriceScale: {
        visible: true,
        borderColor: "rgba(197, 203, 206, 1)",
      },
      handleScroll: {
        vertTouchDrag: false,
      },
      layout: {
        backgroundColor: "#253248",
        textColor: "rgba(255, 255, 255, 0.9)",
      },
      grid: {
        vertLines: {
          color: "#334158",
        },
        horzLines: {
          color: "#334158",
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: "#485c7b",
      },
      timeScale: {
        borderColor: "#485c7b",
      },
    });

    addCandles({ chart });
    addLines({ chart });

    chart.timeScale().fitContent();
    return chart;
  };

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart2({ candleData: props.candleData });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [props.candleData]);

  return <div className={css.main} ref={chartContainerRef} />;
};

const initialData = [];

const transformData = ({ data }) => {
  const output = data.map((item) => {
    const defs = Constants.ohlcvDefs;
    const { open, close, high, low, time } = defs;

    var d = new Date(item[time]);
    const time2 = Math.floor(d.getTime() / 1000);

    const newItem = {
      close: item[close],
      high: item[high],
      low: item[low],
      open: item[open],
      time: time2,
    };
    return newItem;
  });
  return output;
};

export function Chart007(props) {
  return <ChartComponent {...props} />;
  // return <ChartComponent {...props} data={initialData} />;
}
