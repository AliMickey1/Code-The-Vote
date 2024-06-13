// src/AppRouter.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "../pages/LandingPage";
import NoPageFound from "../pages/NoPageFound";

function AppRouter() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default AppRouter;
