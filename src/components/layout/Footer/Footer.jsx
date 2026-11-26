import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="disclaimer">
          <strong>Important price disclaimer:</strong> This demo page does not provide live gold prices, financial news or
          investment signals. The initial rates and chart values are illustrative placeholders and must be replaced with
          verified, dated data before the page goes live. Actual shop prices may differ. Calculations are estimates only
          and exclude GST, making charges, wastage, stones and other fees unless explicitly added. This content is for
          general information, not financial advice.
        </div>
        <div className="footer-row">
          <span>© {new Date().getFullYear()} Karimnagar Gold Rate. All rights reserved.</span>
          <span className="footer-links">
            <a href="/terms-and-conditions.html">Terms &amp; Conditions</a>
            <a href="/privacy-policy.html">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
