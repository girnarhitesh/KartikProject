import { useContext } from 'react'
import { GoldRateContext } from '../context/rateContext'

export function useGoldRates() {
  const context = useContext(GoldRateContext)
  if (!context) throw new Error('useGoldRates must be used inside GoldRateProvider')

  const rateFor = (purity) => (purity === 24 ? context.rate24 : context.rate22)
  return { ...context, rateFor }
}
