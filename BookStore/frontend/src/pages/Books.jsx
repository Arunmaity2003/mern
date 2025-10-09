import React from "react";

function Books() {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "₹399",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: "₹349",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: "₹299",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-12">
        📚 Our Collection
      </h1>

      {/* Books Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            {/* Book Image */}
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-60 object-cover"
            />

            {/* Book Details */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
              <p className="text-gray-600 italic">{book.author}</p>
              <p className="text-yellow-600 font-semibold text-lg mt-2">
                {book.price}
              </p>

              {/* Add to Cart Button */}
              <button className="mt-4 w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
