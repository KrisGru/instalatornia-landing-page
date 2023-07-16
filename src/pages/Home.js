import { useNav } from "../route/customHooks/useNav";
import CustomNavLink from "../components/CustomNavLink";
import { navLinks } from "../assets/data/consts";
import { ReactComponent as PinIcon } from "../assets/icons/pin.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
// import CarouselModal from "../components/CarouselModal";
import logo from "../assets/logo.png";
// import logo from "../assets/aaaaaaaaaaaaa.png";
import SocialMedia from "../components/SocialMedia";
// import "./Page.css";

const Home = () => {
  const homeRef = useNav("homeContainer");

  return (
    <section ref={homeRef} id="homeContainer">
      <div>
        <header id="webHeader">
          <ul className="information-list">
            <li>
              <PinIcon className="information-item pin" /> Kielce + 50 km
            </li>
            <li>
              <PhoneIcon className="information-item phone" /> 235 572 352 -
              Arek
            </li>
          </ul>

          <img src={logo} alt="Logo" />

          <SocialMedia />
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
        {/* <CarouselModal /> */}
        <div>
          <h1>Postaw na specjalistów i sprawdzone rozwiązania</h1>
          <p>
            Rozwiążemy każdy problem. Zapraszamy do zapoznania się z ofertą.
          </p>
          <button className="home-button">Zobacz</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
