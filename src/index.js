import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./dnd/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <App />
  </div>
);
