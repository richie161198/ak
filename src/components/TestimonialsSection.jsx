import { testimonials } from "../data/content";
import "./TestimonialsSection.css";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials section-band" id="testimonials">
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">Client stories</span>
          <h2 className="section-title">And it&apos;s not just us saying this</h2>
          <p>Real feedback from people building wealth with disciplined guidance.</p>
        </header>

        <div className="testimonials__track">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</p>
              <footer className="testimonial-card__footer">
                <span className="testimonial-card__avatar" aria-hidden="true">
                  {initials(item.name)}
                </span>
                <div>
                  <cite className="testimonial-card__name">{item.name}</cite>
                  <span className="testimonial-card__role">{item.role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
