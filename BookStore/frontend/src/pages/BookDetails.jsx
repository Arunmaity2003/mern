import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookDetails({ isLoggedIn, setIsLoggedIn }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const book = state?.book;

  if (!book)
    return (
      <div className="text-center mt-20 text-gray-600">
        <p>Book not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg"
        >
          Back to Books
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-12 px-6 flex justify-center">
      <div className="max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden">
        <img src={book.image} alt={book.title} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-yellow-700">{book.title}</h1>
          <p className="text-gray-600 italic mt-1">{book.author}</p>
          <p className="text-lg font-semibold text-yellow-700 mt-3">{book.price}</p>
          <p className="text-sm text-gray-500 mt-1">{book.category}</p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">About this Book:</h2>
            <p className="text-gray-700">{book.shortDesc}</p>

            {isLoggedIn ? (
              <p className="mt-3 text-gray-800">{book.fullDesc}</p>
            ) : (
              <div className="mt-3">
                <p className="text-gray-500 italic">
                  Login to see full description and reviews.
                </p>
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="mt-4 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Login
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-8 w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Back to Books
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
