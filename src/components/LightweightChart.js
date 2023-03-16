import React, { useEffect } from 'react';
import { createChart } from 'lightweight-charts';

const LightweightChart = ({seriesData}) => {
    
  // an empty array to hold the data for the chart
  let monthlyData = [];
    
  for (const key in seriesData) {
      let ele = {};
      ele.time = key;
      ele.value = parseInt(seriesData[key]['4. close']);
      monthlyData.push(ele);
  }
  console.log(`logging out monthlyData: ${monthlyData}`);
  let data = monthlyData.reverse();

  useEffect(() => {
    const chart = createChart(document.getElementById('chart'), { width: 600, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData(data);
  }, [data]);

  return (
    <div>
      <h1>LightweightChart</h1>
      <div id="chart" style={{padding:"50px"}} />
    </div>
    
  );
};

export default LightweightChart;