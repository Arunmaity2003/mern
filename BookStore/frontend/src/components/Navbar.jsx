import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example: Fetch user info from localStorage (or context)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg p-4">
      <div className="text-white flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <h1
          className="text-xl font-serif font-extrabold text-yellow-400 tracking-wide cursor-pointer"
          onClick={() => navigate("/")}
        >
          Bookstore
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6 font-medium tracking-wide">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">
                About
              </Link>
            </li>
          </ul>

          {/* Conditional Rendering: Avatar or Login */}
          {user ? (
            <div className="relative group">
              <img
                src={user.avatar || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-yellow-400 cursor-pointer hover:scale-105 transition-transform duration-300"
              />
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-40 bg-gray-900 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => navigate("/profile")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow-md hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
