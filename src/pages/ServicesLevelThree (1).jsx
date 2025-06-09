// import Swiper from "swiper/react";
import CheckScreenWidth from "../components/CheckScreenWidth";
import FixedScrolling from "../components/FixedScrolling";

export default function ServicesLevelThree() {
  return (
    <>
      <section className="service-level-3-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="title_blk">
                <h2>
                  Capture More Revenue <br />
                  With the Best Local SEO Services
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <a href="" className="button button-primary">
                  Get a Consultation
                </a>
              </div>
            </div>
            <CheckScreenWidth setWidth={991}>
              <div className="col-md-6">
                <div className="video-container">
                  <video
                    src="images/service-level-3-banner.mp4"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </CheckScreenWidth>
          </div>
        </div>
      </section>
      <section className="business-stats">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="stats-wrapper">
                <div className="stats">
                  <div className="icon">
                    <img src="images/business-stats-yellow.png" alt="" />
                    <div className="number">500+</div>
                  </div>
                  <div className="field">Digital Experts</div>
                </div>
                <div className="stats">
                  <div className="icon">
                    <img src="images/business-stats-purple.png" alt="" />
                    <div className="number">28</div>
                  </div>
                  <div className="field">Year Track Record</div>
                </div>
                <div className="stats">
                  <div className="icon">
                    <img src="images/business-stats-green.png" alt="" />
                    <div className="number">1100+</div>
                  </div>
                  <div className="field">Reviews</div>
                </div>
                <div className="stats">
                  <div className="icon">
                    <img src="images/business-stats-blue.png" alt="" />
                    <div className="number">In-house</div>
                  </div>
                  <div className="field">Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk">
        <div className="container">
          <div className="row">
            <CheckScreenWidth>
              <div className="col-md-6">
                <div className="video-container">
                  <video
                    src="images/jumbling_dollars.mp4"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </CheckScreenWidth>
            <div className="col-md-6">
              <div className="title_blk">
                <h2>Is It Time for a New Local SEO Strategy?</h2>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                <ul>
                  <li>Mauris efficitur ipsum nec sapien feugiat blandit.</li>
                  <li>Curabitur elementum nunc a semper eleifend.</li>
                  <li>
                    Maecenas finibus purus sit amet nisi convallis, a molestie
                    leo egestas.
                  </li>
                  <li>Aenean euismod sem ac fermentum dictum.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <FixedScrolling />
      <section className="cta-dark-bg pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk text-white">
                <h2>
                  Confused? <br />
                  Connect For Free Consultation
                </h2>
              </div>
              <div className="btn-group">
                <a href="" className="pri">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk center text-center">
                <h2>
                  Transparent Local SEO Pricing Tailored to <br />
                  Your Business Goals
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </section>
    </>
  );
}
