import { lazy, Suspense, useState } from 'react'
import Panel from '../../components/ui/Panel'
import SectionHead from '../../components/ui/SectionHead'
import { purityOptions } from '../../data/quickOptions'
import ComparePurchase from './ComparePurchase'
import './Chart.css'

const GoldPriceChart = lazy(() => import('./GoldPriceChart'))

export default function ChartSection() {
  const [purity, setPurity] = useState(22)

  return (
    <section className="section" id="charts">
      <div className="wrap">
        <div className="reveal">
          <SectionHead title="Gold price chart & history" subtitle="Understand how gold prices have moved over time." />
        </div>
        <div className="info-grid">
          <Panel className="chart-box reveal">
            <div className="chart-head">
              <div>
                <h3>Gold price movement</h3>
                <p>Illustrative trend data, not live historical quotes</p>
              </div>
              <select
                className="chart-filter"
                aria-label="Chart purity"
                value={purity}
                onChange={(e) => setPurity(Number(e.target.value))}
              >
                {purityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <Suspense fallback={<div className="chart-wrap" />}>
              <GoldPriceChart purity={purity} />
            </Suspense>
            <div className="chart-disclaimer">
              Replace the sample chart series with verified daily Karimnagar or benchmark prices before publishing.
            </div>
          </Panel>
          <div className="reveal">
            <ComparePurchase />
          </div>
        </div>
      </div>
    </section>
  )
}
