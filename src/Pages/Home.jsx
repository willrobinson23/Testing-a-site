import { getProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

function Home() {
  const products = getProducts();
  return (
    <div className='page'>
      <div className="home-hero">
        <h1 className="home-title">Welcome to Swanhub</h1>
        <p className="home-subtitle">
          Discover a wide range of products at unbeatable prices.
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
           <ProductCard product={product} key={product.id} />
          ))}
        </div>
        </div>
    </div>
  )
}

export default Home