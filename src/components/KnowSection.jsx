import { whyChooseItems, comparison } from "../data/content";
import "./KnowSection.css";

export default function KnowSection() {
  return (
    <section className="know full-section section-band" id="about">
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">Expert guidance</span>
          <h1 className="section-title know__title">
            Choosing investments is easy —
            <br />
            choosing the right ones isn&apos;t
          </h1>
          {/* <p>
            That&apos;s where disciplined advice makes the difference. The right
            partner helps you invest with clarity and stay focused on your goals.
          </p> */}
        </header>

        <div className="know__grid">
          <div className="know__list">
            {whyChooseItems.map((item, index) => (
              <details
                key={item.title}
                className="know__item card"
                open={index === 0}
              >
                <summary className="know__question">
                  Why should an investor choose Aktineu?
                  <span className="know__tag">{item.title}</span>
                </summary>
                <p className="know__answer">{item.description}</p>
              </details>
            ))}
          </div>

          <div className="know__comparison card card-muted ">
            <div className="know__compare-side">
              <h3>{comparison.left.title}</h3>
              <ul>
                {comparison.left.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="know__vs">
              <span>VS</span>
            </div>

            <div className="know__compare-side know__compare-side--highlight">
              <h3>{comparison.right.title}</h3>
              <ul>
                {comparison.right.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
