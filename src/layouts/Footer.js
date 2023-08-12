const Footer = () => {
  return (
    <div className="rsk_tm_section">
      <div className="rsk_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="top">
              <div className="logo">
                <img src="img/logo/logo.png" alt="rsk image" />
              </div>
              <div className="social">
                <span>Connect</span>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/rittik.sadhukhan/">
                      <i className="icon-facebook-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/RittikSadhukhan">
                      <i className="icon-twitter-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/astarand_official/">
                      <i className="icon-instagram-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <p>
                  Designed & made with love by{" "}
                  <a
                    className="line_anim"
                    href="https://www.linkedin.com/in/astarand/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    AstarAnD-
                  </a>{" "}
                  © {new Date().getFullYear()}
                </p>
              </div>
            </div>
            <span
              className="border moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
        <span className="square moving_effect" data-direction="x" />
      </div>
    </div>
  );
};

export default Footer;
