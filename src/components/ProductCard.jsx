const tagStyles = {
  popular: 'bg-purple-100 text-[#7C3AED]',
  new: 'bg-emerald-100 text-emerald-700',
  'best-seller': 'bg-amber-100 text-amber-700',
}

// products.json stores icons as root-absolute paths ("/assets/...");
// prefix Vite's BASE_URL so they resolve under the production sub-path base.
const resolveAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

function ProductCard({ product, onAddToCart, isAdded }) {
  const tagClass = tagStyles[product.tagType] || tagStyles.popular

  const handleBuy = () => {
    if (!isAdded) {
      onAddToCart(product)
    }
  }

  return (
    <article
      className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col
                 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_12px_40px_rgba(124,58,237,0.15)]"
    >
      
      <div className="bg-gradient-to-br from-purple-50 to-surface px-6 pt-6 pb-4 flex items-start justify-between">
        <div className="w-[60px] h-[60px] rounded-full bg-white border border-[#f2f2f2] shadow-sm flex items-center justify-center">
          <img
            src={resolveAsset(product.icon)}
            alt={product.name}
            className="w-8 h-8 object-contain"
          />
        </div>
        <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${tagClass}`}>
          {product.tag}
        </span>
      </div>

      <div className="px-6 pb-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-5 flex-grow leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="mb-5">
          <span className="text-3xl font-extrabold text-text">${product.price}</span>
          <span className="text-gray-400 text-sm ml-1">/ {product.period}</span>
        </div>

        <ul className="space-y-2.5 mb-6">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-500">
              <svg
                className="w-4 h-4 text-[#7C3AED] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={handleBuy}
          disabled={isAdded}
          className={`w-full py-3 rounded-xl font-semibold text-[15px] transition-all duration-300 ${
            isAdded
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-default'
              : 'btn-primary-gradient'
          }`}
        >
          {isAdded ? 'Added to Cart ✓' : 'Buy Now'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard
