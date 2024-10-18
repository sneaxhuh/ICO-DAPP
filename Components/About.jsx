import React from "react";

const About = () => {
  return (
    <section id="about" className="about pos-rel pb-140">
      <div className="container">
        <div
          className="row align-items-center
  mt-none-30"
        >
          <div className="col-lg-6 mt-30">
            <div className="about__img pos-rel wowfadeInLeft">
              <img src="assets/img/about/about/about_img.png" alt="" />
              <div className="about__shape">
                <img src="assets/img/shape/about_shape.png" alt="" srcset="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-30">
            <div
              className="about_content wow
fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="sec-title mb-35">
                <h5 className="sec-title___subtitle">WHAT IS ICO CRYPTO</h5>
                <h2 className="sec-title__title mb-25"> idkdkkdkw</h2>
                <p>fwfwf</p>
              </div>
              <ul className="about__list ul_li">
                <li>
                  <img src="assets/img/icon/a_arror.svg" alt="" /> Decentralized
                  Platform
                </li>
                <li>
                  <img src="assets/img/icon/a_arror.svg" alt="" /> Rewards
                  Mechanism
                </li>
                <li>
                  <img src="assets/img/icon/a_arror.svg" alt="" /> Crowd wisdom
                </li>
                <li>
                  <img src="assets/img/icon/a_arror.svg" alt="" /> Investor
                  protection
                </li>
                <li>
                  <img src="assets/img/icon/a_arror.svg" alt="" /> Token Sale
                  Phases
                </li>
                <li>
                  <img src="assets/img/icon/a_arror.svg" alt="" /> Exchange
                  Listing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about__sec-shape">
        <img src="assets/img/shape/s_shape_2.png" alt="" />
      </div>
    </section>
  );
};
export default About;
