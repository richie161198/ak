import mapImage from "../assets/img/map/map.png";
import "./MapOne.css";

export function MapOne() {
  return (
    <section className="map-section full-section">
      <div className="container">
        <div className="map-section__intro">
          <div className="map-section__count">
            <h2 className="map-section__count-title">250+</h2>
          </div>
          <div className="map-section__text">
            <p>
              Our focus is on delivering long-term financial value to our clients
              through compliant and goal-driven investment strategies. We design
              sustainable wealth-building solutions aligned with your life goals
              and market realities. From strategic planning to portfolio
              execution, we're here to ensure your financial journey succeeds.
              Backed by decades of expertise in disciplined investing, we think,
              plan, and invest with your future in mind.
            </p>
          </div>
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
    </section>
  );
}

export default MapOne;
