import React, { useEffect, useState } from "react";
import axios from "axios";

const Workouts = () => {
  const [workoutCategories, setWorkoutCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://wger.de/api/v2/exercisecategory/");
        setWorkoutCategories(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching workout categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Workout Categories</h2>
      {loading ? (
        <p className="mt-4 text-gray-600">Loading categories...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {workoutCategories.map((category) => (
            <div
              key={category.id}
              className="border p-4 bg-white shadow-md rounded-lg"
            >
              <h3 className="text-lg font-bold">{category.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Workouts;
