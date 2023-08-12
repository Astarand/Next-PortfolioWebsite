import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });
  return (
    <div className="rsk_tm_section" id="portfolio">
      <div className="rsk_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div
                className="rsk_tm_main_title"
                data-text-align="left"
                data-color="light"
              >
                <span>My Expertises</span>
                <h3>
                  I can Convert your vision to make a Brand into Reality
                </h3>
                <p>
                 In my 3years+ Experience & With my expertise in turning concepts into tangible brands, I possess the ability to transform your vision into a thriving reality. By utilizing strategic planning, innovative design, and effective marketing, I can bring your brand to life, capturing its essence and captivating your target audience with utmost precision and impact.
                </p>
              </div>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="dodo_progress">
                <div className="progress_inner skillsInner___" data-value={86}>
                  <span>
                    <span className="label">Front-End Development</span>
                    <span className="number">86%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={73}>
                  <span>
                    <span className="label">Digital Marketing</span>
                    <span className="number">73%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={68}>
                  <span>
                    <span className="label">Graphics Design</span>
                    <span className="number">68%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={72}>
                  <span>
                    <span className="label">Branding</span>
                    <span className="number">72%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span
          className="border moving_effect"
          data-direction="x"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Skills;
