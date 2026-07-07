import React from "react";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        {/* topbar */}
        <Topbar />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
