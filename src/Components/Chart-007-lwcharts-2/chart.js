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

  const createGridLines = ({ candleData, configuratorData }) => {
    const numSlices = 10;
    const gridLines = [];
    const priceLow2 = parseInt(configuratorData.priceLow);
    const priceHigh2 = parseInt(configuratorData.priceHigh);
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

  const addLines = ({ chart, configuratorData, candleData }) => {
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
          year: 2022,
          month: 1,
          day: 1,
        },
        value: 27.58405298746434,
      },
      {
        time: {
          year: 2022,
          month: 1,
          day: 2,
        },
        value: 31.74088841431117,
      },
    ];
    series.setData(data);

    const minimumPrice = 32;

    var lineWidth = 1;
    var priceLine = {
      price: minimumPrice,
      color: "#be1238",
      lineWidth: lineWidth,
      lineStyle: LineStyle.Dotted,
      // axisLabelVisible: false,
      axisLabelVisible: true,
      title: minimumPrice,
    };

    series.createPriceLine(priceLine);
  };

  const createChart2 = ({ configuratorData, candleData }) => {
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
    addLines({ chart, configuratorData, candleData });

    chart.timeScale().fitContent();
    return chart;
  };

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const { configuratorData, candleData } = props;

    const chart = createChart2({ candleData, configuratorData });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [props.candleData]);

  return <div className={css.main} ref={chartContainerRef} />;
};

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
}
