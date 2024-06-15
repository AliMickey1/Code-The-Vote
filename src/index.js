import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import AppRouter from "../src/common/AppRouter";
import Auth0ProviderWithHistory from "./common/auth0-provider-with-history";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <AppRouter />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>
);
