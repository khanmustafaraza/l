import React from "react";
import { Bell, Menu, LogOut, UserCircle } from "lucide-react";

const Topbar = ({ setSidebarOpen }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>

          <p className="text-sm text-gray-500">Manage LokSetu Platform</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell className="w-5 h-5 text-gray-600" />

          <span
            className="
              absolute 
              -top-1 
              -right-1 
              bg-red-500 
              text-white 
              text-xs 
              w-5 
              h-5 
              rounded-full 
              flex 
              items-center 
              justify-center
            "
          >
            3
          </span>
        </button>

        {/* Admin Profile */}
        <div className="hidden sm:flex items-center gap-3">
          <UserCircle className="w-10 h-10 text-gray-500" />

          <div>
            <p className="text-sm font-medium text-gray-800">Rahul Admin</p>

            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>

        {/* Logout */}
        <button
          className="
            flex 
            items-center 
            gap-2 
            px-3 
            py-2 
            rounded-lg
            text-red-600
            hover:bg-red-50
            transition
          "
        >
          <LogOut className="w-5 h-5" />

          <span className="hidden md:block text-sm">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
