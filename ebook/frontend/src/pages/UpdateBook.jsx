import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom';

const UpdateBook = () => {

    const [Data, setData] = useState({
        url: "",
        title: "",
        author: "",
        price: "",
        desc: "",
        language: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();


    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
        bookid: id
    };

    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };

    const submit = async () => {
        try {
            if (
                Data.url === "" ||
                Data.title === "" ||
                Data.author === "" ||
                Data.price === "" ||
                Data.desc === "" ||
                Data.language === ""
            ) {
                alert("All fields are required!")
            } else {
                const response = await axios.put(
                    "http://localhost:4000/api/v1/update-book",
                    Data,
                    { headers }
                );
                alert(response.data.message)
                navigate(`/view-book-details/${id}`)
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/get-book-by-id/${id}`);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        };
        fetch();
    }, [id]);

    return (
        <div className="bg-zinc-900 h-full p-0 md:p-4">
            <h1 className=" text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
                Update Book
            </h1>
            <div className="p-4 bg-zinc-800 rounded">
                <div>
                    <label htmlFor="" className="text-zinc-400">
                        Image
                    </label>
                    <input
                        type="text"
                        className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                        placeholder="url of image"
                        name="url"
                        required
                        value={Data.url}
                        onChange={change}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="" className="text-zinc-400">
                        Title of the Book
                    </label>
                    <input
                        type="text"
                        className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                        placeholder="tite of the book"
                        name="title"
                        required
                        value={Data.title}
                        onChange={change}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="" className="text-zinc-400">
                        Author of the Book
                    </label>
                    <input
                        type="text"
                        className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                        placeholder="author name"
                        name="author"
                        required
                        value={Data.author}
                        onChange={change}
                    />
                </div>
                <div className="flex gap-1">
                    <div className="mt-4 w-3/6">
                        <label htmlFor="" className="text-zinc-400">
                            Language
                        </label>
                        <input
                            type="text"
                            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                            placeholder="language of the Book"
                            name="language"
                            required
                            value={Data.language}
                            onChange={change}
                        />
                    </div>
                    <div className="mt-4 w-3/6">
                        <label htmlFor="" className="text-zinc-400">
                            Price
                        </label>
                        <input
                            type="number"
                            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                            placeholder="price of the Book"
                            name="price"
                            required
                            value={Data.price}
                            onChange={change}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="" className="text-zinc-400">
                        Description
                    </label>
                    <textarea
                        type="text"
                        className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                        placeholder="description of the Book"
                        name="desc"
                        rows="5"
                        required
                        value={Data.desc}
                        onChange={change}
                    />
                </div>
                <button
                    className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
                    onClick={submit}
                >Update Book</button>
            </div>
        </div>
    )
}

export default UpdateBook