import React, { useState, useEffect } from "react";
import axios from "axios";

const TrackActivities = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("https://wger.de/api/v2/exercise/");
        setWorkouts(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching workouts:", error);
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Track Your Activities</h2>
      {loading ? (
        <p className="mt-4 text-gray-600">Loading workouts...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="border p-4 bg-white shadow-md rounded-lg"
            >
              <h3 className="text-lg font-bold">{workout.name}</h3>
              <p className="text-gray-600">{workout.description || "No description available"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackActivities;
