import { useState } from 'react'
import Field from '../../components/ui/Field'
import Panel from '../../components/ui/Panel'
import { useGoldRates } from '../../hooks/useGoldRates'
import { formatMoney, toAmount } from '../../utils/format'

export default function ComparePurchase({ defaultQuantity = 10 }) {
  const { rate22, rate24 } = useGoldRates()
  const [quantity, setQuantity] = useState(String(defaultQuantity))
  const grams = toAmount(quantity)

  const values = [
    { label: '22K value', value: formatMoney(grams * rate22) },
    { label: '24K value', value: formatMoney(grams * rate24) },
  ]

  return (
    <Panel className="chart-box">
      <div className="chart-head">
        <div>
          <h3>Compare your purchase</h3>
          <p>See the value of your chosen quantity at today's entered rate.</p>
        </div>
      </div>
      <div className="compare-box">
        <Field
          id="compareQty"
          label="Quantity to compare (grams)"
          min="0"
          step=".01"
          value={quantity}
          onChange={setQuantity}
        />
        <div className="compare-grid">
          {values.map((item) => (
            <div key={item.label}>
              <span className="compare-label">{item.label}</span>
              <div className="compare-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="compare-note">
        This is a simple rate × quantity comparison. It excludes GST, making charges, wastage, stone costs and any
        seller-specific fees.
      </p>
    </Panel>
  )
}
