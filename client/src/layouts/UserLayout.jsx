import React from "react";
import Sidebar from "../components/user/Sidebar";

const UserLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        {/* topbar */}

        <main>{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;
