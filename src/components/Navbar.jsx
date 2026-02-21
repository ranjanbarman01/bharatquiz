import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-950 shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-3xl font-bold text-white">
          Bharat<span className="text-orange-400">Quiz</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-white text-lg font-semibold">
          
          <NavLink to="/"className={({ isActive }) =>isActive? "text-orange-400 font-semibold": "hover:text-orange-400 transition" }>
             Home
          </NavLink>

          <NavLink to="/categories"className={({ isActive }) =>isActive? "text-orange-400 font-semibold": "hover:text-orange-400 transition" }>
             Categories
          </NavLink>

          <NavLink
            to="/about" className={({ isActive }) =>
            isActive
              ? "text-orange-400 font-semibold"
              : "hover:text-orange-400 transition" }>
            About
         </NavLink>

          <NavLink
           to="/login" className={({ isActive }) =>
           isActive
            ? "text-orange-400 font-semibold"
            : "hover:text-orange-400 transition"}>
           Login
          </NavLink>

          <Link
            to="/signup"
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg text-white transition"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 px-6 py-6 space-y-5 text-white font-medium">
          <Link onClick={() => setIsOpen(false)} to="/" className="block">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/categories" className="block">Categories</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="block">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/login" className="block">Login</Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/signup"
            className="block bg-orange-500 px-4 py-2 rounded-lg text-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
