import { useMemo, useState } from 'react'
import { todayIso } from '../utils/format'
import { GoldRateContext } from './rateContext'

export function GoldRateProvider({ children }) {
  const [rate24, setRate24] = useState(7500)
  const [rate22, setRate22] = useState(6875)
  const [rateDate, setRateDate] = useState(todayIso)

  const value = useMemo(
    () => ({ rate24, rate22, rateDate, setRate24, setRate22, setRateDate }),
    [rate24, rate22, rateDate],
  )

  return <GoldRateContext.Provider value={value}>{children}</GoldRateContext.Provider>
}
