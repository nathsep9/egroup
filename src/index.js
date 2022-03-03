import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/styles";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
