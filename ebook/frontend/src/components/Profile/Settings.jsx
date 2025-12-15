import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader.jsx"

const Settings = () => {
  const [value, setValue] = useState({ address: "" });
  const [profileData, setProfileData] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  // const change = (e) => {
  //   const { name, value } = e.target;
  //   setValue({ ...value, [name]: value })
  // }
  const change = (e) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: inputValue
    }));
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/get-user-information",
          { headers }
        );
        console.log(response.data);

        setProfileData(response.data);
        setValue({ address: response.data.address });
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, []);

  // const submitAddress = async () => {
  //   const response = await axios.get(
  //     "http://localhost:4000/api/v1/update-address",
  //     value,
  //     { headers }
  //   );
  //   console.log(response)
  // }
  const submitAddress = async () => {
    try {
      const response = await axios.put(
        "http://localhost:4000/api/v1/update-address",
        value,
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };


  return <>
    {!profileData && (
      <div className="w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    )}

    {profileData && (
      <div className="h-full p-0 md:p-4 text-zinc-100">
        <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
          Settings
        </h1>

        <div className="flex gap-12">
          <div>
            <label>Username</label>
            <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
              {profileData.username}
            </p>
          </div>

          <div>
            <label>Email</label>
            <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
              {profileData.email}
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="">Address</label>
          <textarea
            className="p-2 rounded bg-zinc-700 mt-2 font-semibold"
            rows="5"
            placeholder="Address"
            name="address"
            value={value.address}
            onChange={change}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-yellow-400 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-700"
            onClick={submitAddress}
          >Update</button>
        </div>
      </div>
    )}

  </>;
};

export default Settings;
