import { useState } from "react";
import { funFacts } from "../data/content";
import bgImage from "../assets/img/faq/bg.jpg";
import "./Faq.css";

export function FaqTwo() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      className="faq full-section"
      id="faq"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="faq__header">
          <span className="faq__label">Impressions</span>
          <h2 className="faq__title">Fun fact about company</h2>
        </div>

        <div className="faq__list">
          {funFacts.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className={`faq__item ${isOpen ? "faq__item--active" : ""}`}
              >
                <button
                  type="button"
                  className={`faq__question ${isOpen ? "faq__question--open" : ""}`}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className="faq__arrow" aria-hidden="true">
                    <i className="fa-solid fa-arrow-up-long faq__arrow-up" />
                    <i className="fa-solid fa-arrow-down-long faq__arrow-down" />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqTwo;
