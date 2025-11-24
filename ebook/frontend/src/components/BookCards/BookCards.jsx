// import React from 'react'
// import { Link } from "react-router-dom"
// import axios from "axios"

// const BookCards = ({ data, faviourite }) => {

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//     bookid: data._id
//   }

//   const handleRemoveBook = async () => {
//     const response = await axios.put(
//       "http://localhost:4000/api/v1/delete-from-faviourite",
//       {},
//       { headers: headers }
//     );

//     alert(response.data.message)
//   }
//   return (
//     <div className='bg-zinc-800 rounded p-4 flex flex-col'>
//       <Link
//         to={`/view-book-details/${data._id}`}
//       >
//         <div className='bg-zinc-800 rounded p-4 h-[70vh]'>
//           <div className="bg-zinc-900 rounded flex items-center justify-center">
//             <img src={data.url} alt="books" className='h-[45vh] w-full' />
//           </div>
//           <h2 className='mt-4 text-xl font-semibold text-white'>{data.title}</h2>
//           <p className='mt-2 text-zinc-400 font-semibold'>By {data.author}</p>
//           <p className='mt-2 text-zinc-400 font-semibold text-xl'>
//             ₹ {data.price}
//           </p>
//         </div>
//       </Link>
//       {faviourite &&
//         <button
//           className='text-yellow-300 bg-yellow-50 rounded border border-yellow-500 px-4 py-2 mt-4'
//           onClick={handleRemoveBook}
//         >Remove from faviourites
//         </button>
//       }
//     </div>
//   )
// }

// export default BookCards

import React from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

const BookCards = ({ data, faviourite }) => {

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id
  }

  const handleRemoveBook = async () => {
    const response = await axios.put(
      "http://localhost:4000/api/v1/delete-from-faviourite",
      {},
      { headers }
    );
    alert(response.data.message);
  }

  return (
    <div className='bg-zinc-800 rounded p-4 flex flex-col'>

      <Link to={`/view-book-details/${data._id}`}>
        <div className='bg-zinc-800 rounded p-4 h-[70vh]'>
          <div className="bg-zinc-900 rounded flex items-center justify-center">
            <img src={data.url} alt="books" className='h-[45vh] w-full' />
          </div>

          <h2 className='mt-4 text-xl font-semibold text-white'>{data.title}</h2>
          <p className='mt-2 text-zinc-400 font-semibold'>By {data.author}</p>
          <p className='mt-2 text-zinc-400 font-semibold text-xl'>
            ₹ {data.price}
          </p>
        </div>
      </Link>

      {faviourite && 
        <button
          className='text-yellow-600 bg-yellow-100 rounded border border-yellow-500 px-4 py-2 mt-4'
          onClick={handleRemoveBook}
        >
          Remove from favourites
        </button>
      }
    </div>
  )
}

export default BookCards;
