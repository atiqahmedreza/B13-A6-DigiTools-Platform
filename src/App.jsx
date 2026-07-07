import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Products from './components/Products'
import Cart from './components/Cart'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import productsData from './data/products.json'
import { ASSETS } from './constants/assets'

const CART_STORAGE_KEY = 'digitools-cart'

function App() {
  const [cart, setCart] = useState([])
  const [addedIds, setAddedIds] = useState([])
  const [activeTab, setActiveTab] = useState('products')

  
  useEffect(() => {
    const saved = localStorage.getItem(CART_STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setCart(parsed)
        setAddedIds(parsed.map((item) => item.id))
      } catch {
        localStorage.removeItem(CART_STORAGE_KEY)
      }
    }
  }, [])

  
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
    setAddedIds((prev) => [...prev, product.id])
  }

  const removeFromCart = (index) => {
    setCart((prev) => {
      const updated = [...prev]
      const removed = updated.splice(index, 1)[0]
      setAddedIds((ids) => {
        const remaining = updated.filter((item) => item.id === removed.id)
        if (remaining.length === 0) {
          return ids.filter((id) => id !== removed.id)
        }
        return ids
      })
      return updated
    })
  }

  const clearCart = () => {
    setCart([])
    setAddedIds([])
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div data-theme="digitools" className="min-h-screen">
      <Navbar
        cartCount={cart.length}
        onCartClick={() => {
          setActiveTab('cart')
          scrollToSection('marketplace')
        }}
      />

      <main>
        <Hero onExplore={() => scrollToSection('marketplace')} />
        <Stats />

        
        <section id="marketplace" className="py-16 md:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <h2 className="section-heading animate-fade-in">Premium Digital Tools</h2>
            <p className="section-subheading animate-fade-in animate-delay-100">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>

          
            <div className="flex justify-center mt-10 mb-12">
              <div className="bg-white rounded-2xl p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] inline-flex gap-1">
              <button
                onClick={() => setActiveTab('products')}
                className={`px-8 py-2.5 rounded-xl font-semibold text-[15px] transition-all duration-300 ${
                  activeTab === 'products'
                    ? 'btn-primary-gradient shadow-md shadow-purple-500/25'
                    : 'text-gray-600 hover:text-primary bg-transparent'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('cart')}
                className={`px-8 py-2.5 rounded-xl font-semibold text-[15px] transition-all duration-300 relative flex items-center gap-2 ${
                  activeTab === 'cart'
                    ? 'btn-primary-gradient shadow-md shadow-purple-500/25'
                    : 'text-gray-600 hover:text-primary bg-transparent'
                }`}
              >
                <img src={ASSETS.cart} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
                Cart
                {cart.length > 0 && (
                  <span className="bg-red-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                    {cart.length}
                  </span>
                )}
              </button>
              </div>
            </div>

            {activeTab === 'products' ? (
              <Products
                products={productsData}
                onAddToCart={addToCart}
                addedIds={addedIds}
              />
            ) : (
              <Cart
                cart={cart}
                onRemove={removeFromCart}
                onCheckout={clearCart}
              />
            )}
          </div>
        </section>

        <Steps />
        <Pricing onGetStarted={() => scrollToSection('marketplace')} />
      </main>

      <Footer />
    </div>
  )
}

export default App
