import { useEffect, useState } from "react";
import {
  msg,
  pen,
  penDark,
  user,
  userDark,
  web,
  webDark,
} from "../svgImage";
import ModalBox from "./ModalBox";

const Service = ({ dark }) => {
  const [modal, setModal] = useState(0);
  const hidden = (value) => (value === modal ? "" : "service_hidden_details");
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);
  return (
    <div className="rsk_tm_section" id="service">
      <div className="rsk_tm_service">
        <div className="container">
          <div className="service_list">
            <ul>
              <li className="simple wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div
                    className="rsk_tm_main_title1"
                    data-text-align="left"
                    data-color="dark"
                  >
                    <span>What I Do</span>
                    <h3>My Services</h3>
                    <p style={{ color: '#fff' }}>
                      We offer high quality products for competitive prices. Our
                      main goal is customer satisfaction, which we obtain
                      through market orientation of ongoing service and support.
                    </p>
                  </div>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? webDark : web}

                  </span>
                  <div className="title">
                    <h3>Web Design</h3>
                    <span className="price">
                      Starts from <span>$15</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Professional web design services using Photoshop, Figma, and XD. Transforming ideas into visually captivating websites with precision and creativity.
                    </p>
                  </div>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? userDark : user}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Brand Identity</h3>
                    <span className="price">
                      Starts from <span>$49</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      We create memorable brand identities through captivating logos and visually stunning graphics, crafting a distinct visual language for businesses to stand out and make a lasting impression.
                    </p>
                  </div>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? penDark : pen}
                  </span>
                  <div className="title">
                    <h3>Front-End Development</h3>
                    <span className="price">
                      Starts from <span>$59</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Expert front-end development services using HTML, CSS, JS, jQuery, React, and Next.js. Delivering high-quality, responsive, and interactive websites to meet your business needs and engage your audience effectively.
                    </p>
                  </div>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? webDark : web}
                  </span>
                  <div className="title">
                    <h3>Digital Marketing</h3>
                    <span className="price">
                      Starts from <span>$39</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Digital Marketing services encompassing SEO, SEM, SMO, and SMM. Boost your online presence, increase visibility, and engage your audience through strategic SEO,SEM,SMO,SMM.
                    </p>
                  </div>

                </div>
              </li>
              <li className="simple text wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="inner_text">
                      <h3>Do You Want Something Different?</h3>
                    </div>
                    <div className="rsk_tm_button border">
                      <a className="anchor" href="#contact">
                        <span>Knock Me {msg}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span
          className="square_left moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span
          className="square_right moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Service;
