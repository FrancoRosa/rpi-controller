import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const data = {
  labels,
  datasets: [
    {
      label: "SetPoint",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Measurements",
      data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      borderColor: "rgb(99, 255, 132)",
      backgroundColor: "rgba(99, 255, 132, 0.5)",
    },
  ],
};

const Graphics = () => {
  return <Line options={options} data={data} />;
};

export default Graphics;
