import mapImage from "../assets/img/map/map.png";
import "./MapOne.css";

export function MapOne() {
  return (
    <section className="map-section full-section section-band" id="global">
      <div className="container">
        <div className="map-section__panel card">
          <header className="map-section__header section-header">
            <span className="eyebrow">Global reach</span>
            <h2 className="section-title">Trusted across markets</h2>
          </header>

          <div className="map-section__content">
            <div className="map-section__copy">
              <p className="map-section__count" aria-label="250 plus clients">
                250+
              </p>
              <p className="map-section__text">
                Our focus is on delivering long-term financial value to our clients
                through compliant and goal-driven investment strategies. We design
                sustainable wealth-building solutions aligned with your life goals
                and market realities. From strategic planning to portfolio
                execution, we&apos;re here to ensure your financial journey
                succeeds. Backed by decades of expertise in disciplined investing,
                we think, plan, and invest with your future in mind.
              </p>
            </div>

            <div className="map-section__visual">
              <img src={mapImage} alt="Global client map" />
              <span className="map-dot map-dot--india" />
              <span className="map-dot map-dot--us" />
              <span className="map-dot map-dot--europe" />
              <span className="map-dot map-dot--australia" />
              <span className="map-dot map-dot--middle-east" />
              <span className="map-dot map-dot--singapore" />
              <span className="map-dot map-dot--malaysia" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapOne;
