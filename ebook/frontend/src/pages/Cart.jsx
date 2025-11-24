import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader/Loader.jsx'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import axios from 'axios'

const Cart = () => {
  const [cart, setCart] = useState()
  const [total, setTotal] = useState(0)

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`
  }
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/v1/get-user-cart",
        { headers }
      );
      setCart(response.data.data)
    };
    fetch();
  }, [cart])
  return (
    <>
      {!cart && <Loader />}
      {cart && cart.length === 0 && (
        <div className='h-screen'>
          <div className='h-full flex flex-col items-center justify-center'>
            <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>Empty cart</h1>
            <div className='lg:h-[50vh]'><MdOutlineRemoveShoppingCart /></div>
          </div>
        </div>
      )}

      {cart && cart.length > 0 && (
        <>
          <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>Your cart </h1>
          {
            cart.map((items, i) => (
              <div
                className="w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center"
                key={i}
              >

                <img
                  src={items.url}
                  alt="/"
                  className="h-[20vh] md:h-[10vh] object-cover"
                />

                <div className="w-full md:w-auto">
                  <h1 className="text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0">
                    {items.title}
                  </h1>

                  <p className="text-normal text-zinc-300 mt-2 hidden lg:block">
                    {items.desc.slice(0, 100)}...
                  </p>

                  <p className="text-normal text-zinc-300 mt-2 hidden md:block lg:hidden">
                    {items.desc.slice(0, 65)}...
                  </p>

                  <p className="text-normal text-zinc-300 mt-2 block md:hidden">
                    {items.desc.slice(0, 100)}...
                  </p>
                </div>
                <div className="flex mt-4 w-full md:w-auto items-center justify-between">
                  <h2 className="text-zinc-100 text-3xl font-semibold flex">
                    ₹ {items.price}
                  </h2>

                  <button
                    className="bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12"
                    onClick={() => deleteItem(items._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

            ))
          }
        </>
      )}
    </>
  )
}

export default Cart