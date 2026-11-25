import Panel from '../../components/ui/Panel'
import { formatMoney } from '../../utils/format'

export default function RateCard({ purity, tag, rate = 0, featured = false }) {
  return (
    <Panel className={featured ? 'rate-card featured' : 'rate-card'}>
      <div className="rate-top">
        <span className="purity">{purity}</span>
        <span className="tag">{tag}</span>
      </div>
      <div className="rate-value">{formatMoney(rate)}</div>
      <div className="rate-unit">per 1 gram · editable reference rate</div>
      <div className="rate-foot">
        <span>10 grams</span>
        <strong>{formatMoney(rate * 10)}</strong>
      </div>
    </Panel>
  )
}
