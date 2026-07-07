import { toast } from 'react-toastify'
import ProductCard from './ProductCard'

function Products({ products, onAddToCart, addedIds }) {
  const handleAddToCart = (product) => {
    onAddToCart(product)
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          isAdded={addedIds.includes(product.id)}
        />
      ))}
    </div>
  )
}

export default Products