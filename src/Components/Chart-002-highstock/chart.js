import Highcharts from "highcharts/highstock";
// import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

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

function Chart002(props) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries(props.series);
  }, [props.series]);

  options2.series[0].data = series;

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

  // options2.series.forEach((item, index) => {
  //   if (index === 1 || index === options.series.length - 1) {
  //     Object.assign(item, outerLineOptions);
  //   } else if (index === 0) {
  //     Object.assign(item, tokenLineOptions);
  //   } else {
  //     Object.assign(item, innerLineOptions);
  //   }
  // });

  // const combinedOptions = { ...options, ...props.options };

  console.log("render chart ++++++++++++++++++++++++++++++++++++++++++++++");

  console.log({ series });

  return (
    <div className={props.className}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options2}
        updateArgs={[true, true, true, true, true, true, true]}
      />
    </div>
  );
}

export default Chart002;
