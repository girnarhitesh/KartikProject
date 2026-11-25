import './SectionHead.css'

export default function SectionHead({ title, subtitle }) {
  return (
    <div className="section-head">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  )
}
