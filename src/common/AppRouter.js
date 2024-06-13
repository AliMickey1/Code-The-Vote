import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import LandingPage from "../pages/LandingPage";
import NoPageFound from "../pages/NoPageFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="*" element={<NoPageFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
