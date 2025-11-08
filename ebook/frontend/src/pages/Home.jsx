import React from 'react'
import Hero from '../components/Home/Hero'
import RecentlyAdded from '../components/Home/RecentlyAdded'

const Home = () => {
  return (
    <div className='bg-zinc-900 text-white px-8 py-10'>
      <Hero />
      <RecentlyAdded />
    </div>
  )
}

export default Home