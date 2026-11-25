import Panel from '../../components/ui/Panel'

export default function FaqCard({ question, answer }) {
  return (
    <Panel className="faq">
      <h3>{question}</h3>
      <p>{answer}</p>
    </Panel>
  )
}
