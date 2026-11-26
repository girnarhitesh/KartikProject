import { useEffect, useId, useState } from 'react'
import { navLinks } from '../../../data/navLinks'
import './Header.css'

const legalLinks = [
  { href: '/terms-and-conditions.html', label: 'Terms & Conditions' },
  { href: '/privacy-policy.html', label: 'Privacy Policy' },
]

export default function Header({ links = navLinks }) {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const onResize = () => {
      if (window.matchMedia('(min-width: 901px)').matches) setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={open ? 'is-open' : undefined}>
      <div className="wrap nav">
        <a className="brand" href="/" onClick={closeMenu}>
          <span className="brand-mark">K</span>
          <span>
            Karimnagar Gold<small>Gold rate & smart calculator</small>
          </span>
        </a>

        <nav className="navlinks" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#calculator">
          Calculate Gold ↗
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>

      <div
        className={`nav-backdrop${open ? ' is-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id={menuId}
        className={`mobile-nav${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav className="mobile-nav-panel" aria-label="Mobile">
          <div className="mobile-nav-links">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>

          <a className="mobile-nav-cta" href="#calculator" onClick={closeMenu}>
            Calculate Gold ↗
          </a>

          <div className="mobile-nav-legal">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
