import { createRoot } from "react-dom/client";

import "./i18n/i18n";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container as unknown as Element);

root.render(<App />);
