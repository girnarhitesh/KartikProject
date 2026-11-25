export const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const chartMultipliers = [0.82, 0.85, 0.83, 0.89, 0.91, 0.88, 0.94, 0.97, 0.95, 1.01, 0.99, 1]

const chartBases = { 22: 6875, 24: 7500 }

export const getChartSeries = (purity) => {
  const base = purity === 24 ? chartBases[24] : chartBases[22]
  return chartMultipliers.map((m) => Math.round(base * m))
}
