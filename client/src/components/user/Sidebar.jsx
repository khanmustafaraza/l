import React from "react";
import {
  Home,
  User,
  FileText,
  FolderOpen,
  CreditCard,
  Shield,
  Bell,
  Calendar,
  MapPin,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: <Home size={20} />,
    path: "/dashboard",
  },
  {
    title: "My Profile",
    icon: <User size={20} />,
    path: "/profile",
  },
  {
    title: "Government Services",
    icon: <FileText size={20} />,
    path: "/services",
  },
  {
    title: "My Applications",
    icon: <FolderOpen size={20} />,
    path: "/applications",
  },
  {
    title: "Documents",
    icon: <Shield size={20} />,
    path: "/documents",
  },
  {
    title: "Payments",
    icon: <CreditCard size={20} />,
    path: "/payments",
  },
  {
    title: "Appointments",
    icon: <Calendar size={20} />,
    path: "/appointments",
  },
  {
    title: "Service Centers",
    icon: <MapPin size={20} />,
    path: "/service-centers",
  },
  {
    title: "Notifications",
    icon: <Bell size={20} />,
    path: "/notifications",
  },
  {
    title: "Help & Support",
    icon: <HelpCircle size={20} />,
    path: "/support",
  },
  {
    title: "Settings",
    icon: <Settings size={20} />,
    path: "/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen bg-[#7C3A2D] text-white flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="p-6 border-b border-[#a95a47]">
        <h1 className="text-3xl font-bold text-yellow-400">LokSetu</h1>
        <p className="text-sm text-gray-200 mt-1">
          Digital Government Services
        </p>
      </div>

      {/* User Section */}
      <div className="p-6 border-b border-[#a95a47]">
        <div className="w-16 h-16 rounded-full bg-yellow-400 text-[#7C3A2D] flex items-center justify-center text-2xl font-bold">
          U
        </div>

        <h2 className="mt-4 text-lg font-semibold">Welcome, Citizen</h2>
        <p className="text-sm text-gray-200">Citizen ID: LS-2026-001</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="flex items-center gap-4 px-6 py-3 hover:bg-yellow-400 hover:text-[#7C3A2D] transition-all duration-300"
          >
            {item.icon}
            <span className="font-medium">{item.title}</span>
          </a>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-5 border-t border-[#a95a47]">
        <button className="w-full flex items-center justify-center gap-3 bg-yellow-400 text-[#7C3A2D] py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
