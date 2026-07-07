const plans = [
  {
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'Perfect for individuals getting started.',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 GB cloud storage',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 29,
    period: 'month',
    description: 'Best for professionals and small teams.',
    features: [
      'Access to all 200+ tools',
      'Premium templates',
      'Priority support',
      '50 GB cloud storage',
      'AI-powered features',
      'Team collaboration',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'month',
    description: 'For large organizations with advanced needs.',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Advanced analytics',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

function Pricing({ onGetStarted }) {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section id="pricing" className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="section-heading animate-fade-in">Simple, Transparent Pricing</h2>
          <p className="section-subheading animate-fade-in animate-delay-100">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-center">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300
                  animate-fade-in opacity-0
                  ${
                    plan.highlighted
                      ? 'gradient-primary text-white shadow-card-hover scale-105 z-10'
                      : 'bg-white shadow-card hover:-translate-y-1 hover:shadow-card-hover'
                  }`}
                style={{ animationDelay: `${index * 150 + 200}ms`, animationFillMode: 'forwards' }}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                    Most Popular
                  </span>
                )}

                <h3
                  className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-text'}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${plan.highlighted ? 'text-white/80' : 'text-text-muted'}`}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-text-muted'}`}>
                    /{plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? 'text-yellow-300' : 'text-primary'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlighted ? 'text-white/90' : 'text-text-muted'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onGetStarted}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:shadow-lg'
                      : 'btn-primary-gradient'
                  }`}
                >
                  {plan.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

     
      <section className="gradient-primary py-16 md:py-20 relative overflow-hidden">
       
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.15) 8px, rgba(255,255,255,0.15) 9px)',
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 max-w-3xl text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 animate-fade-in">
            Ready To Transform Your Workflow?
          </h2>

          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-100">
            Join thousands of professionals who are already using DigiTools to work smarter.
            Start your free trial today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-200">
            <button
              onClick={onGetStarted}
              className="bg-white text-[#7C3AED] font-semibold rounded-full px-8 py-3
                         transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Products
            </button>
            <button
              onClick={scrollToPricing}
              className="border-2 border-white text-white font-semibold rounded-full px-8 py-3
                         transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              View Pricing
            </button>
          </div>

          <p className="text-sm text-white/80 mt-8 animate-fade-in animate-delay-300">
            14-day free trial &bull; No credit card required &bull; Cancel anytime
          </p>
        </div>
      </section>
    </>
  )
}

export default Pricing
