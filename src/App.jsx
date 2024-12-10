import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NutritionPlanner from "./components/NutritionPlanner";
import HealthMetrics from "./components/HealthMetrics";
import FitnessChallenges from "./components/FitnessChallenges";
import LiveWorkouts from "./components/LiveWorkouts";
import Meditation from "./components/Meditation";
import ActivityHistory from "./components/ActivityHistory";
import ProgressReports from "./components/ProgressReports";
import FitnessRewards from "./components/FitnessRewards";
import EventCalendar from "./components/EventCalendar";
import SetGoals from "./components/SetGoals";
import TrackActivities from "./components/TrackActivities";
import Community from "./components/Community";
import Workouts from "./components/Workouts";
import Profile from "./components/Profile";

const App = () => {
  const username = "John Doe";

  return (
    <Router>
      <Navbar username={username} />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/set-goals" element={<SetGoals />} />
          <Route path="/track-activities" element={<TrackActivities />} />
          <Route path="/community" element={<Community />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="/nutrition-planner" element={<NutritionPlanner />} />
        <Route path="/health-metrics" element={<HealthMetrics />} />
        <Route path="/fitness-challenges" element={<FitnessChallenges />} />
        <Route path="/live-workouts" element={<LiveWorkouts />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/activity-history" element={<ActivityHistory />} />
        <Route path="/progress-reports" element={<ProgressReports />} />
        <Route path="/rewards" element={<FitnessRewards />} />
        <Route path="/events" element={<EventCalendar />} />
      </Routes>
    </Router>
  );
};

export default App;
