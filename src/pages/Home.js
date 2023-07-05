import { useNav } from "../route/customHooks/useNav";
import CustomNavLink from "../components/CustomNavLink";
import { navLinks } from "../assets/data/consts";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as PinIcon } from "../assets/icons/pin.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
import logo from "../assets/instalatornia.jpg";

import "./Page.css";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <section ref={homeRef} id="homeContainer">
      <div className="navBar">
        <div className="mainInformation">
          <div className="mainInformation-entries">
            <div className="mainInformation-row">
              <div className="mainInformation-data-list">
                <ul className="mainInformation-items">
                  <li className="mainInformation-item">
                    <PinIcon className="mainInformation-icon pin" /> Kielce + 50
                    km
                  </li>
                  <li className="mainInformation-item">
                    <UserIcon className="mainInformation-icon user" /> Arkadiusz
                  </li>
                  <li className="mainInformation-item">
                    <PhoneIcon className="mainInformation-icon phone" /> 235 572
                  </li>
                </ul>
              </div>
              <div>
                <img src={logo} alt="Logo" />
                {/* <p>
                            usługi elektryczne | instalacje domowe | duże
                            zlecenia
                        </p> */}
              </div>
              <div className="mainInformation-icons">
                <FacebookIcon
                  className="social-media-icon facebook"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=100085298913640",
                      "_blank"
                    )
                  }
                />
                <InstagramIcon
                  className="social-media-icon instagram"
                  onClick={() =>
                    window.open("https://www.instagram.com/", "_blank")
                  }
                />
                <YoutubeIcon
                  className="social-media-icon youtube"
                  onClick={() =>
                    window.open("https://www.youtube.com/", "_blank")
                  }
                />
              </div>
            </div>
            <div className="mainInformation-specialization"></div>
          </div>
        </div>

        <nav className="navbar">
          <ul className="navbar-nav">
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
    </section>
  );
};

export default Home;
