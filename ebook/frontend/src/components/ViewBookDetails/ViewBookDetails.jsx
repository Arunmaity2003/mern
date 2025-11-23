import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { GrLanguage } from "react-icons/gr"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useSelector } from 'react-redux'

const ViewBookDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/get-book-by-id/${id}`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id
  }

  const handleFaviourite = async () => {
    const response = await axios.put("http://localhost:4000/api/v1/add-to-faviourite", {}, { headers })
    alert(response.data.message)
  }

  const handleCart = async () => {
    const response = await axios.put("http://localhost:4000/api/v1/add-to-cart", {}, { headers })
    alert(response.data.message)
  }

  return (
    <>
      {data && (
        <div className='px-4 md:px-12 py-8 bg-zinc-900 flex flex-col lg:flex-row gap-8'>
          <div className=' w-full lg:w-3/6 '>
            <div className='bg-zinc-800 rounded p-12 flex flex-col lg:flex-row justify-around '>
              <img src={data.url} alt={data.title} className='h-[50vh] md:h-[60vh] lg:h-[70vh] rounded' />


              {isLoggedIn === true && role === "user" &&
                <div className='flex flex-col md:flex-row lg:flex-col mt-4 lg:mt-0 items-center justify-between lg:justify-start'>
                  <button
                    className='bg-white rounded lg:rounded-full text-3xl p-3 text-red-600 flex items-center justify-center'
                    onClick={handleFaviourite}
                  >
                    <FaHeart /><span className='ms-4 block lg:hidden'>Faviourite</span>
                  </button>
                  <button
                    className='bg-white rounded lg:rounded-full text-3xl p-3 mt-8 md:mt-0 lg:mt-8 text-green-600 flex items-center justify-center'
                    onClick={handleCart}
                  >
                    <FaShoppingCart /><span className='ms-4 block lg:hidden'>Add to cart</span>
                  </button>
                </div>
              }

              {isLoggedIn === true && role === "admin" &&
                <div className='flex flex-col md:flex-row lg:flex-col mt-4 lg:mt-0 items-center justify-between lg:justify-start'>
                  <button className='bg-white rounded lg:rounded-full text-3xl p-3 flex items-center justify-center'>
                    <FaEdit /><span className='ms-4 block lg:hidden'>Edit</span>
                  </button>
                  <button className='bg-white rounded lg:rounded-full text-3xl p-3 mt-8 md:mt-0 lg:mt-8 text-red-600 flex items-center justify-center'>
                    <MdDelete /><span className='ms-4 block lg:hidden'>Delete</span>
                  </button>
                </div>
              }
            </div>
          </div>
          <div className="p-4 w-full lg:w-3/6">
            <h1 className='text-4xl text-zinc-300 font-semibold'>{data.title}</h1>
            <p className='text-zinc-400 mt-1'>{data.author}</p>
            <p className='text-zinc-500 mt-4 text-xl'>{data.desc}</p>
            <p className='text-zinc-400 flex items-center justify-start mt-4 text-xl'>
              <GrLanguage className='me-3' />{data.language}
            </p>
            <p className='text-zinc-100 font-semibold mt-4 text-3xl'>
              Price: ₹ {data.price}
            </p>
          </div>
        </div>)}
      {!data && (
        <div className='bg-zinc-900 h-screen flex items-center justify-center'>
          <Loader />{" "}
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
