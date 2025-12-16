import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loader from '../components/Loader/Loader';
import { FaUser } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import SeeUserData from "./seeUserData";
import { FaCheck } from "react-icons/fa";

const AllOrders = () => {

  const [allOrders, setAllOrders] = useState()
  const [options, setOptions] = useState(-1)
  // const [Values, setValues] = useState("")
  const [Values, setValues] = useState("");
  const [UserDiv, setUserDiv] = useState("hidden")
  const [UserDivData, setUserDivData] = useState()

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:4000/api/v1/get-all-orders`,
  //         { headers }
  //       );
  //       setAllOrders(response.data.data)
  //     } catch (error) {
  //       console.error("Error fetching book:", error);
  //     }
  //   };
  //   fetch();
  // }, [allOrders]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/get-all-orders",
          { headers }
        );
        setAllOrders(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []); // ✅ EMPTY dependency

  // const change = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...Data, [name]: value });
  // };

  // const submitChanges = async () => {
  //   try {
  //     const id = OrderHistory[i]._id;
  //     const response = await axios.get(
  //       `http://localhost:4000/api/v1/update-status/${id}`,
  //       Values,
  //       { headers }
  //     );
  //   } catch (error) {
  //     alert(error.response.data.message)
  //   }
  // };

  const submitChanges = async (orderId) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/update-status/${orderId}`,
        { status: Values },
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };


  // const setOptionsButton = (i) => {
  //   setOptions(i)
  // }

  // allOrders && allOrders.splice(allOrders.length - 1, 1)
  const orders = allOrders?.slice(0, -1);

  return (
    <>
      {!allOrders && (
        <div className='h-full flex justify-center items-center'>
          <Loader />
        </div>
      )}

      {allOrders && allOrders.length > 0 && (
        <div className='h-full p-0 md:p-4 text-zinc-100'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>
            All Orders
          </h1>
          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>

            <div className="w-[40%] md:w-[22%]">
              <h1>Books</h1>
            </div>

            <div className="w-0 md:w-[45%] hidden md:block">
              <h1>Description</h1>
            </div>

            <div className="w-[17%] md:w-[9%]">
              <h1>Price</h1>
            </div>

            <div className="w-[3%] md:w-[16%]">
              <h1>Status</h1>
            </div>

            <div className="w-[10%] md:w-[5%]">
              <h1><FaUser /></h1>
            </div>
          </div>

          {allOrders.map((items, i) => (
            <div className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all ">
              <div className="w-[3%]">
                <h1 className="text-center">{i + 1}</h1>
              </div>

              <div className="w-[40%] md:w-[22%]">
                <Link
                  to={`/view-book-details/${items.book._id}`}
                  className="hover:text-blue-300"
                >
                  {items.book.title}
                </Link>
              </div>

              <div className="w-0 md:w-[45%] hidden md:block">
                <h1>{items.book.desc.slice(0, 50)} ...</h1>
              </div>

              <div className="w-[17%] md:w-[9%]">
                <h1>₹ {items.book.price}</h1>
              </div>
              <div className='w-[30%] md:w-[16%]'>
                <h1 className='font-semibold'>
                  <button
                    className='hover:scale-105 transition-all duration-300'
                    onClick={() => setOptions(i)}
                  >
                    {items.status === "Order placed" ? (
                      <div className='text-yellow-500'>{items.status}</div>
                    ) : items.status === "Canceled" ? (
                      <div className='text-red-500'>{items.status}</div>
                    ) : (
                      <div className='text-green-500'>{items.status}</div>
                    )}
                  </button>
                  <div className={`${options === i ? "block" : "hidden"} flex mt-4`}>
                    <select
                      name="status"
                      id=""
                      className="bg-gray-800"
                      // onChange={change}
                      // value={Values.status}
                      value={Values}
                      onChange={(e) => setValues(e.target.value)}
                    >
                      {[
                        "Order placed",
                        "Out for delivery",
                        "Delivered",
                        "Canceled",
                      ].map((items, i) => (
                        <option value={items} key={i}>
                          {items}
                        </option>
                      ))}
                    </select>

                    <button
                      className="text-green-500 hover:text-pink-600 mx-2"
                      // onClick={() => {
                      //   setOptions(-1)
                      //   submitChanges(i)
                      // }}
                      onClick={() => {
                        submitChanges(items._id);
                        setOptions(-1);
                      }}

                    >
                      <FaCheck />
                    </button>
                  </div>

                </h1>
              </div>
              <div className='w-[10%] md:w-[5%]'>
                <button
                  className='text-xl hover:text-orange-500'
                  onClick={() => {
                    setUserDiv("fixed")
                    setUserDivData(items.user)
                  }}
                >
                  <IoOpenOutline />
                </button>
              </div>
            </div>

          ))}
        </div>
      )}
      {
        UserDivData && (
          <SeeUserData
            UserDivData={UserDivData}
            UserDiv={UserDiv}
            setUserDiv={setUserDiv}
          />

        )
      }
    </>
  )
}

export default AllOrders