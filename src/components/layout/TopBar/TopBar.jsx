import { formatTodayShort } from '../../../utils/format'
import './TopBar.css'

export default function TopBar({ label = 'LOCAL GOLD PRICE TRACKER · KARIMNAGAR, TELANGANA' }) {
  return (
    <div className="topbar">
      <div className="wrap">
        <span>{label}</span>
        <span>Today: {formatTodayShort()}</span>
      </div>
    </div>
  )
}
