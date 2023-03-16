import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { NavContext } from "../context/NavContext";

const NavLink = ({ navLinkId, scrollToId }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
	// const navigate = useNavigate();

	const handleClick = () => {
		// navigate.push(`/${navLinkId}`);
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
	};
	console.log(activeNavLinkId, navLinkId);
	return (
		<span
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? "activeClass" : ""}
			onClick={handleClick}>
			{navLinkId}
		</span>
	);
};

export default NavLink;
