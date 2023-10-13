import { useRef, useContext, useEffect } from "react";
import { useOnScreen } from "./useOnScreen";

import { NavigationContext } from "router/context/context";

export const useNav = (sectionName) => {
	const ref = useRef(null);

	const { setActiveNavLinkId } = useContext(NavigationContext);

	const isOnScreen = useOnScreen(ref);

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(sectionName);
		}
	}, [isOnScreen, setActiveNavLinkId, sectionName]);

	return ref;
};
