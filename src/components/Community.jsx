import React, { useState } from "react";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() === "") return;
    setPosts([...posts, newPost]);
    setNewPost("");
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Community Fitness Ideas</h2>
      <div className="mt-4">
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your idea..."
          className="border p-2 w-full"
        />
        <button
          onClick={handlePost}
          className="bg-blue-600 text-white px-4 py-2 mt-2"
        >
          Post
        </button>
      </div>
      <div className="mt-4">
        {posts.length === 0 ? (
          <p className="text-gray-600">No posts yet. Be the first to share!</p>
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              className="border p-4 bg-white shadow-md rounded-lg mt-2"
            >
              {post}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Community;
