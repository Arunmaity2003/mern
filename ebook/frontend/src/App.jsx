import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from "react-redux"
import { authActions } from './store/auth.js'
import Faviourites from './components/Profile/Faviourites.jsx'
import UserOrderHistory from './components/Profile/UserOrderHistory.jsx'
import Settings from './components/Profile/Settings.jsx'

const App = () => {
  const dispatch = useDispatch()
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if(localStorage.getItem("id") && localStorage.getItem("token") && localStorage.getItem("role")){
      dispatch(authActions.login())
      dispatch(authActions.changeRole(localStorage.getItem("role")))
    }
  },[])
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/all-books' element={<AllBooks />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Profile' element={<Profile />}>
          <Route index element={<Faviourites />} />
          <Route path='/Profile/orderHistory' element={<UserOrderHistory />} />
          <Route path='/Profile/settings' element={<Settings />} />
        </Route>
        <Route path='/view-book-details/:id' element={<ViewBookDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App