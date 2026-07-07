import { ASSETS } from '../constants/assets'

const stats = [
  { value: '50K+', label: 'Active Users', icon: ASSETS.user },
  { value: '200+', label: 'Premium Tools', icon: ASSETS.products.package },
  { value: '4.9', label: 'Rating', suffix: '★', icon: ASSETS.rocket },
]

function Stats() {
  return (
    <section className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] py-10 md:py-14">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center text-white">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <img src={stat.icon} alt="" className="w-6 h-6 object-contain brightness-0 invert" aria-hidden="true" />
              </div>
              <p className="text-3xl md:text-[2.75rem] font-extrabold leading-none mb-2">
                {stat.value}
                {stat.suffix && <span className="text-yellow-300 ml-1 text-2xl">{stat.suffix}</span>}
              </p>
              <p className="text-base md:text-lg opacity-90 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
