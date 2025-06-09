import Tabs from "../components/Tabs";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientSlider from "../components/ClientSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarqueBlock from "../components/MarqueBlock";
import AddressTab from "../components/AddressTab";
import BrandMarket from "../components/BrandMarket";
import CustomCursor from "../components/CustomCursor";
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const abtBg = {
  background: "url(images/abt_bg.png) no-repeat",
};

const clientBg = {
  background: "url(images/cliend_bg.jpg) no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const pinColumnRef = useRef(null);
  const scrollColumnRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pinColumn = pinColumnRef.current;
    const scrollColumn = scrollColumnRef.current;

    if (section && pinColumn && scrollColumn) {
      // Create GSAP scroll animation
      gsap.to(scrollColumn, {
        y: () => window.innerHeight - scrollColumn.clientHeight,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: "margin",
          // pinSpacing: false,
          start: "top top",
          endTrigger: scrollColumn,
          end: "bottom bottom",
          // end: `+=${section.offsetHeight}`,
          scrub: true,
          // markers: true, // Enable markers for debugging
          invalidateOnRefresh: true,
        },
      });
    }

    // Cleanup the ScrollTrigger when the component unmounts
    // Cleanup the ScrollTrigger when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <section
        className="section-home-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CustomCursor isHovered={isHovered} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 ps-5">
              <h1>
                Full-Service <span>Digital Marketing Services</span> All In One
                Place
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-md-6">
              <div className="video-container">
                <video
                  src="/images/home-hero-compressed.mp4"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandMarket
        title="The Leader In Digital Marketing"
        description="The top-rated software and digital marketing firm in the Canada, with more than 200 five-star reviews from past clients"
      />

      <section className="discover_blk pad_cmn_blk" ref={sectionRef}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 pin-column" ref={pinColumnRef}>
              <div className="title_blk title-big">
                <h2>Discover</h2>
                <h4>
                  what’s next for your organization <br />
                  with
                  <span>
                    <a href="/">Gwebpro</a>
                  </span>
                  Marketing Inc.
                </h4>
              </div>
              <div className="video-container">
                <video
                  src="images/home-discover.mp4"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                ></video>
              </div>
            </div>

            <div className="col-md-6 col-lg-7 ps-lg-5" ref={scrollColumnRef}>
              <div className="discover-cards">
                <div className="row">
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="discover-card">
                      <div className="icon">
                        <img src="/images/website-design.svg" alt="" />
                      </div>
                      <div className="title">Website Design</div>
                      <div className="text">
                        Is a long established fact that a reader will be
                        distracted by the readable content of a page.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_abt pad_cmn_blk" style={abtBg}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 home_abt_cnt mb-4 mb-md-0">
              <div className="title_blk title-big">
                <h2>About Us</h2>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <ul>
                <li>
                  <h4>10+</h4>
                  <p>
                    years of experience in software engineering and IT
                    consulting
                  </p>
                </li>

                <li>
                  <h4>500+</h4>
                  <p>software developers and other IT professionals on board</p>
                </li>

                <li>
                  <h4>35+</h4>
                  <p>active clients building and augmenting software with us</p>
                </li>
              </ul>
            </div>

            <div className="col-md-5"></div>
          </div>
        </div>
      </section>

      <section className="market_tab_blk pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">video/gif</div>

            <div className="col-md-6 col-lg-8 ps-lg-5">
              <div className="title_blk">
                <h2>
                  An Integrated Team <br></br>for Accelerated Marketing
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <Tabs />
            </div>
          </div>
        </div>
      </section>

      <section className="client_slider_blk pad_cmn_blk" style={clientBg}>
        <div className="container">
          <div className="title_blk text-center">
            <h2>Our Happy Clients</h2>
          </div>

          <ClientSlider />

          <div className="clnt-btn text-center">
            <a href="/" className="btn-white">
              View Our Case Studies
            </a>
          </div>
        </div>
      </section>

      <section className="our_work pad_cmn_blk">
        <div className="container">
          <div className="title_blk text-center mb-5">
            <h2>
              Some Of <br />
              Our Finest Works
            </h2>
          </div>
        </div>

        <MarqueBlock />

        <div className="portfolio_btn text-center">
          <a href="/">
            View All Portfolio <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>

      <section className="address_blk pad_cmn_blk">
        <div className="container">
          <AddressTab />
        </div>
      </section>
    </>
  );
};

export default Home;
