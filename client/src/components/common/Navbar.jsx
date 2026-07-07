import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `relative py-1 transition duration-300
    ${isActive ? "text-[#F7C873]" : "text-white hover:text-[#F7C873]"}
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-[#F7C873]
    after:transition-all after:duration-300
    hover:after:w-full`;

  return (
    <nav className="bg-[#7C3A2D] text-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-[#F6E7D8] text-[#7C3A2D] flex items-center justify-center font-extrabold text-lg shadow-md">
            LS
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Lok<span className="text-[#F7C873]">Setu</span>
            </h1>
            <p className="text-xs text-[#F6E7D8]/80">
              Bridging People with Digital Services
            </p>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/login"
            className="hidden md:block bg-[#F7C873] text-[#7C3A2D] font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-white hover:scale-105 transition-all duration-300"
          >
            Login
          </NavLink>

          {/* Mobile Menu */}
          <button className="md:hidden text-3xl hover:text-[#F7C873] transition">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
