import { useGoldRates } from '../../hooks/useGoldRates'
import { formatMoney } from '../../utils/format'

export default function HeroRateCard() {
  const { rate22, rate24 } = useGoldRates()

  const minis = [
    { label: '22K · per gram', value: formatMoney(rate22) },
    { label: '24K · per 10g', value: formatMoney(rate24 * 10) },
  ]

  return (
    <div className="hero-card">
      <div className="card-kicker">Indicative 24K gold price · per gram</div>
      <div className="hero-rate">
        {formatMoney(rate24)} <small>/ gram</small>
      </div>
      <div className="rate-sub">Based on the rate entered below. Verify with a Karimnagar jeweller before purchase.</div>
      <div className="hero-mini">
        {minis.map((mini) => (
          <div className="mini" key={mini.label}>
            <span>{mini.label}</span>
            <strong>{mini.value}</strong>
          </div>
        ))}
      </div>
      <div className="demo-note">Illustrative starting values only. This page does not fetch live market prices.</div>
    </div>
  )
}
