import { products } from "../data/content";
import "./ProductsSection.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__top">
        <div className="product-card__badge-slot">
          {product.badge ? (
            <span className="product-card__badge">{product.badge}</span>
          ) : null}
        </div>
        <div className="product-card__icon" aria-hidden="true">
          <i className={`fa-solid ${product.icon}`} />
        </div>
      </div>
      <h3 className="product-card__title">
        {product.name}
        <span className="product-card__arrow" aria-hidden="true">
          
        </span>
      </h3>
      <p className="product-card__desc">{product.description}</p>
    </article>
  );
}

export default function ProductsSection() {
  return (
    <section className="products" id="products">
      <div className="container products__inner">
        <header className="products__header">
          <h2 className="products__heading">Investment options for you</h2>
        </header>

        <div className="products__grid">
          {products.map((product) => (
            <ProductCard key={product.abbr} product={product} />
          ))}
        </div>

        <div className="products__actions">
          <a href="#schedule" className="btn btn-outline">
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  );
}
