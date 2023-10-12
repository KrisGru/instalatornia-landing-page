import { useNav } from "../route/customHooks/useNav";
import { navLinks } from "../assets/data/consts";
// import NavLink from "../components/NavLink";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as RateIcon } from "../assets/icons/rate.svg";
import { ReactComponent as GalleryIcon } from "../assets/icons/gallery.svg";
import { useContext } from "react";
import { NavigationContext } from "../route/navigationContext";
import Logo from "../components/Logo";
import { Navbar, Flex, NavLink, Container, Section } from "./styles/styles";
import Button from "components/ui/Button";

const Home = () => {
	const homeRef = useNav("homeContainer");
	const { activeSection, setActiveSection } = useContext(NavigationContext);

	const scrollToSection = (id) => {
		setActiveSection(id);
		document.getElementById(id).scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<Section ref={homeRef} id='homeContainer'>
				<Container>
					<Navbar>
						<Logo size={"small"} type={"dark"} />
						<Flex>
							{navLinks.map(({ title, id }, idx) => (
								<NavLink
									key={idx}
									onClick={() => scrollToSection(id)}
									className={
										activeSection === title ? "active" : ""
									}>
									{id === "homeContainer" && <HomeIcon />}
									{id === "priceContainer" && <RateIcon />}
									{id === "realizationsContainer" && (
										<GalleryIcon />
									)}
									{title}
								</NavLink>
							))}
						</Flex>
						<Button color={"black"}>Zadzwoń</Button>
					</Navbar>
				</Container>
			</Section>
			<Section id='homeBackground'>
				<Container>
					{/* <CarouselModal /> */}
					<h1 className='text_white like_h1'>
						Postaw na specjalistów i sprawdzone rozwiązania
					</h1>
					<p className='text_white' style={{ padding: "10px 0" }}>
						Rozwiążemy każdy problem. Zapraszamy do zapoznania się z
						ofertą.
					</p>
					<Button background={"transparent"}>Zobacz</Button>
				</Container>
			</Section>
		</>
	);
};

export default Home;
