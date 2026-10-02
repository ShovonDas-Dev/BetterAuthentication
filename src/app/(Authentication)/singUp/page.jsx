"use client";

import { useState } from "react";
import { authClient } from "../../../lib/auth-client";
import { google } from "better-auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const { data, error } = await authClient.signUp.email({
    name: formData.name,
    email: formData.email,
    password: formData.password,
    route: "/"
  });
  
  
  console.log("data:", data);
  console.log("error:", error);
};

const HandleGoogleSignIn = async (e) => {
  e.preventDefault()
  const {data , error} = await authClient.signIn.social({
    provider : "google"
  })
  console.log("data"+ data + "error" + error)
}
 

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-black px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white focus:ring-1 focus:ring-white"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white focus:ring-1 focus:ring-white"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white focus:ring-1 focus:ring-white"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-zinc-200 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        {/* gOOGLE LOG IN */}

        
        <button

          onClick={HandleGoogleSignIn}
          className="w-full rounded-xl bg-white py-2 my-5 font-semibold text-black transition hover:bg-zinc-200 active:scale-[0.98]"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;