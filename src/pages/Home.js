import { useNav } from "../route/customHooks/useNav";
import CustomNavLink from "../components/CustomNavLink";
import { navLinks } from "../assets/data/consts";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as PinIcon } from "../assets/icons/pin.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
// import CarouselModal from "../components/CarouselModal";
import logo from "../assets/instalatornia.jpg";

import "./Page.css";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <section ref={homeRef} id="homeContainer">
      <div id="webHeader">
        <header>
          <ul className="information-list">
            <li>
              <PinIcon className="information-item pin" /> Kielce + 50 km
            </li>
            <li>
              <UserIcon className="information-item user" /> Arkadiusz
            </li>
            <li>
              <PhoneIcon className="information-item phone" /> 235 572
            </li>
          </ul>

          <div>
            <img src={logo} alt="Logo" />
          </div>

          <ul className="socialMedia-list">
            <li>
              <FacebookIcon
                className="socialMedia-item facebook"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100085298913640",
                    "_blank"
                  )
                }
              />
            </li>
            <li>
              <InstagramIcon
                className="socialMedia-item instagram"
                onClick={() =>
                  window.open("https://www.instagram.com/", "_blank")
                }
              />
            </li>
            <li>
              <YoutubeIcon
                className="socialMedia-item youtube"
                onClick={() =>
                  window.open("https://www.youtube.com/", "_blank")
                }
              />
            </li>
          </ul>
        </header>

        <nav className="navbar">
          <ul>
            {navLinks.map(({ title, scrollToId }, idx) => (
              <CustomNavLink
                key={idx}
                navLinkId={title}
                scrollToId={scrollToId}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div className="homeContain">
        <div>
          <h1>Postaw na specjalistów i sprawdzone rozwiązania</h1>
          <p>
            Rozwiążemy każdy problem. Zapraszamy do zapoznania się z ofertą.
          </p>
          <button className="home-button">Zobacz</button>
        </div>
      </div>
      {/* <CarouselModal /> */}
    </section>
  );
};

export default Home;
