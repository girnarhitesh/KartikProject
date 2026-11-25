import { useState } from 'react'
import Field from '../../components/ui/Field'
import Panel from '../../components/ui/Panel'
import QuickPicks from '../../components/ui/QuickPicks'
import ResultBox from '../../components/ui/ResultBox'
import SegmentedControl from '../../components/ui/SegmentedControl'
import { purityOptions, quickBudgets } from '../../data/quickOptions'
import { useGoldRates } from '../../hooks/useGoldRates'
import { formatGrams, formatMoney, toAmount } from '../../utils/format'

export default function MoneyToGold({ defaultPurity = 22, defaultBudget = 50000 }) {
  const { rateFor } = useGoldRates()
  const [purity, setPurity] = useState(defaultPurity)
  const [budget, setBudget] = useState(String(defaultBudget))

  const amount = toAmount(budget)
  const rate = rateFor(purity)
  const grams = rate ? amount / rate : 0

  return (
    <Panel className="calc-box">
      <div className="calc-title">1. Money → Gold quantity</div>
      <div className="calc-desc">Enter how much you want to spend and see the approximate gold you can buy.</div>
      <SegmentedControl options={purityOptions} value={purity} onChange={setPurity} />
      <Field id="budget" label="Your budget (₹)" min="0" placeholder="e.g. 50000" value={budget} onChange={setBudget} />
      <QuickPicks options={quickBudgets} onPick={(value) => setBudget(String(value))} />
      <ResultBox
        label="Approximate gold quantity"
        value={formatGrams(grams)}
        detail={`At ${formatMoney(rate)} per gram for ${purity}K, before making charges and taxes.`}
        rows={[
          { label: 'Gold value', value: formatMoney(amount) },
          { label: 'Approx. quantity', value: formatGrams(grams) },
        ]}
      />
    </Panel>
  )
}
