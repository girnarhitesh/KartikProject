import Button from '../../components/ui/Button'
import './CtaSection.css'

export default function CtaSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta reveal">
          <div>
            <h2>Planning to buy gold in Karimnagar?</h2>
            <p>Update the verified rate, calculate your budget and confirm the final price with your jeweller.</p>
          </div>
          <Button href="#rates">Update gold rate ↑</Button>
        </div>
      </div>
    </section>
  )
}
