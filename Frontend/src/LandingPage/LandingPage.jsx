import "./LandingPage.css";
import heroImg from "../images/hero1.gif";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useEffect, useState } from "react";
import service1 from "../images/website_builder.svg";
import service2 from "../images/personal_website.svg";
import service3 from "../images/cms.svg";
import service4 from "../images/wordpress.svg";
import quote from "../images/quote.svg";
import meta from "../images/meta.svg";
import x from "../images/x.svg";
import insta from "../images/insta.svg";
import linkedin from "../images/linkedin.svg";

const LandingPage = () => {
  const [hamburger, setHamburger] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setHamburger(window.innerWidth <= 702);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <a href="" className="logo">
            Pul<span>Ish</span>
          </a>
          {hamburger ? (
            <MenuRoundedIcon className="hamBurger" />
          ) : (
            <>
              <div className="menu">
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
              </div>
              <div className="btn">
                <a href="">Get Started</a>
              </div>
            </>
          )}
        </nav>
        <section className="hero">
          <div className="left">
            <div style={{ fontWeight: "bolder" }}>{"We're "}</div>
            <h1>Website builders</h1>
            <p
              style={{
                wordWrap: "break-word",
                color: "#777",
                marginBottom: "1rem",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore, perferendis neque consequatur temporibus a delectus amet
              dolorem impedit provident
            </p>
            <br />
            <a href="">Order now</a>
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
              <h1>Services Title</h1>
              <div className="border"></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              facere, voluptatibus fugit sit a natus optio? Quis, fugit
              pariatur. Laboriosam excepturi quos impedit eligendi! Fugit,
              sequi. Veniam quos officiis, earum ipsa maxime itaque aperiam odio
              suscipit repellat. Consequuntur corporis accusantium, aliquam
              deleniti excepturi illo tenetur delectus quam provident
              reprehenderit iure.
            </p>
          </div>
          <div className="services-lower">
            <div>
              <div>
                <img src={service1} alt="" />
                <h3>SUBTITLE</h3>
                <h2>Web-dev</h2>
                <p className="service-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem, ipsum.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={service2} alt="" />
                <h3>SUBTITLE</h3>
                <h2>Web-dev</h2>
                <p className="service-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem, ipsum.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={service3} alt="" />
                <h3>SUBTITLE</h3>
                <h2>Web-dev</h2>
                <p className="service-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem, ipsum.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={service4} alt="" />
                <h3>SUBTITLE</h3>
                <h2>Web-dev</h2>
                <p className="service-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem, ipsum.
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
                "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar"
              }
            </p>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "1rem",
              }}
              className="border"
            ></div>
            <h2>HOLDEN CAULFIELD</h2>
            <p style={{ color: "rgb(100 116 139)" }}>Senior Product Designer</p>
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
              <h3>Your Subtitle</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  doloribus laudantium illum officia quam saepe sit, corporis
                  voluptas obcaecati exercitationem.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, dolorum? Sequi ullam quis aperiam ipsam rerum
                  recusandae dolorum. Odit, temporibus.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, dolorum? Sequi ullam quis aperiam ipsam rerum
                  recusandae dolorum. Odit, temporibus.
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
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
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
            <a>
              <img src={x} alt="" />
            </a>
            <a>
              <img src={insta} alt="" />
            </a>
            <a>
              <img src={linkedin} alt="" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
