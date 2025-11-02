import React, { useState } from "react";

function Books() {
  const allBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "₹499",
      category: "Classics",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "₹399",
      category: "Classics",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: "₹349",
      category: "Dystopian",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: "₹299",
      category: "Romance",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      title: "Dune",
      author: "Frank Herbert",
      price: "₹599",
      category: "Science Fiction",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: "₹449",
      category: "Fantasy",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const categories = ["All", "Classics", "Dystopian", "Romance", "Science Fiction", "Fantasy"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks =
    selectedCategory === "All"
      ? allBooks
      : allBooks.filter((book) => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-12 px-6">
      
      <h1 className="text-4xl font-extrabold text-center text-yellow-700 mb-8">
        📚 Explore Our Book Collection
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Discover timeless classics, modern masterpieces, and thrilling adventures.
        Choose a category to start exploring.
      </p>

      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition-all border ${
              selectedCategory === cat
                ? "bg-yellow-500 text-white border-yellow-600 shadow-md"
                : "bg-white text-gray-700 hover:bg-yellow-100 border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                {book.title}
              </h2>
              <p className="text-gray-600 italic">{book.author}</p>
              <p className="text-yellow-700 font-bold text-lg mt-2">
                {book.price}
              </p>
              <p className="text-sm text-gray-500 mt-1">{book.category}</p>

              <button className="mt-4 w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No books available in this category.
        </p>
      )}
    </div>
  );
}

export default Books;
