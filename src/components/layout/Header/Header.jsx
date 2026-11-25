import { navLinks } from '../../../data/navLinks'
import './Header.css'

export default function Header({ links = navLinks }) {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#">
          <span className="brand-mark">K</span>
          <span>
            Karimnagar Gold<small>Gold rate & smart calculator</small>
          </span>
        </a>
        <nav className="navlinks">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#calculator">
          Calculate Gold ↗
        </a>
      </div>
    </header>
  )
}
