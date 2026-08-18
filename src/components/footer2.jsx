import LOGO_WHITE from "../assets/img/logo/logo-white3.png";
import "./FooterThree.css";

export function FooterThree() {
  return (
    <footer className="td-footer-area full-section" id="footer">
      <div className="td-footer-3-top">
        <div className="container">
          <div className="footer-top-grid">
            <div className="td-footer-3-logo">
              <img src={LOGO_WHITE} alt="Aktineu LLP" />
            </div>
            <div className="td-footer-3-top-content">
              <p>
                Looking for connection? Send an email to{" "}
                <a href="mailto:connect@aktineu.com">connect@aktineu.com</a>{" "}
                for valuable enquiries.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="td-footer-3-wrap">
        <div className="container">
          <div className="footer-main-grid">
            <div className="td-footer-3-widget">
              <h2 className="td-footer-3-widget-big-title">
                Your Goal
                <br />
                <span>Our Strategy</span>
              </h2>
            </div>

            <div className="td-footer-3-columns">
              <div className="td-footer-3-widget">
                <h2 className="td-footer-3-widget-title">Menu</h2>
                <ul>
                  <li>
                    <a href="/terms&condition">Terms &amp; Condition</a>
                  </li>
                  <li>
                    <a href="/privacypolicy">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="td-footer-3-widget">
                  <h2 className="td-footer-3-widget-title">Contact Us</h2>
                  <div className="td-footer-3-link">
                    <a href="mailto:connect@aktineu.com">
                      Mail : connect@aktineu.com
                    </a>
                    <a href="tel:+919994031721">Call : +(91) 9994031721</a>
                  </div>
                </div>

                <div className="td-footer-3-widget">
                  <h2 className="td-footer-3-widget-title">Our Address</h2>
                  <div className="td-footer-3-link">
                    <a
                      href="https://www.google.com/maps/@13.033732,80.262212,18.17z"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Flat No. 4, Sri Ganesh Apartments,
                      <br />
                      #3 Abhiramapuram 3rd Street,
                      <br />
                      Chennai – 600018
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="td-footer-bottom">
        <div className="container">
          <div className="td-footer-3-bottom-border td-footer-3-bottom-spacing">
            <div className="td-footer-3-bottom-row">
              <div className="td-footer-3-bottom-copyright">
                <p>
                  © {new Date().getFullYear()}{" "}
                  <a href="https://aktineu.com">Aktineu</a>, All rights
                  reserved.
                </p>
              </div>

              <div className="td-footer-3-bottom-social">
                <ul>
                  <li>
                    <div className="store-badges">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.aktineu.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                          alt="Get it on Google Play"
                        />
                      </a>
                      <a
                        href="https://apps.apple.com/in/app/aktineu/id6740485980"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                          alt="Download on the App Store"
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/aktineullp"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@aktineullp"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/aktineullp"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/+919994031721?text=Hi"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/aktineu.llp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterThree;
