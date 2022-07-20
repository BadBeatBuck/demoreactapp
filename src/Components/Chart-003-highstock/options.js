import Constants from "../../Constants";

const getOptions = ({ serieses, chartOptions = {} }) => {
  console.log({ chartOptions });
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
        min: chartOptions.chartMin,
        max: chartOptions.chartMax,
        // min: Constants.mainChart.min,
        // max: Constants.mainChart.max,
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

    series: serieses,
    responsive: {
      rules: [
        {
          condition: {
            // maxWidth: 800,
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

    annotations: [
      {
        labels: [
          {
            point: {
              x: 1658196900000,
              y: 22_000,
              xAxis: 0,
              yAxis: 0,
            },
          },
          {
            point: {
              x: 0,
              y: 22_000,
            },
          },
          {
            point: {
              x: 5,
              y: 22_500,
              xAxis: 0,
            },
          },
        ],
      },
    ],
  };
  return options;
};

export default getOptions;
