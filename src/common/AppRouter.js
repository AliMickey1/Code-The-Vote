// src/AppRouter.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "../pages/LandingPage";
import NoPageFound from "../pages/NoPageFound";
import UserStories from "../Components/userStories";
import Quiz from "../Components/Quiz";
import Leaderboard from "../Components/Leaderboard";
import RideForm from "../Components/RideForm";
import Profile from "../Components/Profile";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="create-ride" element={<RideForm />} />
        <Route path="user-stories" element={<UserStories />} />
        <Route path="*" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
