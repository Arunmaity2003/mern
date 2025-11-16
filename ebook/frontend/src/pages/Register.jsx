import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const [values, setValues] = useState({ username: "", email: "", password: "", address: "" })

  const navigate = useNavigate()

  const change = (e) => {
    const {name,value} = e.target;
    setValues({...values,[name]:value})
  }

  const submit = async () => {
    try {
      if(
        values.username === "" ||
        values.email === "" ||
        values.password === "" ||
        values.address === "" 
      ){
        alert("All fields are required.")
      }else{
        const response = await axios.post("http://localhost:4000/api/v1/sign-up",values)
        console.log(response.data)
        navigate("/Login")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="h-screen bg-zinc-900 px-12 py-8 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-xl">Sign Up</p>

        <div className="mt-4">
          <div>
            <label htmlFor="username" className="text-zinc-400">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="username"
              name="username"
              required
              value={values.username}
              onChange={change}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="text-zinc-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="email"
            name="email"
            required
            value={values.email}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="text-zinc-400">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="password"
            name="password"
            required
            value={values.password}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="text-zinc-400">
            Address
          </label>
          <textarea
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            rows={5}
            placeholder="address"
            name="address"
            required
            value={values.address}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <button className='w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500 transition-all duration-300' onClick={submit}>Register</button>
        </div>

        <p className='flex mt-4 items-center justify-center text-zinc-300 font-semibold'>Or</p>

        <div className="flex items-center justify-center gap-2 mt-4 text-zinc-400 text-sm">
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="text-blue-400 hover:underline hover:text-blue-300 transition"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Register
