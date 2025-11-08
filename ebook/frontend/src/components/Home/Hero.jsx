import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='h-[75vh] flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center'>
            <h1 className="text-4xl lg:text-6xl font-semibold text-amber-200 lg:left-left">
                Discover Your Next great Read.
            </h1>
            <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">
                Explore inspiring stories and insightful reads, thoughtfully selected to enrich your mind and imagination.
            </p>
            <div className='mt-8'>
                <Link 
                to="/all-books"
                className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:border-zinc-800 rounded-full'>Discover books</Link>
            </div>
        </div>
        <div className='w-full lg:w-3/6 h-auto lg:h-full flex items-center justify-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeq7f5H-DDsshlAfdxZlrVKGCnBjoEW8cEA&s" alt="hero image" />
        </div>
    </div>
  )
}

export default Hero