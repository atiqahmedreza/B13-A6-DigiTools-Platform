import { ASSETS } from '../constants/assets'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Templates', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
}

const socialIcons = [
  {
    name: 'Facebook',
    path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  },
  {
    name: 'Twitter',
    path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    name: 'Instagram',
    path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 18.5v-11A4.5 4.5 0 016.5 2z',
  },
  {
    name: 'LinkedIn',
    path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
  },
]

function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 text-xl font-bold text-white mb-4">
              <img src={ASSETS.logo} alt="DigiTools logo" className="w-9 h-9 object-contain" />
              DigiTools
            </a>
            <p className="text-sm leading-relaxed max-w-sm text-gray-400">
              Your one-stop marketplace for premium digital tools, AI-powered solutions,
              design assets, and productivity software.
            </p>

            <div className="flex gap-3 mt-6">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center
                             hover:bg-[#7C3AED] transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} DigiTools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
