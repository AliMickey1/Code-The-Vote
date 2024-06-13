// src/AppRouter.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "../pages/LandingPage";
import NoPageFound from "../pages/NoPageFound";
import Quiz from "../components/Quiz";
import Leaderboard from "../components/Leaderboard";
import RideForm from "../components/RideForm";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="create-ride" element={<RideForm />} />
        <Route path="*" element={<NoPageFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
