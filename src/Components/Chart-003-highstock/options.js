import Constants from "../../Constants";

const getOptions = ({ candleData, gridLines, columnBars }) => {
  const candleData2 = [];
  candleData.forEach((item) => {
    const { open, close } = Constants.ohlcvDefs;
    if (item[open] > item[close]) {
      const newItem = [...item];
      newItem.color = "black";
      newItem.lineColor = "black";
      newItem.marker = { color: "black", lineColor: "black" };

      candleData2.push(newItem);
    }
  });
  console.log({ candleData2 });

  const greenCandles = {
    // color: "green",
    // lineColor: "red",
    // fillColor: "yellow",
    type: "candlestick",
    enableMouseTracking: false,
    showInNavigator: true,
    id: "-stock-price1",
    name: " Stock Price",
    data: candleData2,
    dataGrouping: {
      forced: true,
      units: [
        ["minute", [1, 5, 15]],
        ["hour", [1]],
      ],
    },
  };

  const candleData3 = [];
  candleData.forEach((item) => {
    const { open, close } = Constants.ohlcvDefs;
    if (item[open] <= item[close]) {
      const newItem = [...item];

      candleData3.push(newItem);
    }
  });
  console.log({ candleData3 });

  const redCandles = {
    color: "red",
    fillColor: "yellow",
    type: "candlestick",
    // type: "hollowcandlestick",
    enableMouseTracking: false,
    showInNavigator: true,
    id: "-stock-price2",
    name: " Stock Price",
    data: candleData3,
    dataGrouping: {
      forced: true,
      units: [
        ["minute", [1, 5, 15]],
        ["hour", [1]],
      ],
    },
  };

  const options = {
    // plotOptions: {
    //   column: {
    //     stacking: "normal",
    //     dataLabels: {
    //       enabled: true,
    //     },
    //   },
    // },
    chart: {
      height: (9 / 16) * 100 + "%", // 16:9 ratio
      style: {
        // fontFamily: "serif",
        // height: null,
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
        min: Constants.mainChart.min,
        max: Constants.mainChart.max,
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
      greenCandles,
      // redCandles,
      ...gridLines,
      ...columnBars,
      // asdf,
      // asdf,
      // asdf,
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
  };
  return options;
};

export default getOptions;
