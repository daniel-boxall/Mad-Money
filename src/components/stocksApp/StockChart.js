import React from "react";
import { createChart } from "lightweight-charts";
import './stockchart.css';

const chart = {
 
}
class StockChart extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  componentDidMount() {
    // create chart when component mounts
    this.createChart();
  }

  componentDidUpdate(prevProps) {
    const { seriesData } = this.props;
    // remove previous chart instance and create new one when seriesData prop changes
    if (seriesData !== prevProps.seriesData) {
      this.chart.remove();
      this.createChart();
    }
  }

  componentWillUnmount() {
    // remove chart instance when component unmounts
    if (this.chart) {
      this.chart.remove();
    }
  }

  createChart() {
    const { seriesData, company, date } = this.props;
    let monthlyData = [];
    // handle api call data, create new array of objects for lightweight chart
    for (const key in seriesData) {
      let ele = {};
      ele.time = key;
      ele.value = parseInt(seriesData[key]["4. close"]);
      monthlyData.push(ele);
    }
    // reverse the array as is required by lightweight chart
    let data = monthlyData.reverse();
    // create new chart instance
    this.chart = createChart(document.getElementById('chart'), { width: 400, height: 200 });
    const lineSeries = this.chart.addLineSeries();
    lineSeries.setData(data);

    this.chart = createChart(document.getElementById("chart"), {
      width: 400,
      height: 200,
      layout: {
        textColor: "#a5a9ad",
        background: {
          type: "solid",
          color: "#FFFFFF",
        },
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
      },
      crosshair: {
        vertLine: {
          width: 2,
          color: "#a5a9ad",
          style: 0,
        },
        horzLine: {
          visible: false,
          labelVisible: false,
        },
      },
      grid: {
        vertLines: {
          color: "rgba(42, 46, 57, 0)",
        },
        horzLines: {
          color: "rgba(42, 46, 57, 0)",
        },
      },
    });

    var areaSeries = this.chart.addAreaSeries({
      topColor: "rgba(38, 198, 218, 0.56)",
      bottomColor: "rgba(38, 198, 218, 0.04)",
      lineColor: "rgba(38, 198, 218, 1)",
      lineWidth: 2,
      crossHairMarkerVisible: false,
    });
    areaSeries.setData(data);

    document.getElementById("chart").style.position = "relative";
    // add legend
    var legend = document.createElement("div");
    legend.classList.add("legend");
    document.getElementById("chart").appendChild(legend);
    // legend content
    var firstRow = document.createElement("div");
    var secondRow = document.createElement("div");
    firstRow.innerText = company;
    secondRow.innerText = date;
    firstRow.style.color = "#2b2b2b";
    secondRow.style.color = "#2b2b2b";
    legend.appendChild(firstRow);
    legend.appendChild(secondRow);

  }


  render() {
    return (
      <div >
        <h1>StockChart</h1>
        <div id="chart" style={{ "margin-bottom": "50px" }} />
      </div>
    )
  }
  
}
export default StockChart;

