import Panel from '../../components/ui/Panel'
import { tableQuantities } from '../../data/quickOptions'
import { useGoldRates } from '../../hooks/useGoldRates'
import { formatMoney } from '../../utils/format'

export default function QuickValueTable({ quantities = tableQuantities }) {
  const { rate22, rate24 } = useGoldRates()

  return (
    <Panel className="quick-table-panel">
      <strong className="quick-table-title">Quick gold value table</strong>
      <div className="table-scroll">
        <table className="quick-table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>22K value</th>
              <th>24K value</th>
            </tr>
          </thead>
          <tbody>
            {quantities.map((g) => (
              <tr key={g}>
                <td>{g}g</td>
                <td>{formatMoney(g * rate22)}</td>
                <td>{formatMoney(g * rate24)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  )
}
