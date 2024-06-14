// src/AppRouter.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "../pages/LandingPage";
import NoPageFound from "../pages/NoPageFound";

import Quiz from "../components/Quiz";
import Leaderboard from "../components/Leaderboard";
import RideForm from "../components/RideForm";
import UserStories from "../components/userStories";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="create-ride" element={<RideForm />} />
        <Route path="user-stories" element={<UserStories />} />
        <Route path="*" element={<NoPageFound />} />
      </Route>
    </Routes>


function AppRouter() {
  return (
    <div className="App">
      <LandingPage />
    </div>

  );
}

export default AppRouter;
