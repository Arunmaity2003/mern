import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Sidebar = ({ data }) => {
  return (
    <div className='bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-full'>
      <div className='flex flex-col items-center justify-center'>
        <img src={data.avatar} alt="avatar" className='h-[10vh] rounded-full' />
        <p className="mt-3 text-xl text-zinc-100 font-semibold">{data.username}</p>
        <p className='mt-1 text-zinc-300'>{data.email}</p>
        <div className='w-full mt-4 h-px bg-zinc-500 hidden lg:block'></div>
      </div>
      <div className="w-full flex-col items-center justify-center hidden lg:flex">
        <Link
          to="/profile"
          className="text-zinc-100 font-semibold w-full py-2 mt-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Faviourites
        </Link>
        <Link
          to="/profile/orderHistory"
          className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Order history
        </Link>
        <Link
          to="/profile/settings"
          className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Settings
        </Link>
      </div>
      <button
        className='bg-zinc-900 w-3/6 lg:full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center rounded py-2 hover:bg-zinc-600 transition-all duration-300'
      >
        Logout <FaArrowRightFromBracket className="ms-4" />
      </button>
    </div>
  )
}

export default Sidebar