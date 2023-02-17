import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalReset } from "./styles/reset.js";
import { GlobalStyle } from "./styles/globalStyle.js";
import { AppStyle } from "./styles/index.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalReset />
        <GlobalStyle />
        <AppStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
