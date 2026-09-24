import { useEffect, useState } from "react";
import { heroGoals, LOGIN_URL, stats } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const [goalIndex, setGoalIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const primaryStat = stats.find((s) => s.highlight) ?? stats[0];
  const secondaryStats = stats.filter((s) => !s.highlight);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setGoalIndex((i) => (i + 1) % heroGoals.length);
        setVisible(true);
      }, 280);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__dark">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="hero__glow hero__glow--2" aria-hidden="true" />

        <div className="container hero__grid">
          <div className="hero__content">
            <p className="hero__lead">Invest with clarity.</p>
            <h1 className="hero__title">
              Plan for your{" "}
              <span
                className={`hero__goal ${visible ? "hero__goal--visible" : ""}`}
              >
                {heroGoals[goalIndex]}
              </span>
            </h1>
          </div>

          <aside className="hero__journey card">
            <h2 className="hero__journey-title">
              Your wealth journey starts here
            </h2>
            <p className="hero__journey-stat">
              <span className="hero__journey-stat-value">
                {primaryStat.value}
              </span>
              <span className="hero__journey-stat-label">
                {primaryStat.label}
              </span>
            </p>
            <a
              href={LOGIN_URL}
              className="btn btn-primary hero__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start investing today
            </a>
            <div className="hero__mini-stats">
              {secondaryStats.map((stat) => (
                <div key={stat.label} className="hero__mini-stat">
                  <span className="hero__mini-stat-value">{stat.value}</span>
                  <span className="hero__mini-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
