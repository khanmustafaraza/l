import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  User,
  LogOut,
} from "lucide-react";
import useAuth from "../../store/context/auth.context";

const Navbar = () => {
  const { state } = useAuth();

  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const navLink = ({ isActive }) =>
    `font-medium transition ${
      isActive ? "text-amber-600" : "text-gray-700 hover:text-amber-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMobileMenu(false)}
        >
          <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
            LS
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Lok<span className="text-amber-500">Setu</span>
            </h1>
            <p className="text-xs text-gray-500">Bridging Digital Services</p>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <NavLink to="/" className={navLink}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={navLink}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLink}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop User */}
        <div className="hidden md:flex items-center">
          {state.loading ? null : state.user ? (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 transition"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-semibold">
                  {state.user.name[0].toUpperCase()}
                </div>

                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-800">
                    {state.user.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate max-w-[140px]">
                    {state.user.email}
                  </p>
                </div>

                <ChevronDown size={18} />
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border overflow-hidden">
                  <div className="px-5 py-4 border-b">
                    <p className="font-semibold text-gray-800">
                      {state.user.name}
                    </p>
                    <p className="text-sm text-gray-500">{state.user.email}</p>
                  </div>

                  <NavLink
                    to="/dashboard"
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
                  >
                    <LayoutDashboard size={18} />
                    Dashboard
                  </NavLink>

                  <NavLink
                    to="/profile"
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
                  >
                    <User size={18} />
                    Profile
                  </NavLink>

                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-50"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-amber-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-600 transition"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <X size={28} className="text-gray-700" />
          ) : (
            <Menu size={28} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden border-t bg-white">
          <div className="px-5 py-4 space-y-1">
            <NavLink
              to="/"
              onClick={() => setMobileMenu(false)}
              className="block py-3 text-gray-700 hover:text-amber-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setMobileMenu(false)}
              className="block py-3 text-gray-700 hover:text-amber-600"
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMobileMenu(false)}
              className="block py-3 text-gray-700 hover:text-amber-600"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="block py-3 text-gray-700 hover:text-amber-600"
            >
              Contact
            </NavLink>

            <hr className="my-4" />

            {state.user ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                    {state.user.name[0].toUpperCase()}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {state.user.name}
                    </h3>
                    <p className="text-sm text-gray-500">{state.user.email}</p>
                  </div>
                </div>

                <NavLink
                  to="/dashboard"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 py-3 text-gray-700"
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </NavLink>

                <NavLink
                  to="/profile"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 py-3 text-gray-700"
                >
                  <User size={18} />
                  Profile
                </NavLink>

                <button
                  onClick={logout}
                  className="mt-3 flex w-full items-center gap-3 rounded-lg bg-red-50 px-4 py-3 text-red-600"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setMobileMenu(false)}
                className="block mt-4 rounded-lg bg-amber-500 py-3 text-center font-medium text-white hover:bg-amber-600"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
