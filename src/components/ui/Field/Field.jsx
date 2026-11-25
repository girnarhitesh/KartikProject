export default function Field({ id, label, type = 'number', value, onChange, ...inputProps }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} {...inputProps} />
    </div>
  )
}
