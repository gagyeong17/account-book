'use client';

import { Chart as ChartJS, Tooltip, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

interface ChartData {
  data: ChartDataType;
}
const Chart = ({ data }: ChartData) => {
  ChartJS.register(Tooltip, ChartDataLabels, ArcElement);
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
