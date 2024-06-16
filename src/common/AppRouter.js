import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "../pages/LandingPage";
import NoPageFound from "../pages/NoPageFound";
import Quiz from "../Components/Quiz";
import Leaderboard from "../Components/Leaderboard";
import RideForm from "../Components/RideForm";
import VolunteerDriver from "../pages/VolunteerSignup";
import LoginButton from "../Components/LoginButton";
import ProfileForm from "../Components/ProfileForm";
import DriverProfile from "../Components/DriverProfile";
import RiderProfile from "../Components/RiderProfile";

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
        <Route path="signup" element={<ProfileForm />} />
        <Route path="driverprofile" element={<DriverProfile />} />
        <Route path="riderprofile" element={<RiderProfile />} />
        <Route path="login" element={<LoginButton />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
