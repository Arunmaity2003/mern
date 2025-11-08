import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from '../components/Loader/Loader.jsx'
import BookCard from '../components/BookCards/BookCards.jsx'

const AllBooks = () => {
  const [data,setData] = useState()

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("http://localhost:4000/api/v1/get-all-books");
            setData(response.data.data);
        }
        fetch()
    },[])
  return (
    <div className='bg-zinc-900 px-12 py-8 h-auto'>
      <h4 className='text-3xl text-yellow-200'>Recently added books</h4>
      {!data &&
        <div className='flex items-center justify-center my-8'>
          <Loader />{" "}
        </div>
      }
      <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data && data.map((items, i) => (
          <div key={i}>
            <BookCard data={items} />{" "}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllBooks