import { products } from "../data/content";
import "./ProductsSection.css";

export default function ProductsSection() {
  return (
    <section className="products full-section" id="products">
      <div className="container">
        <div className="products__wrapper card card-muted">
          <h2 className="products__title">Products</h2>

          <div className="products__list">
            {products.map((product, index) => (
              <span key={product.abbr} className="products__item">
                <span className="products__abbr" title={product.name}>
                  {product.abbr}
                </span>
                {index < products.length - 1 && (
                  <span className="products__separator" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            ))}
          </div>

          <div className="products__details">
            {products.map((product) => (
              <div key={product.abbr} className="products__detail">
                <strong>{product.name}</strong>
                <span>{product.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
