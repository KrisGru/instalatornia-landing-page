import { useEffect, useState } from "react";

export const useResolution = () => {
	const FULL_HD = 1440;
	const DESKTOP = 1180;
	const SMALL_DESKTOP = 768;
	const TABLET = 600;

	const isFullHd = window.innerWidth >= FULL_HD;
	const isDesktop = window.innerWidth >= DESKTOP;
	const isSmallDesktop = window.innerWidth >= SMALL_DESKTOP;
	const isTablet = window.innerWidth >= TABLET;

	const [isFullHdWidth, setIsFullHdWidth] = useState(isFullHd);
	const [isSmallDesktopWidth, setIsSmallDesktopWidth] =
		useState(isSmallDesktop);
	const [isDesktopWidth, setIsDesktopWidth] = useState(isDesktop);
	const [isTabletWidth, setIsTabletWidth] = useState(isTablet);

	useEffect(() => {
		const handler = () => {
			setIsFullHdWidth(window.innerWidth >= FULL_HD);
			setIsDesktopWidth(window.innerWidth >= DESKTOP);
			setIsSmallDesktopWidth(window.innerWidth >= SMALL_DESKTOP);
			setIsTabletWidth(window.innerWidth >= TABLET);
		};

		window.addEventListener("resize", handler);

		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);

	return {
		isFullHdWidth,
		isDesktopWidth,
		isSmallDesktopWidth,
		isTabletWidth,
	};
};
