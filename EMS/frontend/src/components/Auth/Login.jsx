import React, { useState } from 'react'

function Login() {
    const [email,setEmail] = useState(" ");
    const [password,setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("your email is ",email);
        console.log("your password is ",password);
        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex items-center justify-center w-full h-screen'>
        <div className="border-2 border-emerald-600 rounded-2xl bg-zinc-900 p-20">
            <form 
            onSubmit={(e) => {
                submitHandler(e)
            }}
            className='flex flex-col  items-center justify-center'>
                <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-1 border-emerald-600 rounded-2xl px-5 py-3 placeholder:text-grey-500' type="email" placeholder='Enter your email'/>
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-1 border-emerald-600 rounded-2xl px-5 py-3 mt-3 placeholder:text-grey-500' type="password" placeholder='Enter your password' />
                <button className='mt-5 text-white outline-none border-none bg-emerald-600 rounded-2xl px-5 py-3 '>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login