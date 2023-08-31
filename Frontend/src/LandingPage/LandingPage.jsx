import "./LandingPage.css";
import heroImg from "../images/hero1.gif";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [hamburger, setHamburger] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setHamburger(window.innerWidth <= 640);
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
            <p>{"We're "}</p>
            <h1>Website builders</h1>
            <br />
            <a href="">Order now</a>
          </div>
          <div className="right">
            <img src={heroImg} alt="img.png" />
          </div>
        </section>
      </header>
    </>
  );
};

export default LandingPage;
