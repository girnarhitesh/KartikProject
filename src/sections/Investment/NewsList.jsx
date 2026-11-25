import Panel from '../../components/ui/Panel'
import { news } from '../../data/news'

export default function NewsList({ items = news }) {
  return (
    <Panel className="insight" id="news">
      <h3>Gold updates in brief</h3>
      <p>Use this space for short, dated market updates with links to credible sources.</p>
      <div className="news-list">
        {items.map((item) => (
          <div className="news-item" key={item.title}>
            <div className="news-icon">{item.icon}</div>
            <div>
              <span className="news-label">{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}
