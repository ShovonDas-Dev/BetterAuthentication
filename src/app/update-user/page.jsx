
"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";

const UpdateName = () => {
  const [name, setName] = useState("");

  const handleUpdateName = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.updateUser({
      name: name,
    });

    if (error) {
      console.log(error);
      return;
    }

    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-5">
      <form
        onSubmit={handleUpdateName}
        className="w-full max-w-md rounded-xl border border-gray-800 bg-[#111] p-6"
      >
        <h2 className="mb-6 text-2xl font-bold text-white">
          Update Your Name
        </h2>

        <input
          type="text"
          placeholder="Enter your new name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-white"
        />

        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-white px-4 py-3 font-medium text-black transition hover:bg-gray-200"
        >
          Update Name
        </button>
      </form>
    </div>
  );
};

export default UpdateName;

