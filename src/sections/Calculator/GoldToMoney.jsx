import { useState } from 'react'
import Field from '../../components/ui/Field'
import Panel from '../../components/ui/Panel'
import QuickPicks from '../../components/ui/QuickPicks'
import ResultBox from '../../components/ui/ResultBox'
import SegmentedControl from '../../components/ui/SegmentedControl'
import { purityOptions, quickQuantities } from '../../data/quickOptions'
import { useGoldRates } from '../../hooks/useGoldRates'
import { formatGrams, formatMoney, toAmount } from '../../utils/format'

export default function GoldToMoney({ defaultPurity = 22, defaultQuantity = 10 }) {
  const { rateFor } = useGoldRates()
  const [purity, setPurity] = useState(defaultPurity)
  const [quantity, setQuantity] = useState(String(defaultQuantity))

  const grams = toAmount(quantity)
  const rate = rateFor(purity)

  return (
    <Panel className="calc-box">
      <div className="calc-title">2. Gold quantity → Money</div>
      <div className="calc-desc">Know the approximate gold value for 1g, 5g, 10g, 50g or 100g.</div>
      <SegmentedControl options={purityOptions} value={purity} onChange={setPurity} />
      <Field
        id="quantity"
        label="Gold quantity"
        min="0"
        step="0.01"
        placeholder="Enter grams"
        value={quantity}
        onChange={setQuantity}
      />
      <QuickPicks options={quickQuantities} onPick={(value) => setQuantity(String(value))} />
      <ResultBox
        label="Approximate gold value"
        value={formatMoney(grams * rate)}
        detail={`${formatGrams(grams)} × ${formatMoney(rate)} per gram, before additional charges.`}
        rows={[
          { label: 'Rate per gram', value: formatMoney(rate) },
          { label: 'Quantity', value: formatGrams(grams) },
        ]}
      />
    </Panel>
  )
}
