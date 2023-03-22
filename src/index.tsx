import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import OpenProvider from "./providers/drawerNav-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <OpenProvider>
          <App />
      </OpenProvider>
  </React.StrictMode>
);

reportWebVitals();
