import React, { useState } from "react";

const SetGoals = () => {
  const [dailyGoal, setDailyGoal] = useState("");
  const [monthlyGoal, setMonthlyGoal] = useState("");

  const handleSetGoals = () => {
    alert(`Daily Goal: ${dailyGoal}, Monthly Goal: ${monthlyGoal}`);
    setDailyGoal("");
    setMonthlyGoal("");
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Set Your Fitness Goals</h2>
      <div className="mt-4">
        <div>
          <label className="block text-gray-600">Daily Goal:</label>
          <input
            type="text"
            value={dailyGoal}
            onChange={(e) => setDailyGoal(e.target.value)}
            placeholder="Enter daily goal"
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-600">Monthly Goal:</label>
          <input
            type="text"
            value={monthlyGoal}
            onChange={(e) => setMonthlyGoal(e.target.value)}
            placeholder="Enter monthly goal"
            className="border p-2 w-full"
          />
        </div>
        <button
          onClick={handleSetGoals}
          className="bg-blue-600 text-white px-4 py-2 mt-4"
        >
          Set Goals
        </button>
      </div>
    </div>
  );
};

export default SetGoals;
