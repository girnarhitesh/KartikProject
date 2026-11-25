import Panel from '../../components/ui/Panel'
import { checklist } from '../../data/checklist'

export default function InvestmentInsight({ items = checklist }) {
  return (
    <Panel className="insight">
      <span className="signal">
        <i className="dot"></i> Check before you invest
      </span>
      <h3>Is gold a good investment right now?</h3>
      <p>
        Gold can help diversify a portfolio, but its price can rise or fall. Whether it makes sense today depends on
        your time horizon, purchase price, financial goals and risk tolerance. Avoid deciding from a single day's
        movement.
      </p>
      <div className="checklist">
        {items.map((item) => (
          <div className="check" key={item}>
            <b>✓</b>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Panel>
  )
}
