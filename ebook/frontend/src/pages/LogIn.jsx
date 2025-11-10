import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="h-screen bg-zinc-900 flex items-center justify-center px-6">
      <div className="bg-zinc-800 rounded-lg px-8 py-6 w-full md:w-3/6 lg:w-2/6 shadow-lg">
        <p className="text-zinc-200 text-2xl font-semibold text-center">Login</p>

        {/* Email */}
        <div className="mt-6">
          <label htmlFor="email" className="text-zinc-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 rounded outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label htmlFor="password" className="text-zinc-400">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 rounded outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter your password"
            name="password"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <div className="flex items-center justify-center gap-2 mt-4 text-zinc-400 text-sm">
          <p>Don't have an account?</p>
          <Link
            to="/register"
            className="text-blue-400 hover:underline hover:text-blue-300 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
