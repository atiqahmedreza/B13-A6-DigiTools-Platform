import { toast } from 'react-toastify'
import { ASSETS } from '../constants/assets'

function Cart({ cart, onRemove, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleRemove = (index, name) => {
    onRemove(index)
    toast.info(`${name} removed from cart.`)
  }

  const handleCheckout = () => {
    if (cart.length === 0) return
    onCheckout()
    toast.success('Checkout complete! Your cart has been cleared.')
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="w-28 h-28 mb-6 rounded-full bg-purple-50 flex items-center justify-center">
          <img
            src={ASSETS.cart}
            alt=""
            className="w-14 h-14 object-contain opacity-40"
            aria-hidden="true"
          />
        </div>
        <h3 className="text-xl font-bold text-text mb-2">Your cart is empty.</h3>
        <p className="text-gray-500 text-center max-w-sm text-sm">
          Browse our products and add tools to your cart to get started.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="space-y-3">
        {cart.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-4 flex items-center gap-4
                       transition-all duration-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
              <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
            </div>
            <div className="flex-grow min-w-0">
              <h4 className="font-semibold text-text truncate">{item.name}</h4>
              <p className="text-[#7C3AED] font-bold">${item.price}</p>
            </div>
            <button
              onClick={() => handleRemove(index, item.name)}
              className="px-4 py-2 text-sm font-medium text-red-500 border border-red-200
                         rounded-lg hover:bg-red-50 transition-colors duration-200 flex-shrink-0"
              aria-label={`Remove ${item.name} from cart`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg font-semibold text-text">Total</span>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
            ${total.toFixed(2)}
          </span>
        </div>
        <button onClick={handleCheckout} className="w-full btn-primary-gradient py-3.5 text-base">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
