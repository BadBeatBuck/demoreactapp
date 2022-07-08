import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const addGridlines = ({ gridLines }) => {
  const serieses = gridLines || [];

  const innerLineOptions = {
    color: "#f50057",
    lineWidth: 1,
    marker: {
      enabled: false,
    },
  };

  const outerLineOptions = {
    color: "#293592",
    lineWidth: 3,
    marker: {
      enabled: false,
    },
  };

  serieses.forEach((item, index) => {
    if (index === 0 || index === serieses.length - 1) {
      Object.assign(item, outerLineOptions);
    } else {
      Object.assign(item, innerLineOptions);
    }
  });
  return serieses;
};

const addColumnChart = ({ gridLines }) => {
  const newChart = {
    chart: {
      type: "column",
    },
    title: {
      text: "Stacked column chart",
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total fruit consumption",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          // color:
          //   // theme
          //   (HighStock.defaultOptions.title.style &&
          //     HighStock.defaultOptions.title.style.color) ||
          //   "gray",
          textOutline: "none",
        },
      },
    },
    legend: {
      align: "right",
      x: -30,
      verticalAlign: "top",
      y: 25,
      floating: true,
      // backgroundColor:
      //   HighStock.defaultOptions.legend.backgroundColor || "white",
      borderColor: "#CCC",
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "John",
        data: [5, 3, 4, 7, 2],
      },
      {
        name: "Jane",
        data: [2, 2, 3, 2, 1],
      },
      {
        name: "Joe",
        data: [3, 4, 4, 2, 5],
      },
    ],
  };

  return newChart;
};

const ranges = [
  [1246406400000, 14.3, 27.7],
  [1246492800000, 14.5, 27.8],
  [1246579200000, 15.5, 29.6],
  [1246665600000, 16.7, 30.7],
  [1246752000000, 16.5, 25.0],
  [1246838400000, 17.8, 25.7],
  [1246924800000, 13.5, 24.8],
  [1247011200000, 10.5, 21.4],
  [1247097600000, 9.2, 23.8],
  [1247184000000, 11.6, 21.8],
  [1247270400000, 10.7, 23.7],
  [1247356800000, 11.0, 23.3],
  [1247443200000, 11.6, 23.7],
  [1247529600000, 11.8, 20.7],
  [1247616000000, 12.6, 22.4],
  [1247702400000, 13.6, 19.6],
  [1247788800000, 11.4, 22.6],
  [1247875200000, 13.2, 25.0],
  [1247961600000, 14.2, 21.6],
  [1248048000000, 13.1, 17.1],
  [1248134400000, 12.2, 15.5],
  [1248220800000, 12.0, 20.8],
  [1248307200000, 12.0, 17.1],
  [1248393600000, 12.7, 18.3],
  [1248480000000, 12.4, 19.4],
  [1248566400000, 12.6, 19.9],
  [1248652800000, 11.9, 20.2],
  [1248739200000, 11.0, 19.3],
  [1248825600000, 10.8, 17.8],
  [1248912000000, 11.8, 18.5],
  [1248998400000, 10.8, 16.1],
];

const getOptions = ({ data, gridLines }) => {
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
        showInNavigator: true,
        id: "-stock-price",
        name: " Stock Price",
        data: data,
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
      ...addGridlines({ gridLines }),
      {
        name: "Range",
        data: ranges,
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        color: HighStock.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false,
        },
      },

      // ...addColumnChart({ gridLines }),
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
