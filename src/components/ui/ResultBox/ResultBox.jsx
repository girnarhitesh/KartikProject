import './ResultBox.css'

export default function ResultBox({ label, value, detail, rows = [] }) {
  return (
    <div className="calc-result">
      <div className="result-label">{label}</div>
      <div className="result-number">{value}</div>
      <div className="result-detail">{detail}</div>
      {rows.map((row) => (
        <div className="breakdown" key={row.label}>
          <span>{row.label}</span>
          <strong>{row.value}</strong>
        </div>
      ))}
    </div>
  )
}
