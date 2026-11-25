import Button from '../../components/ui/Button'
import Eyebrow from '../../components/ui/Eyebrow'
import HeroRateCard from './HeroRateCard'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="reveal">
          <Eyebrow>Karimnagar gold rate & calculator</Eyebrow>
          <h1>
            How much gold can your <span>money buy</span> today?
          </h1>
          <p className="hero-copy">
            Check indicative 22K and 24K gold prices in Karimnagar, convert your budget into gold quantity, estimate
            jewellery costs and follow price trends before you buy.
          </p>
          <div className="hero-actions">
            <Button href="#calculator">
              Calculate with my budget <span>→</span>
            </Button>
            <Button variant="light" href="#rates">
              View today's rates
            </Button>
          </div>
        </div>
        <HeroRateCard />
      </div>
    </section>
  )
}
