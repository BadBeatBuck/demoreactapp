import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const addColumnChart = ({ candleData }) => {
  const columnData = [
    {
      name: "Range",
      enableMouseTracking: false,
      data: ranges1,
      type: "arearange",
      lineWidth: 2,
      // linkedTo: ":previous",
      color: HighStock.getOptions().colors[0],
      fillOpacity: 0.3,
      zIndex: 0,
      // marker: {
      //   enabled: false,
      // },
    },
    {
      name: "Range",
      enableMouseTracking: false,
      data: ranges2,
      type: "arearange",
      lineWidth: 0,
      // linkedTo: ":previous",
      color: HighStock.getOptions().colors[1],
      fillOpacity: 0.3,
      zIndex: 0,
      marker: {
        enabled: false,
      },
    },
  ];
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
