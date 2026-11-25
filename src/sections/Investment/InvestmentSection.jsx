import SectionHead from '../../components/ui/SectionHead'
import InvestmentInsight from './InvestmentInsight'
import NewsList from './NewsList'
import './Investment.css'

export default function InvestmentSection() {
  return (
    <section className="section" id="investment">
      <div className="wrap">
        <div className="reveal">
          <SectionHead
            title="Gold investment: what should buyers know?"
            subtitle="A balanced snapshot, not a personalised investment recommendation."
          />
        </div>
        <div className="invest-grid">
          <div className="reveal">
            <InvestmentInsight />
          </div>
          <div className="reveal">
            <NewsList />
          </div>
        </div>
      </div>
    </section>
  )
}
