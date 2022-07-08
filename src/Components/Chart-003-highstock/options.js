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

const getOptions = ({ data, gridLines }) => {
  // console.log({ gridLines, data });
  const options = {
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
        // states: {
        //   hover: {
        //     enabled: false,
        //   },
        //   inactive: {
        //     opacity: 1,
        //   },
        // },
        type: "candlestick",
        showInNavigator: true,
        // navigatorOptions: {},
        id: "-stock-price",
        name: " Stock Price",
        data: data,
        // data: props.data,
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
      // ...serieses,
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

// Highcharts.chart('container', {
//   chart: {
//       type: 'column'
//   },
//   title: {
//       text: 'Stacked column chart'
//   },
//   xAxis: {
//       categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
//   },
//   yAxis: {
//       min: 0,
//       title: {
//           text: 'Total fruit consumption'
//       },
//       stackLabels: {
//           enabled: true,
//           style: {
//               fontWeight: 'bold',
//               color: ( // theme
//                   Highcharts.defaultOptions.title.style &&
//                   Highcharts.defaultOptions.title.style.color
//               ) || 'gray',
//               textOutline: 'none'
//           }
//       }
//   },
//   legend: {
//       align: 'right',
//       x: -30,
//       verticalAlign: 'top',
//       y: 25,
//       floating: true,
//       backgroundColor:
//           Highcharts.defaultOptions.legend.backgroundColor || 'white',
//       borderColor: '#CCC',
//       borderWidth: 1,
//       shadow: false
//   },
//   tooltip: {
//       headerFormat: '<b>{point.x}</b><br/>',
//       pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
//   },
//   plotOptions: {
//       column: {
//           stacking: 'normal',
//           dataLabels: {
//               enabled: true
//           }
//       }
//   },
//   series: [{
//       name: 'John',
//       data: [5, 3, 4, 7, 2]
//   }, {
//       name: 'Jane',
//       data: [2, 2, 3, 2, 1]
//   }, {
//       name: 'Joe',
//       data: [3, 4, 4, 2, 5]
//   }]
// });
