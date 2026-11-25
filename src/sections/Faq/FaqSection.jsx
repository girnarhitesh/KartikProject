import SectionHead from '../../components/ui/SectionHead'
import { faqs } from '../../data/faqs'
import FaqCard from './FaqCard'
import './Faq.css'

export default function FaqSection({ items = faqs }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="reveal">
          <SectionHead title="Gold buying guide" subtitle="Quick answers to common gold-rate questions in Karimnagar." />
        </div>
        <div className="faqs">
          {items.map((faq) => (
            <div className="reveal" key={faq.question}>
              <FaqCard question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
