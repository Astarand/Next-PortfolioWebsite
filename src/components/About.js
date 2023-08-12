import { download } from "../svgImage";

const About = () => {
  return (
    <div className="rsk_tm_section" id="about">
      <div className="rsk_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="img/thumbs/45-49.jpg" alt="rsk image" />
              <div className="main" data-img-url="img/about/1.png" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">Hey There!</span>
              <h3>
                <span>{`I'm`}</span>  Rittik Sadhukhan
              </h3>
              <h3>
                Front-End <span>Developer</span>
              </h3>
              <span className="subtitle">Based in Kolkata,India</span>
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
                Hi! My name is Rittik Sadhukhan. I am Front-end Developer, also {`I'm a`}{" Freelancer "}
                very passionate and dedicated to my work.
              </p>
              <p>
                Innovative Developer with 3+ years in Technology in Front end Development. I serve early and mid-stage companies like Pivotnet Technologies Pvt.Ltd, Citz & Webingo infotech Solution LLP and helped there increase development rate by 7%+. And I want to become a 𝑾𝒆𝒃3 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓.
              </p>
            </div>
            <div
              className="rsk_tm_button wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <a href="img/cv/Rittik_Sadhukhan.pdf" download>
                <span>Download CV {download}</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="img/thumbs/41-61.jpg" alt="rsk image" />
              <div className="main" data-img-url="img/about/2.png" />
              <div
                className="square moving_effect"
                data-direction="x"
                data-reverse="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
