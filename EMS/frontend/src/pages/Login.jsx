import React, { useState } from 'react'
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", { email, password })
      if (response.data.success) {
        alert("Successfully login")
        setError(null)
      }else {
      setError(response.data.error || "Invalid email or password")
    }
    } catch (error) {
      if (error.response && error.response.data?.error) {
        setError(error.response.data.error)
      } else {
        setError("Server error")
      }
    }
  }

  return (
    <div className='flex flex-col  items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6'>
      <h2
        className='font-pacifico text-3xl text-white'
      >Employee Management System</h2>
      <div className='border shadow p-6 w-85 bg-white rounded-lg'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        {error && <p className='text-red-500'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="email" className='bolck text-gray-700'>Email</label>
            <input
              className='w-full px-3 py-2 border'
              type="email" placeholder='Enter your email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="password" className='bolck text-gray-700'>Password</label>
            <input
              className='w-full px-3 py-2 border'
              type="password" placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='mb-4 flex items-center justify-between'>
            <label htmlFor="password" className='inline-flex items-center'>
              <input
                className='form-checkbox'
                type="checkbox" placeholder='Enter your password' />
              <span className='ml-2 text-gray-700'>Remember me</span>
            </label>
            <a href="" className='text-teal-600'>
              Forgot password?
            </a>
          </div>

          <div className='mb-4'>
            <button
              type='submit'
              className='w-full bg-teal-600 text-white py-2'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login