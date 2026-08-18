import { useState } from "react";
import { stats, testimonials } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const goTo = (index) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  return (
    <section className="hero full-section" id="home">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              Curated Investments
              <br />
              Crafted for your tomorrow.
            </h1>

            <div className="hero__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero__stat">
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__testimonials card card-muted">
            <div className="hero__testimonials-header">
              <span className="hero__testimonials-label">Testimonials</span>
              <div className="hero__testimonials-controls">
                <button
                  type="button"
                  className="hero__arrow"
                  onClick={() => goTo(activeIndex - 1)}
                  aria-label="Previous testimonial"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="hero__arrow"
                  onClick={() => goTo(activeIndex + 1)}
                  aria-label="Next testimonial"
                >
                  ›
                </button>
              </div>
            </div>

            <blockquote className="hero__quote">
              <p>"{active.quote}"</p>
              <footer>
                <cite className="hero__author">{active.name}</cite>
                <span className="hero__role">{active.role}</span>
              </footer>
            </blockquote>

            <div className="hero__dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`hero__dot ${index === activeIndex ? "hero__dot--active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
