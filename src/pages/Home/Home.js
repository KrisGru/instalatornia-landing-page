import React from "react";
// import WithFrame from "../../components/withFrame/WithFrame";
import { useNav } from "../../customHooks/useNav";
// import logoPNG from "../assets/img/logoPNG.png";
import logoSVG from "../../assets/img/logo.svg";
import dayAndOpenHours from "../../assets/data/openingHour.js";
import "../Page.css";
import "./Home.css";
import { NavLink } from "../../nav";
import { navLinks } from "../../nav/navLinks";

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
	const day = d.getDay();

	const homeFrame = {
		width: "100%",
		height: "100%",
		position: "absolute",
		bottom: "50px",
		right: "60px",
		// marginLeft: "60px",
		boxSizing: "border-box",
		border: "3px solid #ffffff",
	};

	return (
		<section ref={homeRef} id='homeContainer'>
			<div id='topPart'>
				<section className='simpleInfo'>
					<div>{phoneNumber}</div>
					<div className='clock'>{`${hour}:${minute}`}</div>
					<div>{`${dayAndOpenHours[day].day} ${dayAndOpenHours[day].openingHour}`}</div>
				</section>
				<div className='logo'>
					<img src={logoSVG} alt='logo' width='200' height='102' />
				</div>
				<nav id='homeNav'>
					{navLinks.map(({ navLinkId, scrollToId }, idx) => (
						<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
					))}
				</nav>
			</div>
			<div id='bottomPart'>
				<div className='someInfo'>Dziś strzyże Pani Basia</div>
				<div className='viewInfo'>
					{/* tyle samo marginesu ile przeciwieństwa przesunięcia ramki */}
					<div className='container-with-frame' style={{ marginLeft: "60px" }}>
						<div style={homeFrame}></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
