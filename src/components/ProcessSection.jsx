import { processCards } from "../data/content";
import "./ProcessSection.css";

export default function ProcessSection() {
  const topCards = processCards.filter((card) => !card.fullWidth);
  const bottomCard = processCards.find((card) => card.fullWidth);

  return (
    <section className="process full-section" id="goals">
      <div className="container">
        <div className="process__grid">
          <div className="process__row">
            {topCards.map((card) => (
              <article key={card.id} className="process__card card card-muted">
                <h3 className="process__card-title">{card.title}</h3>
                <p className="process__card-text">{card.description}</p>
              </article>
            ))}
          </div>

          {bottomCard && (
            <article className="process__card process__card--wide card card-muted">
              <h3 className="process__card-title">{bottomCard.title}</h3>
              <p className="process__card-text">{bottomCard.description}</p>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
