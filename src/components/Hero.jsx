import { ASSETS } from '../constants/assets'

function Hero({ onExplore }) {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
         
          <div className="animate-fade-in order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-primary text-sm font-semibold mb-6">
              <img src={ASSETS.rocket} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
              New AI-Powered Tools Available
            </span>

            <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-text leading-[1.15] mb-6">
              Supercharge Your{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                Digital Workflow
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity
              software all in one place.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={onExplore} className="btn-primary-gradient px-7 py-3">
                Explore Products
              </button>
              <button className="btn-outline-primary flex items-center gap-2.5 px-7 py-3">
                <img src={ASSETS.play} alt="" className="w-5 h-5 object-contain" aria-hidden="true" />
                Watch Demo
              </button>
            </div>
          </div>

        
          <div className="animate-fade-in animate-delay-200 order-1 lg:order-2">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(124,58,237,0.15)]">
                <img
                  src={ASSETS.banner}
                  alt="Person interacting with digital tools interface"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
