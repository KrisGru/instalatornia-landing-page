import { library } from "@fortawesome/fontawesome-svg-core";
import { faFontAwesome, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

library.add(fas, faTwitter, faFontAwesome);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
