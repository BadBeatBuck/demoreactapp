import React from "react";
import { useRef, useEffect } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const testOptions = {
  autosize: true,
  symbol: "NASDAQ:AAPL",
  interval: "1",
  timezone: "Etc/UTC",
  // theme: "light",
  theme: "dark",
  style: "1",
  locale: "en",
  toolbar_bg: "#f1f3f6",
  enable_publishing: false,
  allow_symbol_change: true,
  container_id: "tradingview_b461c",
};

function Chart006(props = {}) {
  const { options } = props;

  return <AdvancedRealTimeChart {...options} />;
  // return <AdvancedRealTimeChart {...testOptions} />;
}

export default Chart006;
