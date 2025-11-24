import React, { useEffect, useState } from 'react'
import axios from "axios"
import BookCard from "../BookCards/BookCards.jsx"
import { DiLinux } from "react-icons/di";

const Favourites = () => {
  const [faviourite, setFavourite] = useState([])

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/get-faviourite-books",
          { headers }
        );
        setFavourite(response.data.data);
      } catch (error) {
        console.error("Error fetching favourites:", error);
      }
    };

    fetch();
  }, [faviourite]); //

  return (
    <>
      {faviourite && faviourite.length === 0 && <div className='h-full w-full text-xl text-zinc-700 flex items-center justify-center gap-2'><DiLinux />No books in favourites.</div>}
      <div className='grid grid-cols-4 gap-4'>
        {faviourite && faviourite.map((items, i) => (
          <div key={i}>
            <BookCard data={items} faviourite={true} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Favourites;
