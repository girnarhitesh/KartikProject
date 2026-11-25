import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import TopBar from './components/layout/TopBar'
import { GoldRateProvider } from './context/GoldRateContext'
import { useReveal } from './hooks/useReveal'
import CalculatorSection from './sections/Calculator'
import ChartSection from './sections/Chart'
import CtaSection from './sections/Cta'
import FaqSection from './sections/Faq'
import Hero from './sections/Hero'
import InvestmentSection from './sections/Investment'
import RatesSection from './sections/Rates'

function AppShell() {
  useReveal()

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <RatesSection />
        <CalculatorSection />
        <ChartSection />
        <InvestmentSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <GoldRateProvider>
      <AppShell />
    </GoldRateProvider>
  )
}
