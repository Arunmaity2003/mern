import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authActions } from "../store/auth.js"
import axios from "axios"
import { useDispatch } from "react-redux"

const Login = () => {

  const [values, setValues] = useState({ username: "", password: "" })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  const submit = async () => {
    try {
      if (
        values.username === "" ||
        values.password === "" 
      ) {
        alert("All fields are required.")
      } else {
        const response = await axios.post(
          "http://localhost:4000/api/v1/sign-in",
          values
        )
        dispatch(authActions.login())
        dispatch(authActions.changeRole(response.data.role))
        localStorage.setItem("id",response.data.id)
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("role",response.data.role)
        navigate("/profile")
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <div className="h-screen bg-zinc-900 flex items-center justify-center px-6">
      <div className="bg-zinc-800 rounded-lg px-8 py-6 w-full md:w-3/6 lg:w-2/6 shadow-lg">
        <p className="text-zinc-200 text-2xl font-semibold text-center">Login</p>

        <div className="mt-6">
          <label htmlFor="email" className="text-zinc-400">
            username
          </label>
          <input
            type="text"
            id="username"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 rounded outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter your username"
            name="username"
            required
            value={values.username}
            onChange={change}
          />
        </div>

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
            value={values.password}
            onChange={change}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
          onClick={submit}
        >
          Login
        </button>

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
