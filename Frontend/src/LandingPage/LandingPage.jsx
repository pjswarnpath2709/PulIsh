import "./LandingPage.css";
import heroImg from "../images/hero1.gif";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useEffect, useState } from "react";
import service1 from "../images/website_builder.svg";
import service2 from "../images/personal_website.svg";
import service3 from "../images/cms.svg";
import service4 from "../images/wordpress.svg";

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
    </>
  );
};

export default LandingPage;
