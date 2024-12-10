import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const functionalities = [
    { id: 1, name: "Set Goals", description: "Define and track your daily and monthly goals.", route: "/set-goals", icon: "🎯" },
    { id: 2, name: "Track Activities", description: "Log and monitor your workouts.", route: "/track-activities", icon: "📊" },
    { id: 3, name: "Workout Finder", description: "Find the best workouts for your needs.", route: "/workouts", icon: "🏋️" },
    { id: 4, name: "Community Ideas", description: "Share and explore fitness tips.", route: "/community", icon: "🤝" },
    { id: 5, name: "Profile Management", description: "Update your personal profile.", route: "/profile", icon: "👤" },
    { id: 6, name: "Nutrition Planner", description: "Plan meals to achieve your goals.", route: "/nutrition-planner", icon: "🥗" },
    { id: 7, name: "Health Metrics Tracker", description: "Monitor your health data like BMI and weight.", route: "/health-metrics", icon: "📉" },
    { id: 8, name: "Fitness Challenges", description: "Join exciting challenges and level up.", route: "/fitness-challenges", icon: "🔥" },
    { id: 9, name: "Live Workout Sessions", description: "Participate in live sessions with trainers.", route: "/live-workouts", icon: "💻" },
    { id: 10, name: "Meditation", description: "Explore guided meditation to relax.", route: "/meditation", icon: "🧘" },
    { id: 11, name: "Activity History", description: "View all your past activities.", route: "/activity-history", icon: "📜" },
    { id: 12, name: "Progress Reports", description: "Analyze your fitness progress.", route: "/progress-reports", icon: "📈" },
    { id: 13, name: "Fitness Rewards", description: "Earn points and unlock badges.", route: "/rewards", icon: "🏆" },
    { id: 14, name: "Event Calendar", description: "Stay updated on upcoming fitness events.", route: "/events", icon: "📅" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Fitnest!</h1>
      <p className="text-lg text-center mb-6 text-gray-700">
        Discover a world of fitness and health. Explore our features below.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {functionalities.map((func) => (
          <Link
            key={func.id}
            to={func.route}
            className="bg-white shadow-md p-6 rounded-lg transform hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center text-4xl mb-4">{func.icon}</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{func.name}</h2>
            <p className="text-gray-600">{func.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
