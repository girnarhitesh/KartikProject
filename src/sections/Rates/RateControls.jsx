import { useState } from 'react'
import Field from '../../components/ui/Field'
import Panel from '../../components/ui/Panel'
import { useGoldRates } from '../../hooks/useGoldRates'
import { formatIsoDate, toAmount } from '../../utils/format'

export default function RateControls() {
  const { rate24, rate22, rateDate, setRate24, setRate22, setRateDate } = useGoldRates()
  const [price24, setPrice24] = useState(String(rate24))
  const [price22, setPrice22] = useState(String(rate22))

  const handle24 = (value) => {
    setPrice24(value)
    setRate24(toAmount(value))
  }

  const handle22 = (value) => {
    setPrice22(value)
    setRate22(toAmount(value))
  }

  const updatedText = rateDate
    ? `Rate date selected: ${formatIsoDate(rateDate)}. Entered manually. Verify with a local jeweller.`
    : 'Enter the date on which these rates were verified. Prices vary by seller and time.'

  return (
    <>
      <Panel className="rate-controls">
        <Field id="price24" label="24K rate per gram (₹)" min="1" step="0.01" value={price24} onChange={handle24} />
        <Field id="price22" label="22K rate per gram (₹)" min="1" step="0.01" value={price22} onChange={handle22} />
        <Field id="rateDate" label="Rate date" type="date" value={rateDate} onChange={setRateDate} />
      </Panel>
      <div className="updated">{updatedText}</div>
    </>
  )
}
