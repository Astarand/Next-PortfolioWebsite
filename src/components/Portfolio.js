import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import {
  fb,
  insta,
  maximize,
  soundcloud,
  text,
  twitter,
  vimeo,
  youtube,
} from "../svgImage";
import { aTagClick, dataImage } from "../utilits";
import ModalBox from "./ModalBox";
import Popup from "./Popup";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    dataImage();
    aTagClick();
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  // popup
  const [video, setVideo] = useState(false);
  const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  const showPopup = (name, src) => {
    setVideo(true);
    setVideoContent({ name, src });
  };
  // Model Box
  const [modal, setModal] = useState(0);
  return (
    <div className="rsk_tm_section help" id="portfolio">
      {video && <Popup close={setVideo} content={videoContent} />}
      <div className="rsk_tm_portfolio">
        <div className="container">
          <div
            className="rsk_tm_main_title"
            data-text-align="center"
            data-color="light"
          >
            <span>My Previous works</span>
            <h3>Check my portfolio</h3>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a onClick={handleFilterKeyChange("*")} className="current">
                  All
                </a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("web")}>Web Design</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("logo")}>Logo Design</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("digital")}>
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              <li className="filter-item web">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/web-thumb1.jpg" alt="webimg-1" />
                    <div
                      className="main"
                      data-img-url="img/thumbs/web-thumb1.jpg"
                    />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Web Application</span>
                    <h3>Citz- Car Rental Services</h3>
                  </div>
                  <a
                    className="rsk_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <div className={modal === 1 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/portfolio/web-1.png" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/web-1.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Detail</span>
                          <h3>Citz</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              Citz is an app-based cab and bike taxi service. We
                              also provide ambulance and professional car rental
                              services, with economy to luxury cars. We offer
                              budget-friendly end-to-end travel and goods
                              delivery services using an online cab and bike
                              taxi app integrated with advanced AI technology
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Client</span>
                                <span>Citz</span>
                              </li>
                              <li>
                                <span className="first">Link</span>
                                <a href="https://citz.in/">
                                  <u>Citz</u>
                                </a>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">Web Application</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>Oct 01, 2020</span>
                              </li>
                              <li>
                                <span className="first">Technology Used</span>
                                <ul className="share">
                                  <li>
                                    <p>HTML/CSS</p>
                                  </li>
                                  <li>
                                    <p>React</p>
                                  </li>
                                  <li>
                                    <p>Node</p>
                                  </li>
                                  <li>
                                    <p>AWS</p>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/web-1_2.jpg"
                                    alt="rsk image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/web-1_2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/web-1_3.jpg"
                                    alt="rsk image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/web-1_3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/web-1_4.jpg"
                                    alt="rsk image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/web-1_4.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item web">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/web-thumb2.jpg" alt="webimg-1" />
                    <div
                      className="main"
                      data-img-url="img/thumbs/web-thumb2.jpg"
                    />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Website</span>
                    <h3>Chakhor</h3>
                  </div>
                  <a
                    className="rsk_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(2)}
                  />
                  <div className={modal === 2 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/portfolio/web-2.png" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/web-2.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Details</span>
                          <h3>Chakhor</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              At Chakhor, we are passionate about one thing -
                              chai. We believe that a perfect cup of chai has
                              the power to brighten your day, evoke nostalgia,
                              and create moments of connection. Our love for
                              chai led us to create a space where chai
                              enthusiasts like you can discover the finest
                              blends, experience the rich flavors, and indulge
                              in the cozy comfort that chai brings.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Client</span>
                                <span>Webingo</span>
                              </li>
                              <li>
                                <span className="first">Link</span>
                                <a href="https://chakhor.com/">
                                  <u>Chakhor</u>
                                </a>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">Website</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>March, 2023</span>
                              </li>
                              <li>
                                <span className="first">Technology Used</span>
                                <ul className="share">
                                  <li>
                                    <p>HTML/CSS</p>
                                  </li>
                                  <li>
                                    <p>jQuery</p>
                                  </li>
                                  <li>
                                    <p>Bootstrap</p>
                                  </li>
                                  <li>
                                    <p>Php</p>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/web-1_2.jpg"
                                    alt="rsk image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/web-2_2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/web-2_3.jpg"
                                    alt="rsk image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/web-2_3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/web-2_4.jpg"
                                    alt="rsk image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/web-2_4.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item web">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/web-thumb3.jpg" alt="webimg-1" />
                    <div
                      className="main"
                      data-img-url="img/thumbs/web-thumb3.jpg"
                    />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Website</span>
                    <h3>360 Business & Services</h3>
                  </div>
                  <a
                    className="rsk_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <div className={modal === 3 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/portfolio/web-3.png" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/web-3.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Details</span>
                          <h3>360 Business & Services</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              Complete solutions for your business. We help your
                              business comply with company registration,obtain
                              licences, and ensure compliance with applicable
                              tax laws
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Client</span>
                                <span>Freelance</span>
                              </li>
                              <li>
                                <span className="first">Link</span>
                                <a href="https://360bizservice.com/">
                                  <u>360 Business & Services</u>
                                </a>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">Website</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>Oct 01, 2020</span>
                              </li>
                              <li>
                                <span className="first">Technology Used</span>
                                <ul className="share">
                                  <li>
                                    <p>HTML/CSS</p>
                                  </li>
                                  <li>
                                    <p>JavaScript</p>
                                  </li>
                                  <li>
                                    <p>Bootstrap</p>
                                  </li>
                                  <li>
                                    <p>php</p>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/web-3_2.jpg"
                                    alt="rsk image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/web-3_2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/web-3_3.jpg"
                                    alt="rsk image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/web-3_3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/web-3_3.jpg"
                                    alt="rsk image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/web-3_3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item logo">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/logo-1.png" alt="logo1" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/logo-1.png"
                    />
                  </div>
                  <div className="overlay" />
                  {maximize}
                  <div className="details">
                    <span>Logo</span>
                    <h3>Citz</h3>
                  </div>
                  <a
                    className="rsk_tm_full_link zoom"
                    href="#"
                    onClick={() =>
                      showPopup("image", "img/portfolio/logo-1.png")
                    }
                  />
                </div>
              </li>
              <li className="filter-item logo">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/logo-2.png" alt="logo2" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/logo-2.png"
                    />
                  </div>
                  <div className="overlay" />
                  {maximize}
                  <div className="details">
                    <span>Logo</span>
                    <h3>360 Business and Services</h3>
                  </div>
                  <a
                    className="rsk_tm_full_link zoom"
                    href="#"
                    onClick={() =>
                      showPopup("image", "img/portfolio/logo-2.png")
                    }
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
