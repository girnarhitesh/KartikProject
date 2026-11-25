export const formatMoney = (n) =>
  '₹' + (Number(n) || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 })

export const formatGrams = (n) =>
  (Number(n) || 0).toLocaleString('en-IN', { maximumFractionDigits: 3 }) + ' g'

export const formatTodayShort = (date = new Date()) =>
  date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

export const formatIsoDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-IN')

export const todayIso = () => new Date().toISOString().slice(0, 10)

export const toAmount = (value) => Math.max(0, Number(value) || 0)
