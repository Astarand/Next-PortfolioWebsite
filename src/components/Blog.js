import { useState } from "react";
import ModalBox from "./ModalBox";

const Blog = () => {
  const [modal, setModal] = useState(0);
  const hidden = (value) => (value === modal ? "" : "news_hidden_details");
  return (
    <div className="rsk_tm_section" id="blog">
      <div className="rsk_tm_news">
        <div className="container">
          <div
            className="rsk_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>Check me out on Fiverr and Upwork</span>
            <h3>From My Project and Gig</h3>
            <p>
              We offer high quality products for competitive prices. Our main
              goal is customer satisfaction
            </p>
          </div>
          <div className="news_list">
            <ul>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/news/1.jpg" alt="rsk image" />
                    <div className="main" data-img-url="img/news/1.jpg" />
                    <a
                      className="rsk_tm_full_link"
                      href="https://www.fiverr.com/s/Kp1Gy2"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="https://www.fiverr.com/s/Kp1Gy2">Branding</a>
                    </span>
                    <h3 className="title">
                      <a href="https://www.fiverr.com/s/Kp1Gy2">
                        I provide complete technical support and solution for your business
                      </a>
                    </h3>
                    <span className="date">July 17, 2023</span>
                  </div>
                  <div className="button">
                    <div className="rsk_tm_learn_more">
                      <a href="https://www.fiverr.com/s/Kp1Gy2">
                        Starts from $310
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-duration="1s">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/news/2.jpg" alt="rsk image" />
                    <div className="main" data-img-url="img/news/2.jpg" />
                    <a
                      className="rsk_tm_full_link"
                      href="https://www.fiverr.com/s/Wz1W57"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="https://www.fiverr.com/s/Wz1W57">Web Design</a>
                    </span>
                    <h3 className="title">
                      <a href="https://www.fiverr.com/s/Wz1W57">
                        I can  make pixel perfect PSD to HTML and figma to HTML responsive conversion
                      </a>
                    </h3>
                    <span className="date">July 17, 2023</span>
                  </div>
                  <div className="button">
                    <div className="rsk_tm_learn_more">
                      <a href="#">
                        Start From $39
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-duration="1s">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/news/3.jpg" alt="rsk image" />
                    <div className="main" data-img-url="img/news/3.jpg" />
                    <a
                        className="rsk_tm_full_link"
                        href="https://www.fiverr.com/s/k6VBqQ"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="https://www.fiverr.com/s/k6VBqQ">Front End Development</a>
                    </span>
                    <h3 className="title">
                      <a href="https://www.fiverr.com/s/k6VBqQ">
                        I Can Create responsive website design with HTML CSS javascript, React JS & Next JS
                      </a>
                    </h3>
                    <span className="date">July 17, 2021</span>
                  </div>
                  <div className="button">
                    <div className="rsk_tm_learn_more">
                      <a href="https://www.fiverr.com/s/k6VBqQ" >
                        Start From $49
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-duration="1s">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/news/4.jpg" alt="rsk image" />
                    <div className="main" data-img-url="img/news/4.jpg" />
                    <a
                        className="rsk_tm_full_link"
                        href="https://www.fiverr.com/s/p6eKvN"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="https://www.fiverr.com/s/p6eKvN">Web Maintenance </a>
                    </span>
                    <h3 className="title">
                      <a href="https://www.fiverr.com/s/p6eKvN">
                        I provide complete service for your existing website.
                      </a>
                    </h3>
                    <span className="date">July 17, 2023</span>
                  </div>
                  <div className="button">
                    <div className="rsk_tm_learn_more">
                      <a href="https://www.fiverr.com/s/p6eKvN">
                        Start From $15
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
