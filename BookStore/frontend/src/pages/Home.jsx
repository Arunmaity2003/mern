import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate(); 
  return (
    <>
      <div 
        className="w-full h-screen bg-cover bg-center relative flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="m-2 text-5xl text-yellow-400 font-bold font-serif drop-shadow-lg">
            WELCOME TO THE WORLD OF BOOKS
          </h1>
          <h3 className="text-gray-200 italic text-lg">
            - Explore the stories that change lives
          </h3>
          <button 
            onClick={() => navigate('/Books')} 
            className="mt-8 bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition"
          >
            Explore Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
