import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-72 flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512820790803-83ca734da794')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-lg">
          About Our Bookstore
        </h1>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">📖 Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-yellow-600">Bookstore</span>, our mission is simple: 
          to bring the joy of reading to everyone. Whether you're a passionate reader, 
          a curious learner, or just starting your literary journey, we aim to provide 
          books that inspire, educate, and entertain.  
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-yellow-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-600 mb-3">Wide Collection</h3>
            <p className="text-gray-600">
              From timeless classics to modern bestsellers, our collection spans across genres, 
              ensuring there’s something for everyone.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-600 mb-3">Affordable Prices</h3>
            <p className="text-gray-600">
              We believe knowledge should be accessible. That’s why we offer books at 
              prices that won’t break the bank.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-600 mb-3">Community Driven</h3>
            <p className="text-gray-600">
              We’re more than a bookstore — we’re a community of book lovers, learners, 
              and storytellers who share the same passion.
            </p>
          </div>
        </div>
      </section>

      {/* Vision / Closing */}
      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🌟 Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We envision a world where books connect people across cultures and ideas. 
          With every book we provide, we hope to spark curiosity, encourage growth, 
          and inspire the next generation of thinkers and dreamers.  
        </p>
      </section>
    </div>
  );
}

export default About;
