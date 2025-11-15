import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaGripLines } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "All Books",
      link: "/all-books"
    },
    {
      title: "Cart",
      link: "/cart"
    },
    {
      title: "Profile",
      link: "/profile"
    },
  ]

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  if(isLoggedIn === false){
    links.splice(2,2)
  }
  const [mobileNav,setMobileNav] = useState("hidden")
  return (
    <>
      <nav className='z-50 relative flex bg-zinc-800 text-white px-8 py-2 items-center justify-between'>
        <Link
          to="/"
          className='flex items-center'>
          <img
            className='h-10 me-4 rounded-full'
            src={logo} alt="logo" />
          <h1 className='text-2xl font-semibold'>StoryNest</h1>
        </Link>

        <div className="nav-links-ebook block md:flex items-center gap-4">
          <div className='hidden md:flex gap-4'>
            {links.map((items, i) => (
              <Link
                to={items.link}
                className='hover:text-blue-500 transition-all duration-300'
                key={i}
              >
                {items.title}{" "}
              </Link>
            ))}
          </div>
          <div className='hidden md:flex gap-4'>
            <Link
              to="/LogIn"
              className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>Login</Link>
            <Link
              to="/Register"
              className='px-4 py-1 bg-blue-400 border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>Register</Link>
          </div>
          <button className='block md:hidden text-white text-2xl hover:text-zinc-400' 
          onClick={() => (mobileNav === "hidden" ? setMobileNav("block") : setMobileNav("hidden"))}>
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div className={`${mobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
        {links.map((items, i) => (
          <Link
            to={items.link}
            className={`${mobileNav} text-white text-4xl font-semibold mb-8 hover:text-blue-500 transition-all duration-300`}
            key={i}
          >
            {items.title}{" "}
          </Link>
        ))}
        <Link
          to="/LogIn"
          className={`${mobileNav} px-8 py-2 mb-8 text-3xl font-semibold border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300`}>Login</Link>
        <Link
          to="/Register"
          className={`${mobileNav} px-8 py-2 text-3xl font-semibold bg-blue-400 border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}>Register</Link>
      </div>
    </>
  )
}

export default Navbar