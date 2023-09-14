import "./LandingPage.css";
import heroImg from "../../images/hero1.gif";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import service1 from "../../images/website_builder.svg";
import service2 from "../../images/personal_website.svg";
import service3 from "../../images/cms.svg";
import service4 from "../../images/wordpress.svg";
import quote from "../../images/quote.svg";
import meta from "../../images/meta.svg";
import x from "../../images/x.svg";
import insta from "../../images/insta.svg";
import linkedin from "../../images/linkedin.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => {
    setShowMenu(!showMenu);
  };
  function scrollToSection(event, sectionId) {
    event.preventDefault(); // Prevent the default behavior (page refresh)
    const section = document.getElementById(sectionId);
    if (section) {
      setShowMenu(!showMenu);
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <header id="home" className="lp-header">
        <nav className="lp-nav">
          <a href="" className={`lp-logo`}>
            Pul<span>Ish</span>
          </a>
          <div>
            <ul className={`lp-menu ${showMenu ? "active" : ""}`}>
              <li onClick={toggle} className="closeMenu">
                {showMenu && <CloseIcon />}
              </li>
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  onClick={(e) => scrollToSection(e, "about-us")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  onClick={(e) => scrollToSection(e, "contact-us")}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile" onClick={toggle}>
            {!showMenu && <MenuRoundedIcon />}
          </div>
        </nav>
        <section className="hero">
          <div className="left">
            <div style={{ fontWeight: "bolder", color: "black" }}>
              {"We're "}
            </div>
            <h1>Website builders</h1>
            <p
              style={{
                wordWrap: "break-word",
                color: "#777",
                marginBottom: "1rem",
              }}
            >
              {
                "Unleash your business's full potential with our innovative tools and expert guidance. Experience the future of small business management today and embark on a journey of efficiency, growth, and success."
              }
            </p>
            <br />
            <Link to={"/dashboard"}>Get Started</Link>
          </div>
          <div className="right">
            <img src={heroImg} alt="img.png" />
          </div>
        </section>
      </header>
      <section>
        <div id="services">
          <div className="services-upper">
            <div>
              <h1>Services</h1>
              <div className="border"></div>
            </div>
            <p>
              {
                "At Pulish, we specialize in a range of services tailored for small businesses. From digital transformation to e-commerce optimization, our solutions are designed to drive results. We work closely with you to create customized strategies and implement cutting-edge technologies that streamline operations and boost growth. With our team of experts, your business is poised for success in the digital age."
              }
            </p>
          </div>
          <div className="services-lower">
            <div>
              <div>
                <img src={service1} alt="" />
                <h3>Digital Transformation</h3>
                <h2>Enhance Efficiency</h2>
                <p className="service-description">
                  {"Elevate your operations with tech"}
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={service2} alt="" />
                <h3>E-commerce Boost</h3>
                <h2>Maximize Sales</h2>
                <p className="service-description">
                  {"Optimize your online store for growth."}
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={service3} alt="" />
                <h3>Data Insights</h3>
                <h2>Informed Decisions</h2>
                <p className="service-description">
                  {"Unlock the power of your data"}
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={service4} alt="" />
                <h3>Customer Engagement</h3>
                <h2>Delight Your Audience</h2>
                <p className="service-description">
                  {"Build stronger customer relationships."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="testimonial">
          <div className="para">
            <img src={quote} />
            <p className="main-para">
              {
                "In order to make the future a reality, you need to believe in the impossible. At"
              }{" "}
              <em style={{ color: "black", fontWeight: "bold" }}>
                Pul<span style={{ color: "rgb(121, 109, 203)" }}>Ish</span>
              </em>{" "}
              {
                ", we share this vision. We're inspired by the relentless pursuit of innovation, the desire to push boundaries, and the courage to explore uncharted territories. Our mission is to empower businesses to embrace the future with confidence. We believe that with the right technology and the right mindset, anything is achievable. Together, we can redefine what's possible and shape a better"
              }{" "}
              tomorrow.
            </p>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "1rem",
              }}
              className="border"
            ></div>
            <h2>PulIsh</h2>
          </div>
        </div>
      </section>
      <section>
        <div id="about-us">
          <div className="about-us-content">
            <div className="about-us-left">
              <img src={service2} alt="" />
            </div>
            <div className="about-us-right">
              <h2>About Us</h2>
              <h3>Our Story and Vision</h3>
              <ul>
                <li>
                  {
                    "Briefly state the mission and purpose of your startup, highlighting the problem you aim to solve or the value you provide to customers."
                  }
                </li>
                <li>
                  {
                    "Explain your unique approach or methodology in addressing challenges or delivering solutions."
                  }
                </li>
                <li>
                  {
                    "Introduce your core team members, emphasizing their expertise and commitment to your mission."
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="contact-us">
          <div className="contact-us-container">
            <div className="contact-us-upper">
              <h1>Contact Us</h1>
              <p>
                {
                  "Reach out and let's connect. We're here to assist you and explore collaboration opportunities. Your inquiries are important to us."
                }
              </p>
            </div>
            <div className="contact-us-lower">
              <div className="contact-form">
                <div className="contact-name">
                  <div>Name</div>
                  <input type="text" placeholder="ex: Rohan" />
                </div>
                <div className="contact-email">
                  <div>Email</div>
                  <input type="email" placeholder="ex: rohan@gmail.com" />
                </div>
                <div className="contact-message">
                  <div>Message</div>
                  <textarea name="" id="" rows="10"></textarea>
                </div>
                <div className="contact-btn">
                  <button className="">Send</button>
                </div>
              </div>
              <div className="contact-border"></div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div id="footer">
          <a href="" className="footer-title">
            Pul<span>Ish</span>
          </a>
          <p className="footer-para">
            © 2020 Puslish —<a href="">@pulish</a>
          </p>
          <span className="footer-socials">
            <a href="" style={{ marginLeft: "0" }}>
              <img src={meta} alt="" />
            </a>
            <a href="">
              <img src={x} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
