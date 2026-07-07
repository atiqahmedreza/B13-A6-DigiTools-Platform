import { ASSETS } from '../constants/assets'

const steps = [
  { number: '01', icon: ASSETS.user, title: 'Create Account' },
  { number: '02', icon: ASSETS.products.package, title: 'Choose Products' },
  { number: '03', icon: ASSETS.rocket, title: 'Start Creating' },
]

function Steps() {
  return (
    <section id="steps" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
      
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] text-center animate-fade-in">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mt-4 text-base md:text-lg animate-fade-in animate-delay-100">
          Start using premium digital tools in minutes, not hours.
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative bg-white rounded-2xl px-8 py-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)]
                         animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 150 + 200}ms`, animationFillMode: 'forwards' }}
            >
              <span className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#7C3AED] text-white text-xs font-bold flex items-center justify-center">
                {step.number}
              </span>

              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
                <img src={step.icon} alt="" className="w-12 h-12 object-contain" aria-hidden="true" />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-[#1F2937]">{step.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
