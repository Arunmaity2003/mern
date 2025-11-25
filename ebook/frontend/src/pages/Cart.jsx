import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader/Loader.jsx'
import { BsCart4 } from "react-icons/bs";
import axios from 'axios'
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const navigate = useNavigate()
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

  //for calculating total
  useEffect(() => {
    if (cart && cart.length > 0) {
      const sum = cart.reduce((acc, item) => acc + item.price, 0);
      setTotal(sum);
    } else {
      setTotal(0);
    }
  }, [cart]);

  const deleteItem = async (bookid) => {
    const response = await axios.put(`http://localhost:4000/api/v1/remove-from-cart/${bookid}`, {}, { headers })
    alert(response.data.message)
  }

  const PlaceOrder = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/api/v1/place-order`, {order:cart}, { headers })
      alert(response.data.message)
      setCart([]);
      navigate("/profile/orderHistory")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-zinc-900 p-12 h-screen'>
      {!cart && <Loader />}
      {cart && cart.length === 0 && (
        <div className='h-screen'>
          <div className='h-full flex flex-col items-center justify-center'>
            <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>Empty cart</h1>
            <div className='lg:h-[50vh] text-9xl mt-4 text-zinc-600'><BsCart4 /></div>
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
                    <AiFillDelete />
                  </button>
                </div>
              </div>

            ))
          }
        </>
      )}
      {cart && cart.length > 0 && (
        <div className="mt-4 w-full flex items-center justify-end">
          <div className="p-4 bg-zinc-800 rounded">
            <h1 className="text-3xl text-zinc-200 font-semibold">
              Total Amount
            </h1>
            <div className="mt-3 flex items-center justify-between text-xl text-zinc-200">
              <h2>{cart.length} books</h2>
              <h2>* {total}</h2>
            </div>
            <div className="w-full mt-3">
              <button
                className="bg-zinc-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-500"
                onClick={() => PlaceOrder()}
              >
                Place your order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart