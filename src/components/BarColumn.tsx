
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

// Register chart types
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

// Column chart data
const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Revenue',
      data: [120, 190, 300, 500, 200],
      backgroundColor: 'rgba(59, 130, 246, 0.7)', // Tailwind blue-500
    },
  ],
};

// Column chart options
const columnOptions = {
    indexAxis: 'x' as const, // Column chart
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Column Chart' },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100, // Show ticks every 100
          callback: function (value: number | string) {
            return value; // You can also return `$${value}` or other formatting
          },
        },
      },
    },
  };
  

// Pie chart data
const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: 'Users',
      data: [300, 50, 100, 80, 120],
      backgroundColor: [
        '#f87171', // red-400
        '#60a5fa', // blue-400
        '#facc15', // yellow-400
        '#34d399', // green-400
        '#a78bfa', // purple-400
      ],
    },
  ],
};

// Pie chart options
const pieOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'bottom' as const },
    title: { display: true, text: 'Pie Chart' },
  },
};

const BarColumn = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4  justify-center min-w-[500px]">
      {/* Column Chart */}
      <div className="w-full sm:w-[45%] bg-white p-4 shadow-md rounded">
        <Bar data={barData} options={columnOptions} />
      </div>

      {/* Pie Chart */}
      <div className="w-full sm:w-[45%] bg-white p-4 shadow-md rounded">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default BarColumn;
