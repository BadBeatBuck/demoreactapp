import Highcharts, { objectEach } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

const options = {
  title: {
    text: "",
  },
  legend: { enabled: false },
  series: [],
  rangeSelector: {
    selected: 1,
  },

  yAxis: {
    // min: 20500,
    // max: 21500,
    startOnTick: false,
    endOnTick: false,
  },
  plotOptions: {
    line: {
      marker: {
        symbol: "circle",
        enabled: false,
      },
      lineWidth: 1,
    },
  },
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
  // console.log({ combinedOptions });

  console.log("render chart ++++++++++++++++++++++++++++++++++++++++++++++");

  // console.log({ options });
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={combinedOptions}
        // options={options}
        updateArgs={[true, true, true, true, true, true, true]}
      />
    </div>
  );
}

export default Chart001;
