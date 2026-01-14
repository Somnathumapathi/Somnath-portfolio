import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Remove the pre-React boot splash (if present)
const splash = document.getElementById('boot-splash');
if (splash) {
	splash.classList.add('boot-splash--hide');
	window.setTimeout(() => splash.remove(), 380);
}
