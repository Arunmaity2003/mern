import React from 'react'
import Home from './pages/Home'
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllBooks from "./pages/AllBooks.jsx"
import LogIn from "./pages/LogIn.jsx"
import Register from './pages/Register.jsx'
import Cart from "./pages/Cart.jsx"
import Profile from "./pages/Profile.jsx"
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails.jsx'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/all-books' element={<AllBooks />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/view-book-details/:id' element={<ViewBookDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App