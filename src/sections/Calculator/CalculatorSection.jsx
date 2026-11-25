import SectionHead from '../../components/ui/SectionHead'
import GoldToMoney from './GoldToMoney'
import MoneyToGold from './MoneyToGold'
import QuickValueTable from './QuickValueTable'
import './Calculator.css'

export default function CalculatorSection() {
  return (
    <section className="section" id="calculator">
      <div className="wrap">
        <div className="reveal">
          <SectionHead
            title="Gold calculator"
            subtitle="Two ways to calculate: find gold quantity from your budget, or find the price for a quantity you want."
          />
        </div>
        <div className="calculator-grid">
          <div className="reveal">
            <MoneyToGold />
          </div>
          <div className="reveal">
            <GoldToMoney />
          </div>
        </div>
        <div className="reveal">
          <QuickValueTable />
        </div>
      </div>
    </section>
  )
}
