import React, { useEffect, useState } from 'react'
import Loader from "../Loader/Loader.jsx"
import axios from "axios"
import { BiBlock } from "react-icons/bi";
import { Link } from "react-router-dom"

const UserOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([])
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/get-order-history",
          { headers }
        );

        setOrderHistory(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);
  return (
    <>
      {!orderHistory && <div className='w-full h-full flex justify-center items-center'><Loader /></div>}
      {orderHistory && orderHistory.length === 0 && (
        <div className='h-[80vh] p-4 text-zinc-100'>
          <div className='h-full flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>
              No order history
            </h1>
            <div className='h-[20vh] mb-8'><BiBlock /></div>
          </div>
        </div>
      )}
      {orderHistory && orderHistory.length > 0 && (
        <div className='h-full p-0 md:p-4 text-zinc-100'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>
            Your order history
          </h1>
          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>

            <div className="w-[22%]">
              <h1>Books</h1>
            </div>

            <div className="w-[45%]">
              <h1>Description</h1>
            </div>

            <div className="w-[9%]">
              <h1>Price</h1>
            </div>

            <div className="w-[16%]">
              <h1>Status</h1>
            </div>

            <div className="w-none md:w-[5%] hidden md:block">
              <h1>Mode</h1>
            </div>
          </div>
          {orderHistory.map((items, i) => (
            <div
              key={items._id}
              className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer'>
              <div className="w-[3%]">
                <h1 className='text-center'>{i + 1}</h1>
              </div>
              <div className="w-[22%]">
                <Link
                  to={`/view-book-details/${items.book._id}`}
                  className="hover:text-blue-300"
                >
                  {items.book.title}
                </Link>
              </div>

              <div className="w-[45%]">
                <h1>{items.book.desc.slice(0, 50)}...</h1>
              </div>

              <div className="w-[9%]">
                <h1>₹ {items.book.price}</h1>
              </div>

              <div className="w-[16%]">
                <h1 className="font-semibold text-green-500">
                  {items.status === "Order placed" ? (
                    <div className='text-yellow-500'>{items.status}</div>
                  ) : items.status === "Canceled" ? (
                    <div className='text-red-500'>{items.status}</div>
                  ) : (
                    items.status
                  )
                  }
                </h1>
              </div>
              <div className='w-none md:w-[5%] hidden md:block'>
                <h1 className='text-sm text-zinc-400'>COD</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default UserOrderHistory