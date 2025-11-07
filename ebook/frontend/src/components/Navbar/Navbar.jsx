import React from 'react'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

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
  return (
    <div className='flex bg-zinc-800 text-white px-8 py-2 items-center justify-between'>
      <div className='flex items-center'>
        <img
          className='h-10 me-4 rounded-full'
          src={logo} alt="logo" />
        <h1 className='text-2xl font-semibold'>StoryNest</h1>
      </div>
      <div>
        <div className="nav-links-ebook items-center flex gap-4">
          <div
            className='flex gap-4'
          >
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
          <div className='flex gap-4'>
            <Link
              to="/LogIn"
             className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>Login</Link>
            <Link 
            to="/Register"
            className='px-4 py-1 bg-blue-400 border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar