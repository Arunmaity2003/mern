import React from 'react'
import { Link } from "react-router-dom"

const BookCards = ({ data }) => {
  console.log(data)
  return (
    <Link>
      <div className='bg-zinc-800 rounded p-4 h-[70vh]'>
        <div className="bg-zinc-900 rounded flex items-center justify-center">
          <img src={data.url} alt="books" className='h-[45vh] w-full' />
        </div>
        <h2 className='mt-4 text-xl font-semibold text-white'>{data.title}</h2>
        <p className='mt-2 text-zinc-400 font-semibold'>By {data.author}</p>
        <p className='mt-2 text-zinc-400 font-semibold text-xl'> 
          ₹ {data.price}
        </p>
      </div>
    </Link>
  )
}

export default BookCards