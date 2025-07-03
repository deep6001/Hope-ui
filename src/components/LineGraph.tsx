'use client';

import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MultiLineChart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: 'Users & Sales Over Time',
    },
    axisX: {
      title: 'Date',
      valueFormatString: 'MMM YYYY',
    },
    axisY: {
      title: 'Value',
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: 'spline',
        name: 'Users',
        showInLegend: true,
        dataPoints: [
          { x: new Date('2024-01-01'), y: 500 },
          { x: new Date('2024-02-01'), y: 800 },
          { x: new Date('2024-03-01'), y: 1200 },
        ],
      },
      {
        type: 'spline',
        name: 'Sales',
        showInLegend: true,
        dataPoints: [
          { x: new Date('2024-01-01'), y: 300 },
          { x: new Date('2024-02-01'), y: 900 },
          { x: new Date('2024-03-01'), y: 1000 },
        ],
      },
    ],
  };

  return (
    <div className="w-full h-[400px]">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default MultiLineChart;
