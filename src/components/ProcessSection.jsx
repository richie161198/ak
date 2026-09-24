import { processCards } from "../data/content";
import "./ProcessSection.css";

const TRI = {
  top: { x: 200, y: 24 },
  bl: { x: 36, y: 336 },
  br: { x: 364, y: 336 },
  splitL: { x: 120, y: 172 },
  splitR: { x: 280, y: 172 },
  splitM: { x: 200, y: 172 },
};

const LABELS = {
  1: { x: 139, y: 254 },
  2: { x: 200, y: 123 },
  3: { x: 261, y: 254 },
};

function ProcessShapesGraphic() {
  const { top, bl, br, splitL, splitR, splitM } = TRI;

  return (
    <div className="process-shapes__frame">
      <span className="process-shapes__glow" aria-hidden="true" />
      <svg
        className="process-shapes__svg"
        viewBox="0 0 400 360"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Three-step investment process"
      >
        <defs>
          <clipPath id="process-tri-clip">
            <polygon
              points={`${top.x},${top.y} ${bl.x},${bl.y} ${br.x},${br.y}`}
            />
          </clipPath>
          <linearGradient id="process-grad-one" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a6b54" />
            <stop offset="100%" stopColor="#0d8568" />
          </linearGradient>
          <linearGradient id="process-grad-two" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3df5b8" />
            <stop offset="100%" stopColor="#0beaa2" />
          </linearGradient>
          <linearGradient id="process-grad-three" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9ef9dc" />
            <stop offset="100%" stopColor="#5cebc4" />
          </linearGradient>
          <filter id="process-shape-shadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="14" stdDeviation="16" floodOpacity="0.18" />
          </filter>
        </defs>

        <g clipPath="url(#process-tri-clip)" filter="url(#process-shape-shadow)">
          <g className="process-shapes__group process-shapes__group--one">
            <polygon
              className="process-shapes__piece"
              fill="url(#process-grad-one)"
              points={`${splitL.x},${splitL.y} ${bl.x},${bl.y} ${splitM.x},${bl.y} ${splitM.x},${splitL.y}`}
            />
          </g>
          <g className="process-shapes__group process-shapes__group--two">
            <polygon
              className="process-shapes__piece"
              fill="url(#process-grad-two)"
              points={`${top.x},${top.y} ${splitL.x},${splitL.y} ${splitR.x},${splitR.y}`}
            />
          </g>
          <g className="process-shapes__group process-shapes__group--three">
            <polygon
              className="process-shapes__piece"
              fill="url(#process-grad-three)"
              points={`${splitR.x},${splitR.y} ${br.x},${br.y} ${splitM.x},${bl.y} ${splitM.x},${splitR.y}`}
            />
          </g>
          <line
            className="process-shapes__divider"
            x1={splitL.x}
            y1={splitL.y}
            x2={splitR.x}
            y2={splitR.y}
          />
          <line
            className="process-shapes__divider"
            x1={splitM.x}
            y1={splitM.y}
            x2={splitM.x}
            y2={bl.y}
          />
        </g>

        {[1, 2, 3].map((step) => {
          const card = processCards.find((c) => c.step === step);
          const label = LABELS[step];
          if (!card || !label) return null;
          return (
            <text
              key={step}
              className={`process-shapes__number process-shapes__number--${card.tone}`}
              x={label.x}
              y={label.y}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {String(step).padStart(2, "0")}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

function ProcessStep({ card, placement }) {
  return (
    <article
      className={`process-step process-step--${placement} process-step--${card.tone}`}
    >
      <div className="process-step__head">
        <span className="process-step__badge">
          {String(card.step).padStart(2, "0")}
        </span>
        <span className="process-step__icon" aria-hidden="true">
          <i className={`fa-solid ${card.icon}`} />
        </span>
      </div>
      <h3 className="process-step__title">{card.title}</h3>
      <p className="process-step__text">{card.description}</p>
    </article>
  );
}

export default function ProcessSection() {
  const stepOne = processCards.find((c) => c.step === 1);
  const stepTwo = processCards.find((c) => c.step === 2);
  const stepThree = processCards.find((c) => c.step === 3);

  return (
    <section className="process full-section" id="goals">
      <div className="process__bg" aria-hidden="true" />
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">How we work</span>
          <h2 className="section-title">Your goals, guided by expert planning</h2>
          <p>
            Your investments should support the goals that matter most — with a
            process built on research, profiling, and ongoing review.
          </p>
        </header>

        <div className="process-layout">
          {stepOne && <ProcessStep card={stepOne} placement="left" />}

          <div className="process-shapes">
            <ProcessShapesGraphic />
          </div>

          <div className="process-layout__right">
            {stepTwo && <ProcessStep card={stepTwo} placement="right-top" />}
            {stepThree && (
              <ProcessStep card={stepThree} placement="right-bottom" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
