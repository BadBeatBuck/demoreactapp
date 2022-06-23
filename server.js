var ccxt = require("ccxt");
// console.log(ccxt.exchanges); // print all available exchanges

const express = require("express"); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5001; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

const fetchCrypto = async (res) => {
  const ohlcv = await new ccxt.binance().fetchOHLCV("BTC/USDT", "1h");

  const index = 4;
  const lastPrice = ohlcv[ohlcv.length - 1][index]; // closing price
  const series = ohlcv.slice(-80).map((x) => x[index]); // closing price

  // console.log({ lastPrice });
  res.send({ express: series }); //Line 10
  // res.send({ express: lastPrice }); //Line 10
  return lastPrice;
};

// create a GET route
app.get("/express_backend", (req, res) => {
  fetchCrypto(res);
});
