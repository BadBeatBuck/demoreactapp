import Highcharts from "highcharts/highstock";
// import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

const options = {
  title: {
    text: "",
  },
  chart: {
    // type: "candlestick",
    type: "line",
  },
  legend: { enabled: false },
  series: [],
  tooltip: {
    enabled: false,
  },
  rangeSelector: {
    selected: 1,
  },

  yAxis: {
    startOnTick: false,
    endOnTick: false,
  },
  plotOptions: {
    series: {
      enableMouseTracking: false,
      // states: {
      //   hover: {
      //     enabled: false,
      //   },
      //   inactive: {
      //     opacity: 1,
      //   },
      // },
    },
    line: {
      marker: {
        symbol: "circle",
        // enabled: true,
        // enabled: false,
      },
      lineWidth: 1,
    },
  },
};

const data = [];

const options2 = {
  rangeSelector: {
    selected: 1,
  },

  title: {
    text: "AAPL Stock Price",
  },

  series: [
    {
      type: "candlestick",
      name: "AAPL Stock Price",
      data: data,
      dataGrouping: {
        units: [
          [
            "week", // unit name
            [1], // allowed multiples
          ],
          ["month", [1, 2, 3, 4, 6]],
        ],
      },
    },
  ],
};

function Chart001(props) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries(props.series);
  }, [props.series]);

  options.series = series;

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

  const tokenLineOptions = {
    color: "#aaaaaa",
    marker: {
      enabled: true,
    },
    lineWidth: 3,
  };

  options.series.forEach((item, index) => {
    if (index === 1 || index === options.series.length - 1) {
      Object.assign(item, outerLineOptions);
    } else if (index === 0) {
      Object.assign(item, tokenLineOptions);
    } else {
      Object.assign(item, innerLineOptions);
    }
  });

  const combinedOptions = { ...options, ...props.options };

  console.log("render chart ++++++++++++++++++++++++++++++++++++++++++++++");

  return (
    <div className={props.className}>
      <HighchartsReact
        highcharts={Highcharts}
        // options={options2}
        options={combinedOptions}
        updateArgs={[true, true, true, true, true, true, true]}
      />
    </div>
  );
}

export default Chart001;
