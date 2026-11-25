import './Eyebrow.css'

export default function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <i className="dot"></i> {children}
    </span>
  )
}
