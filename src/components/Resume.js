import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Resume = () => {
  useEffect(() => {
    jarallaxContent();
  }, []);
  return (
    <div className="rsk_tm_section">
      <div className="rsk_tm_resume">
        <div className="content">
          <div className="container">
            <div className="resume_in">
              <div
                className="rsk_tm_main_title"
                data-text-align="left"
                data-color="dark"
              >
                <span>My Education and Work</span>
                <h3>History</h3>
                <p>
                  I enjoy every step of the design process, from discussion and
                  collaboration to concept and execution
                </p>
              </div>
              <div className="content_inner">
                <ul>
                  <li className="wow fadeInLeft" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Education</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Computer Application</h3>
                              <span>MAKAUT</span>
                            </div>
                            <div className="right">
                              <span>2016 - 2019</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Graduate with Bachelor of Computer Application in 2019 from Maulana Abul Kalam university of technology
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Higher Secondary</h3>
                              <span>Kolsur High School</span>
                            </div>
                            <div className="right">
                              <span>2014 - 2016</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              I complete HS education Specialized in Computer Application
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Secondary Education</h3>
                              <span>Kolsur High School</span>
                            </div>
                            <div className="right">
                              <span>2012 - 2014</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              I complete my Secondary education from Kolsur High School with general steam
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="wow fadeInRight" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Experience</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Web Designer</h3>
                              <span>Webingo</span>
                            </div>
                            <div className="right">
                              <span>2023 - 2023</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              in Webingo I work there as a Web Designer I work there from Apr 2023 to June 2023.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>FrontEnd Developer</h3>
                              <span>Citz</span>
                            </div>
                            <div className="right">
                              <span>2020 - 2023</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              In Citz I work there as a Front End Developer I work there from Oct 2020 to Mar 2023.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Jr.Web Designer</h3>
                              <span>PivotNet Technologies</span>
                            </div>
                            <div className="right">
                              <span>2019 - 2020</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              In Pivotnet I work there as a Jr.web Designer I work there from Dec 2019 to Apr 2020.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="media" data-background-style="video">
          {" "}
          {/* Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos */}
          <div
            className="video jarallax"
            data-speed={0}
            data-jarallax-video="https://youtu.be/_QmyeFfiZaU"
          />
          <div
            className="image jarallax"
            data-speed={0}
            data-img-url="img/about/2.jpg"
          />
          <span
            className="square moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
