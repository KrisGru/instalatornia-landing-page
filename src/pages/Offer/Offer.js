import React from "react";
import { useNav } from "../../customHooks/useNav";
import "../Page.css";

const Offer = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const aboutRef = useNav("Offer");

	return (
		<section ref={aboutRef} id='offerContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>ABOUT</h3>
				<p>This is the about section</p>
			</div>
		</section>
	);
};

export default Offer;
