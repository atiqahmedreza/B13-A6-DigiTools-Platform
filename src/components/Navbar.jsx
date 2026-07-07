import { useState } from 'react'
import { ASSETS } from '../constants/assets'

const navLinks = [
  { label: 'Products', href: '#marketplace' },
  { label: 'Features', href: '#steps' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-4 lg:px-8 max-w-7xl" aria-label="Main navigation">
        <div className="flex items-center justify-between h-[72px]">
          
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-bold text-text"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <img src={ASSETS.logo} alt="DigiTools logo" className="w-9 h-9 object-contain" />
            <span className="text-[22px] tracking-tight">DigiTools</span>
          </a>

          
          <ul className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-[15px] text-gray-600 hover:text-primary font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

       
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-2 text-gray-600 hover:text-primary font-medium transition-colors px-2">
              <img src={ASSETS.user} alt="" className="w-5 h-5 object-contain" aria-hidden="true" />
              Login
            </button>
            <button className="btn-primary-gradient text-sm px-5 py-2.5">Get Started</button>

            <button
              onClick={onCartClick}
              className="relative p-2.5 rounded-xl hover:bg-purple-50 transition-colors ml-1"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <img src={ASSETS.cart} alt="" className="w-6 h-6 object-contain" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

         
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onCartClick}
              className="relative p-2"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <img src={ASSETS.cart} alt="" className="w-6 h-6 object-contain" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

    
        {menuOpen && (
          <div className="lg:hidden pb-5 border-t border-gray-100 animate-fade-in">
            <ul className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-4 py-2.5 text-gray-600 hover:text-primary hover:bg-purple-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="flex gap-3 px-4 pt-3">
                <button className="flex-1 py-2.5 flex items-center justify-center gap-2 border border-gray-200 rounded-xl font-medium text-gray-600">
                  <img src={ASSETS.user} alt="" className="w-4 h-4" aria-hidden="true" />
                  Login
                </button>
                <button className="flex-1 py-2.5 btn-primary-gradient text-sm">Get Started</button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
