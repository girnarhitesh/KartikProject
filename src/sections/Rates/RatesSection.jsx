import SectionHead from '../../components/ui/SectionHead'
import { useGoldRates } from '../../hooks/useGoldRates'
import RateCard from './RateCard'
import RateControls from './RateControls'
import './Rates.css'

export default function RatesSection() {
  const { rate22, rate24 } = useGoldRates()

  return (
    <section className="section" id="rates">
      <div className="wrap">
        <div className="reveal">
          <SectionHead
            title="Gold rate in Karimnagar today"
            subtitle="Set the latest verified local rate to update every calculator on this page."
          />
        </div>
        <div className="rates">
          <div className="reveal">
            <RateCard featured purity="24K Gold · 999 purity" tag="PURE GOLD" rate={rate24} />
          </div>
          <div className="reveal">
            <RateCard purity="22K Gold · 916 purity" tag="JEWELLERY GOLD" rate={rate22} />
          </div>
        </div>
        <div className="reveal">
          <RateControls />
        </div>
      </div>
    </section>
  )
}
