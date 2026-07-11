import React from "react";
import { Home, FileText, LogOut, ShieldCheck } from "lucide-react";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    icon: <MdDashboard size={19} />,
    path: "/admin/dashboard",
  },
  {
    title: "New Service",
    icon: <FaPlus size={19} />,
    path: "/admin/add-new-service",
  },
  {
    title: "Govt. Service List",
    icon: <FileText size={19} />,
    path: "/admin/govt-ser-list",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-[220px] min-h-screen bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Logo */}
      <div className=" border-b py-3 border-gray-200">
        <div className="flex items-center gap-1 ">
          <div className="bg-white p-2 rounded-xl">
            <ShieldCheck size={22} className="text-yellow-500" />
          </div>

          <div>
            <h2 className="font-bold ">Admin Panel</h2>
            <p className="text-xs">Government Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `
                flex items-center gap-2 
              px-4 py-3.5 rounded
              transition-all duration-300
              ${
                isActive
                  ? "bg-yellow-400 "
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }
              `
            }
          >
            {({ isActive }) => (
              <>
                {/* Active Line */}
                {isActive && (
                  <span className="absolute left-0 top-3 h-7 w-1 rounded-r-full" />
                )}

                <span
                  className={`
                    transition-transform duration-300
                    group-hover:scale-110
                    ${isActive ? "text-gray-900" : "text-gray-500"}
                  `}
                >
                  {item.icon}
                </span>

                <span className="font-medium text-sm text-right">
                  {item.title}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        className="
          flex items-center justify-center gap-3
          px-4 py-3.5
          rounded-xl
          border border-red-100
          text-red-500
          bg-red-50/50
          hover:bg-red-500
          hover:text-white
          transition-all duration-300
          font-medium
          text-sm
          group
        "
      >
        <LogOut
          size={19}
          className="group-hover:rotate-12 transition-transform"
        />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
