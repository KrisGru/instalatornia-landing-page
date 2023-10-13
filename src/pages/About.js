import React from "react";
import { useNav } from "../router/customHooks/useNav";
import { aboutCompany } from "../assets/data/consts";
import { ReactComponent as FacebookIcon } from "../assets/icons/instagram.svg";
import idea from "../assets/idea.png";
import support1 from "../assets/support1.png";
import shield from "../assets/shield.png";
import support from "../assets/support.png";
import extensionCord from "../assets/extension-cord.png";

// import "./Page.css";

const About = () => {
	const aboutRef = useNav("About");
	return (
		<section ref={aboutRef} id='aboutContainer'>
			<div className='aboutHeader'>
				<FacebookIcon />
				<h1>
					FRIMA{" "}
					<span style={{ color: "#00702b" }}>INSTALATORNIA</span>{" "}
					STAWIA NA WYSOKĄ JAKOŚĆ
				</h1>
			</div>
			<div className='ikony'>
				{aboutCompany.map((info, index) => {
					let imgSrc;
					switch (info.id) {
						case 1:
							imgSrc = <img src={idea} alt={info.id}></img>;
							break;
						case 2:
							imgSrc = <img src={support1} alt={info.id}></img>;
							break;
						case 3:
							imgSrc = <img src={shield} alt={info.id}></img>;
							break;
						case 4:
							imgSrc = <img src={support} alt={info.id}></img>;
							break;
						case 5:
							imgSrc = (
								<img src={extensionCord} alt={info.id}></img>
							);
							break;
						default:
							imgSrc = <img src={support1} alt={info.id}></img>;
					}

					return (
						<div key={index} className='xyz'>
							{imgSrc}
							<p>{info.description}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default About;
