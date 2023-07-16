import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as RateIcon } from "../assets/icons/rate.svg";
import { ReactComponent as GalleryIcon } from "../assets/icons/gallery.svg";
import React, { useContext } from "react";
import { NavigationContext } from "../route/navigationContext";
import PropTypes from "prop-types";

const CustomNavLink = ({ navLinkId, scrollToId, hideNav }) => {
  const { activeSection, setActiveSection } = useContext(NavigationContext);

  const handleClick = () => {
    setActiveSection(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li
      className={hideNav ? "customNavLink hideNav" : "customNavLink"}
      onClick={handleClick}
    >
      <a className={activeSection === navLinkId ? "active" : ""}>
        {scrollToId === "homeContainer" && <HomeIcon />}
        {scrollToId === "priceContainer" && <RateIcon />}
        {scrollToId === "realizationsContainer" && <GalleryIcon />}
        {navLinkId}
      </a>
    </li>
  );
};

CustomNavLink.propTypes = {
  navLinkId: PropTypes.string,
  scrollToId: PropTypes.string,
  hideNav: PropTypes.boolean,
};

export default CustomNavLink;
