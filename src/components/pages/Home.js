import { useNav } from "../../route/customHooks/useNav";
import logoSVG from "../../assets/logo.svg";
import NavLink from "../NavLink";
import { navLinks } from "../../assets/data/consts";
import "./Page.css";

const Home = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement
  const homeRef = useNav("Home");
  const phoneNumber = "+48 378 423 326";
  const d = new Date();
  const hour = d.getHours() - 9 < 1 ? `0${d.getHours()}` : d.getHours();
  const minute = d.getMinutes() - 9 < 1 ? `0${d.getMinutes()}` : d.getMinutes();

  return (
    <section ref={homeRef} id="homeContainer">
      <div id="topPart">
        <section className="simpleInfo">
          <div>{phoneNumber}</div>
          <div className="clock">{`${hour}:${minute}`}</div>
          <div>Pniedziałek 10-17</div>
        </section>
        <div className="logo">
          <img src={logoSVG} alt="logo" width="200" height="102" />
        </div>
        <nav id="homeNav">
          {navLinks.map(({ navLinkId, scrollToId }, idx) => (
            <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Home;
