import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { NavigationContext } from "../route/navigationContext";
import PropTypes from "prop-types";

const NavLink = ({ navLinkId, scrollToId }) => {
  const { activeSection, setActiveSection } = useContext(NavigationContext);
  const handleClick = () => {
    setActiveSection(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <span
      id={navLinkId}
      className={activeSection === navLinkId ? "activeClass" : ""}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

NavLink.propTypes = {
  navLinkId: PropTypes.string,
  scrollToId: PropTypes.string,
};

export default NavLink;
