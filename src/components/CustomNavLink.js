import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as RateIcon } from "../assets/icons/rate.svg";
import { ReactComponent as GalleryIcon } from "../assets/icons/gallery.svg";
import React, { useContext } from "react";
import { NavigationContext } from "../route/navigationContext";
import PropTypes from "prop-types";

const CustomNavLink = ({ navLinkId, scrollToId }) => {
  const { activeSection, setActiveSection } = useContext(NavigationContext);

  const handleClick = () => {
    setActiveSection(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li onClick={handleClick}>
      <a
        className={activeSection === navLinkId ? "nav-item active" : "nav-item"}
      >
        {scrollToId === "homeContainer" && <HomeIcon />}
        {scrollToId === "rateContainer" && <RateIcon />}
        {scrollToId === "galleryContainer" && <GalleryIcon />}
        {navLinkId}
      </a>
    </li>
  );
};

CustomNavLink.propTypes = {
  navLinkId: PropTypes.string,
  scrollToId: PropTypes.string,
};

export default CustomNavLink;
