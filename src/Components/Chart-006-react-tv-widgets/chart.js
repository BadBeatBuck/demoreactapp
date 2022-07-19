import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const testOptions = {
  autosize: true,
  symbol: "NASDAQ:AAPL",
  interval: "1",
  theme: "dark",
  style: "1",
  locale: "en",
  toolbar_bg: "#f1f3f6",
  enable_publishing: false,
  allow_symbol_change: true,
  container_id: "tradingview_b461c",

  container_id: "watchlist-chart-demo",
  width: "100%",
  height: "100%",
  autosize: true,
  timezone: "exchange",
  theme: "dark",
  toolbar_bg: "#f1f3f6",
  withdateranges: true,
  allow_symbol_change: true,
  save_image: false,
  watchlist: ["BTCUSDT", "ETHUSDT"],
  locale: "en",
  studies: [
    "ROC@tv-basicstudies",
    "StochasticRSI@tv-basicstudies",
    "MASimple@tv-basicstudies",
  ],
};

function Chart006(props = {}) {
  const { options } = props;

  return <AdvancedRealTimeChart {...testOptions} {...options} />;
  // return <AdvancedRealTimeChart {...testOptions} />;
}

export default Chart006;
