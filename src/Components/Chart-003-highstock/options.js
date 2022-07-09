import Constants from "../../Constants";

const addColumnChart = ({ candleData }) => {
  const columnBars = [];

  const bar = {
    name: "Range",
    enableMouseTracking: false,
    type: "arearange",
    lineWidth: 1,
    fillOpacity: 0.1,
    zIndex: 0,
  };

  candleData.forEach((item, index) => {
    if (index % 10 === 0 && candleData[index + 10]) {
      const color = index % 20 === 0 ? "red" : "green";

      const point1 = candleData[index];
      const point2 = candleData[index + 10];

      const areaMin = 20_000;
      const areaMax = 22_500;

      const data = [
        [point1[Constants.ohlvDefs.time], areaMin, areaMax],
        [point2[Constants.ohlvDefs.time], areaMin, areaMax],
      ];
      const newBar = { ...bar, data, color };
      columnBars.push(newBar);
    }
  });

  return columnBars;
};

const getOptions = ({ candleData, gridLines }) => {
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
        min: 20_000,
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
        enableMouseTracking: false,
        showInNavigator: true,
        id: "-stock-price",
        name: " Stock Price",
        data: candleData,
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
      ...gridLines,

      ...addColumnChart({ candleData }),
      // {
      //   name: "John",
      //   data: [5, 3, 4, 7, 2],
      // },
      // {
      //   name: "Jane",
      //   data: [2, 2, 3, 2, 1],
      // },
      // {
      //   name: "Joe",
      //   data: [3, 4, 4, 2, 5],
      // },
      // {
      //   data: [
      //     [Date.UTC(2022, 6, 6), 21_100],
      //     // [Date.UTC(2022, 7, 7), 20_000],
      //     // [Date.UTC(2022, 7, 7), 20_000],
      //   ],
      //   type: "column",
      // },
    ],

    // ],
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
