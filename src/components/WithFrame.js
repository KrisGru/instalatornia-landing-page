import React from "react";
import "./withFrame.css";

const WithFrame = () => {
	let width = "300px",
		height = "300px",
		transformX = "100px",
		transformY = "100px",
		zIndex = "20",
		hasButton = false,
		themeButton = "light";

	return (
		<div id='withFrame'>
			<div className='container'>
				<p>content</p>
			</div>
			<div className='frame'></div>
		</div>
	);
};

export default WithFrame;
