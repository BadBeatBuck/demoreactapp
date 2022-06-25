var ccxt = require("ccxt");
// console.log(ccxt.exchanges); // print all available exchanges

const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

const fetchCrypto = async (res) => {
  const ohlcv = await new ccxt.binance().fetchOHLCV("BTC/USDT", "1h");

  const index = 4;
  const lastPrice = ohlcv[ohlcv.length - 1][index]; // closing price
  const series = ohlcv.slice(-80).map((x) => x[index]); // closing price

  res.send({ express: series });
  return lastPrice;
};

// create a GET route
app.get("/express_backend", (req, res) => {
  fetchCrypto(res);
});
