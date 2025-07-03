
import { Chart as ReactChart } from 'react-charts';
import type { AxisOptions } from 'react-charts';


type MyDatum = { date: Date; value: number };

const MultiLineChart = () => {
  const data = [
    {
      label: 'Users',
      data: [
        { date: new Date('2024-01-01'), value: 500 },
        { date: new Date('2024-02-01'), value: 800 },
        { date: new Date('2024-03-01'), value: 1200 },
      ],
    },
    {
      label: 'Sales',
      data: [
        { date: new Date('2024-01-01'), value: 300 },
        { date: new Date('2024-02-01'), value: 900 },
        { date: new Date('2024-03-01'), value: 1000 },
      ],
    },
  ];

  const primaryAxis: AxisOptions<MyDatum> = {
    getValue: datum => datum.date,
    elementType: 'line',
  };

  const secondaryAxes: AxisOptions<MyDatum>[] = [
    {
      getValue: datum => datum.value,
    },
  ];

  return (
    <div className="w-full h-[400px]">
      <ReactChart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};

export default MultiLineChart;
