import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import { chartLabels, getChartSeries } from '../../data/chartData'
import { formatMoney } from '../../utils/format'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1400,
    easing: 'easeOutQuart',
    delay: (ctx) => {
      if (ctx.type !== 'data' || ctx.mode !== 'default') return 0
      return ctx.dataIndex * 55
    },
  },
  animations: {
    x: { from: 0 },
    y: {
      from: (ctx) => {
        const chart = ctx.chart
        const y = chart?.scales?.y
        return y ? y.getPixelForValue(y.min) : undefined
      },
    },
  },
  transitions: {
    active: {
      animation: { duration: 320 },
    },
    show: {
      animations: {
        x: { from: 0 },
        y: { from: (ctx) => ctx.chart.scales.y.getPixelForValue(ctx.chart.scales.y.min) },
      },
    },
    hide: {
      animations: {
        x: { to: 0 },
        y: { to: (ctx) => ctx.chart.scales.y.getPixelForValue(ctx.chart.scales.y.min) },
      },
    },
  },
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: 'rgba(23, 44, 69, .92)',
      titleFont: { family: 'Manrope', weight: '700', size: 12 },
      bodyFont: { family: 'DM Sans', size: 12 },
      padding: 10,
      cornerRadius: 8,
      displayColors: false,
      callbacks: { label: (c) => formatMoney(c.raw) + ' / g' },
    },
  },
  scales: {
    y: {
      ticks: {
        callback: (v) => '₹' + Number(v).toLocaleString('en-IN'),
        font: { family: 'DM Sans', size: 11 },
        color: '#7a8a9b',
        padding: 8,
      },
      grid: { color: '#edf1f4', drawBorder: false },
      border: { display: false },
    },
    x: {
      ticks: {
        font: { family: 'DM Sans', size: 11 },
        color: '#7a8a9b',
        padding: 6,
      },
      grid: { display: false },
      border: { display: false },
    },
  },
}

export default function GoldPriceChart({ purity = 22 }) {
  const data = useMemo(
    () => ({
      labels: chartLabels,
      datasets: [
        {
          label: 'Illustrative ₹/gram',
          data: getChartSeries(purity),
          borderColor: '#ff693d',
          backgroundColor: (context) => {
            const chart = context.chart
            const { ctx, chartArea } = chart
            if (!chartArea) return 'rgba(255,105,61,.12)'
            const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
            gradient.addColorStop(0, 'rgba(255,105,61,.22)')
            gradient.addColorStop(1, 'rgba(255,105,61,.02)')
            return gradient
          },
          fill: true,
          tension: 0.4,
          borderWidth: 2.5,
          pointRadius: 3.5,
          pointHoverRadius: 6,
          pointBackgroundColor: '#ff693d',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
        },
      ],
    }),
    [purity],
  )

  return (
    <div className="chart-wrap">
      <Line key={purity} data={data} options={options} />
    </div>
  )
}
