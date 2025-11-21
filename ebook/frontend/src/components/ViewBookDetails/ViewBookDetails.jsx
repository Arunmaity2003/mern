// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import Loader from '../Loader/Loader'
// import { useParams } from 'react-router-dom'
// import { GrLanguage } from "react-icons/gr";


// const ViewBookDetails = () => {
//     const { id } = useParams();
//     const [data, setData] = useState();

//     useEffect(() => {
//         const fetch = async () => {
//             const response = await axios.get(`http://localhost:4000/api/v1/get-book-by-id/${id}`);
//             console.log(response)
//             setData(response.data.data);
//         }
//         fetch()
//     }, [])
//     return (
//         <div className='px-12 py-8 bg-zinc-900 flex gap-8'>
//             <div className='bg-zinc-800 rounded p-4 h-[88vh] w-3/6 flex items-center justify-center'>
//                 {" "}
//                 <img src={data?.url} alt="book" className='h-[70vh]' />
//             </div>
//             <div className="p-4 w-3/6">
//                 <h1 className='text-4xl text-zinc-300 font-semibold'>{data.title}</h1>
//                 <p className='text-zinc-400 mt-1'>{data.author}</p>
//                 <p className='text-zinc-500 mt-4 text-xl'>{data.desc}</p>
//                 <p className='text-zinc-400 flex items-center justify-start mt-4 text-xl'>
//                     <GrLanguage className='me-3' />{data.language}
//                 </p>
//                 <p className='text-zinc-100 font-semibold mt-4 text-3xl'>
//                     <GrLanguage className='me-3' />Price : ₹ {data.price}
//                 </p> 
//             </div>
//         </div>
//     )
// }

// export default ViewBookDetails





import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { GrLanguage } from "react-icons/gr"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux'

const ViewBookDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  // console.log(isLoggedIn,role)

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


  return (
    <>
      {data && (<div className='px-4 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row gap-8'>
        <div className=' w-full lg:w-3/6 '> {/* h-[63vh] lg:h-[88vh] */}
          <div className='bg-zinc-800 rounded p-12 flex justify-around '>
            <img src={data.url} alt={data.title} className='h-[50vh] lg:h-[70vh] rounded' />
            {isLoggedIn === true && role === "user" && <div className='flex md:flex-col '>
              <button className='bg-white rounded-full text-3xl p-2 text-red-600'>
                <FaHeart />
              </button>
              <button className='bg-white rounded-full text-3xl p-2 mt-4 text-green-600'>
                <FaShoppingCart />
              </button>
            </div>}
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
