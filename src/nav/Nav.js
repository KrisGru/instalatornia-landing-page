import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks";
import "./Nav.css";

const Nav = () => {
	return (
		<nav id='topNav'>
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
		</nav>
	);
};

export default Nav;
