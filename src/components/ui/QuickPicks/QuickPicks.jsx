import Button from '../Button'
import './QuickPicks.css'

export default function QuickPicks({ options, onPick }) {
  return (
    <div className="quick-picks">
      {options.map((option) => (
        <Button key={option.value} variant="light" onClick={() => onPick(option.value)}>
          {option.label}
        </Button>
      ))}
    </div>
  )
}
