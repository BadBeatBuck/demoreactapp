var ccxt = require("ccxt");
console.log(ccxt.exchanges); // print all available exchanges

const express = require("express"); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5001; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

const fetchCrypto = async () => {
  const ohlcv = await new ccxt.binance().fetchOHLCV("BTC/USDT", "1h");

  const lastPrice = ohlcv[ohlcv.length - 1][index]; // closing price
  const series = ohlcv.slice(-80).map((x) => x[index]); // closing price

  console.log({ lastPrice });
};

// create a GET route
app.get("/express_backend", (req, res) => {
  fetchCrypto();

  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
}); //Line 11
