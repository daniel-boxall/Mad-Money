import React from 'react';
import { createChart } from 'lightweight-charts';

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
    const { seriesData } = this.props;
    let monthlyData = [];
    // handle api call data, create new array of objects for lightweight chart
    for (const key in seriesData) {
      let ele = {};
      ele.time = key;
      ele.value = parseInt(seriesData[key]['4. close']);
      monthlyData.push(ele);
    }
    // reverse the array as is required by lightweight chart
    let data = monthlyData.reverse();
    // create new chart instance
    this.chart = createChart(document.getElementById('chart'), { width: 600, height: 300 });
    const lineSeries = this.chart.addLineSeries();
    lineSeries.setData(data);
  }

  render() {
    return (
      <div>
        <h1>StockChart</h1>
        <div id="chart" style={{padding:"50px"}} />
      </div>
    );
  }
}

export default StockChart;
