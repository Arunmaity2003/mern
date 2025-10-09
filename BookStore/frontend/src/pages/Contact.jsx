import React, { useState } from "react";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", formData);

    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-white to-yellow-100 flex items-center justify-center py-10 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl grid md:grid-cols-2 gap-8">


          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">📩 Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Write your message..."
                  className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                ></textarea>
              </div>


              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>


          <div className="flex flex-col justify-center bg-yellow-50 p-6 rounded-xl shadow-inner">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">📚 Bookstore Info</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Address:</span>
              123 Book Lane, Kolkata, India
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span>
              +91 98765 43210
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span>
              support@bookstore.com
            </p>
            <p className="text-gray-700 mt-4">
              We’d love to hear from you! Reach out with your queries, feedback, or suggestions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
