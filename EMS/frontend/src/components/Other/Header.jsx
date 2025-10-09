import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-bold'>Arun</span> 👋</h1>
        <button className='bg-red-600 text-lg font-medium px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header