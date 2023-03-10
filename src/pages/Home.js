import React from "react";
import WithFrame from "../components/WithFrame";
import { useNav } from "../customHooks/useNav";
import "./Page.css";

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
	const homeRef = useNav("Home");

	return (
		<section ref={homeRef} id='homeContainer'>
			<div id='topPart'>
				<section className='simpleInfo'>
					<div>+48 378 423 326</div>
					<div className='clock'>14:28</div>
					<div>Poniedziałek - 8:00-20:00</div>
				</section>
				<div className='logo'>
					{/* <svg
						width='295'
						height='151'
						viewBox='0 0 295 151'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					/> */}
					<img src='logoPNG.png' alt='unsplash-img' />
				</div>
				<nav id='homeNav'>
					<ul>
						<li>Home</li>
						<li>Offer</li>
						<li>Contact</li>
						<li>About us</li>
					</ul>
				</nav>
			</div>
			<div id='bottomPart'>
				<div className='someInfo'>Dziś strzyże Pani Basia</div>
				<WithFrame />
			</div>
		</section>
	);
};

export default Home;
