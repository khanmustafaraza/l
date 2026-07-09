import React from "react";
import { Bell, Menu, LogOut, UserCircle, ShieldCheck } from "lucide-react";

const Topbar = ({ setSidebarOpen }) => {
  return (
    <header
      className="
      py-1
      px-2
      bg-white 
      border-b border-gray-200 
      flex items-center justify-between 
    
      shadow-sm
    "
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}

        <div>
          <h1
            className="
            text-xl 
            md:text-2xl 
            font-bold 
            text-gray-900
          "
          >
            Admin Dashboard
          </h1>

          <p
            className="
            text-sm 
            text-gray-500 
            mt-0.5
          "
          >
            Manage LokSetu Platform
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Notification */}
        <button
          className="
            relative
            p-3
            rounded-xl
            bg-gray-50
            hover:bg-yellow-50
            transition-all
            group
          "
        >
          <Bell
            className="
              w-5 h-5
              text-gray-600
              group-hover:text-yellow-600
              transition
            "
          />

          <span
            className="
              absolute
              -top-1
              -right-1
              bg-red-500
              text-white
              text-[11px]
              font-semibold
              w-5
              h-5
              rounded-full
              flex
              items-center
              justify-center
              border-2
              border-white
            "
          >
            3
          </span>
        </button>

        {/* Divider */}
        <div className="hidden sm:block h-10 w-px bg-gray-200" />

        {/* Profile */}
        <div
          className="
            hidden sm:flex
            items-center
            gap-3
            px-3
            py-2
            rounded-xl
            hover:bg-gray-50
            transition
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-yellow-100
              flex
              items-center
              justify-center
            "
          >
            <UserCircle className="text-yellow-600" size={28} />
          </div>

          <div className="leading-tight">
            <p
              className="
              text-sm 
              font-semibold 
              text-gray-900
            "
            >
              Rahul Admin
            </p>

            <div className="flex items-center gap-1">
              <ShieldCheck size={13} className="text-green-500" />

              <p
                className="
                text-xs 
                text-gray-500
              "
              >
                Super Admin
              </p>
            </div>
          </div>
        </div>

        {/* Logout */}
        <button
          className="
            flex
            items-center
            gap-2
            px-3.5
            py-2.5
            rounded-xl
            border
            border-red-100
            bg-red-50/50
            text-red-500
            hover:bg-red-500
            hover:text-white
            transition-all
            duration-300
            group
          "
        >
          <LogOut
            className="
              w-5
              h-5
              group-hover:translate-x-1
              transition-transform
            "
          />

          <span className="hidden md:block text-sm font-medium">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
