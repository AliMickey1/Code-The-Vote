import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "../pages/LandingPage";
import NoPageFound from "../pages/NoPageFound";
import Quiz from "../Components/Quiz";
import Leaderboard from "../Components/Leaderboard";
import RideForm from "../Components/RideForm";
import VolunteerDriver from "../pages/VolunteerSignup";
import Profile from "../Components/Profile";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="ride-request" element={<RideForm />} />
        <Route path="Volunteering" element={<VolunteerDriver />} />
        <Route path="*" element={<NoPageFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
