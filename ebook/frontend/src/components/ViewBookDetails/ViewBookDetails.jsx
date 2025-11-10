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

const ViewBookDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

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

  // ⛔️ Prevent accessing data before it's loaded
  // if (loading) return <Loader />;
  // if (!data) return <p className="text-white p-10">Book not found</p>;

  return (
    <>
      {data && (<div className='px-4 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row gap-8'>
        <div className='bg-zinc-800 rounded p-4 h-[63vh] lg:h-[88vh] w-full lg:w-3/6 flex items-center justify-center'>
          <img src={data.url} alt={data.title} className='h-[50vh] lg:h-[70vh] rounded' />
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
