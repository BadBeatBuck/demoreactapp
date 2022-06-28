import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

import data from "./data";

// const data = [];

const options = {
  rangeSelector: {
    selected: 1,
  },

  rangeSelector: {
    allButtonsEnabled: true,
    selected: 2,
  },

  title: {
    text: "",
  },

  series: [
    {
      type: "candlestick",
      name: "AAPL Stock Price",
      data: data,
      showInNavigator: true,
      // dataGrouping: {
      //   units: [
      //     [
      //       "week", // unit name
      //       [1], // allowed multiples
      //     ],
      //     ["month", [1, 2, 3, 4, 6]],
      //   ],
      // },
    },
  ],
};

function Chart002(props) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries(props.series);
  }, [props.series]);

  // options.series[0].data = series;

  console.log({ series });

  return (
    <div className={props.className}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        updateArgs={[true, true, true, true, true, true, true]}
      />
    </div>
  );
}

export default Chart002;
