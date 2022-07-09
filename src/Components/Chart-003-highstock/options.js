import HighStock from "highcharts/highstock";

const addColumnChart = ({ candleData }) => {
  const bar = {
    name: "Range",
    enableMouseTracking: false,
    type: "arearange",
    lineWidth: 1,
    // linkedTo: ":previous",
    color: "green",
    fillOpacity: 0.1,
    zIndex: 0,
  };

  const buyBar = {
    ...bar,
    color: "green",
    data: ranges1,
  };

  const sellBar = {
    ...bar,
    color: "red",
    data: ranges2,
  };

  const columnData = [buyBar, sellBar];
  return columnData;
};

const ranges1 = [
  [1657116600000, 20_000, 21_100],
  [1657200000000, 20_100, 21_200],
  // [1657245000000, 20_200, 21_300],
];
const ranges2 = [
  // [1657116600000, 20_000, 21_100],
  [1657200000000, 20_100, 21_200],
  [1657245000000, 20_200, 21_300],
];

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
