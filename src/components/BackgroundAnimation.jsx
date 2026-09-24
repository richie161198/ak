import "./BackgroundAnimation.css";

export default function BackgroundAnimation() {
  return (
    <div className="site-bg" aria-hidden="true">
      <div className="site-bg__gradient" />
      <span className="site-bg__orb site-bg__orb--1" />
      <span className="site-bg__orb site-bg__orb--2" />
      <span className="site-bg__orb site-bg__orb--3" />
      <span className="site-bg__grid" />
    </div>
  );
}
