// import React, { useState } from 'react'
// import logo from '../../assets/logo.png';
// import { Link } from 'react-router-dom';
// import { FaGripLines } from "react-icons/fa";
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const links = [
//     {
//       title: "Home",
//       link: "/"
//     },
//     {
//       title: "All Books",
//       link: "/all-books"
//     },
//     {
//       title: "Cart",
//       link: "/cart"
//     },
//     {
//       title: "Profile",
//       link: "/profile"
//     },
//     {
//       title: "Admin Profile",
//       link: "/profile"
//     }
//   ]

//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
//   const role = useSelector((state) => state.auth.role)

//   if (isLoggedIn === false) {
//     links.splice(2, 2)
//   }

//   if (isLoggedIn === true && role === "user") {
//     links.splice(4, 1)
//   }


//   if (isLoggedIn === true && role === "admin") {
//     links.splice(3, 1)
//   }

//   const [mobileNav, setMobileNav] = useState("hidden")
//   return (
//     <>
//       <nav className='z-50 relative flex bg-zinc-800 text-white px-8 py-2 items-center justify-between'>
//         <Link
//           to="/"
//           className='flex items-center'>
//           <img
//             className='h-10 me-4 rounded-full'
//             src={logo} alt="logo" />
//           <h1 className='text-2xl font-semibold'>StoryNest</h1>
//         </Link>

//         <div className="nav-links-ebook block md:flex items-center gap-4">
//           <div className='hidden md:flex gap-4'>
//             {links.map((items, i) => (
//               <div className='flex items-center justify-center'>
//                 {items.title === "Profile" || items.title === "Admin Profile" ? <Link
//                 to={items.link}
//                 className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'
//                 key={i}
//               >
//                 {items.title}
//               </Link> : <Link
//                 to={items.link}
//                 className='hover:text-blue-500 transition-all duration-300'
//                 key={i}
//               >
//                 {items.title}{" "}
//               </Link>}
//               </div>
//             ))}
//           </div>
//           {isLoggedIn === false && <div className='hidden md:flex gap-4'>
//             <Link
//               to="/LogIn"
//               className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>Login</Link>
//             <Link
//               to="/Register"
//               className='px-4 py-1 bg-blue-400 border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>Register</Link>
//           </div>}
//           <button className='block md:hidden text-white text-2xl hover:text-zinc-400'
//             onClick={() => (mobileNav === "hidden" ? setMobileNav("block") : setMobileNav("hidden"))}>
//             <FaGripLines />
//           </button>
//         </div>
//       </nav>
//       <div className={`${mobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
//         {links.map((items, i) => (
//           <Link
//             to={items.link}
//             className={`${mobileNav} text-white text-4xl font-semibold mb-8 hover:text-blue-500 transition-all duration-300`}
//             key={i}
//           >
//             {items.title}{" "}
//           </Link>
//         ))}
//         {isLoggedIn === false && (
//           <>
//             <Link
//               to="/LogIn"
//               className={`${mobileNav} px-8 py-2 mb-8 text-3xl font-semibold border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300`}>Login</Link>
//             <Link
//               to="/Register"
//               className={`${mobileNav} px-8 py-2 text-3xl font-semibold bg-blue-400 border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}>Register</Link>
//           </>
//         )}
//       </div>
//     </>
//   )
// }

// export default Navbar



//--------------------------------------------------------
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  const [mobileNav, setMobileNav] = useState(false);

  const links = [
    { title: "Home", link: "/" },
    { title: "All Books", link: "/all-books" },
    { title: "Cart", link: "/cart", auth: true },
    { title: "Profile", link: "/profile", role: "user" },
    { title: "Admin Profile", link: "/profile", role: "admin" },
  ];

  const filteredLinks = links.filter((item) => {
    if (item.auth && !isLoggedIn) return false;
    if (item.role && item.role !== role) return false;
    return true;
  });

  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-2 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img className="h-10 me-4 rounded-full" src={logo} alt="logo" />
          <h1 className="text-2xl font-semibold">StoryNest</h1>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-4 items-center">
          {filteredLinks.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className={
                item.title.includes("Profile")
                  ? "px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all"
                  : "hover:text-blue-500 transition-all"
              }
            >
              {item.title}
            </Link>
          ))}

          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-1 bg-blue-400 rounded hover:bg-white hover:text-zinc-800 transition-all"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="block md:hidden text-2xl"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <FaGripLines />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileNav && (
        <div className="bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center">
          {filteredLinks.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              onClick={() => setMobileNav(false)}
              className="text-white text-4xl font-semibold mb-8 hover:text-blue-500 transition-all"
            >
              {item.title}
            </Link>
          ))}

          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="px-8 py-2 mb-8 text-3xl font-semibold border border-blue-500 rounded"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-8 py-2 text-3xl font-semibold bg-blue-400 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
