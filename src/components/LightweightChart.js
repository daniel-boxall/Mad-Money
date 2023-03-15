import React, { Component } from 'react';
import { createChart } from 'lightweight-charts';

class LightweightChart extends Component {
  componentDidMount() {
    const chart = createChart(document.getElementById('chart'), { width: 600, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: '2023-03-11', value: 80.01 },
      { time: '2023-03-12', value: 96.63 },
      { time: '2023-03-13', value: 76.64 },
      { time: '2023-03-14', value: 81.89 },
      { time: '2023-03-15', value: 74.43 },
      { time: '2023-03-16', value: 80.01 },
      { time: '2023-03-17', value: 96.63 },
      { time: '2023-03-18', value: 76.64 },
      { time: '2023-03-19', value: 81.89 },
      { time: '2023-03-20', value: 74.43 },
  ]);
  }

  render() {
    return (
      <div>
        <h1>LightweightChart</h1>
        <div id="chart" style={{padding: "50px"}}/>
      </div>
    );
  }
}

export default LightweightChart;