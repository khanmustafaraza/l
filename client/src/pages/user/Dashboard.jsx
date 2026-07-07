import React from "react";
import MainLayout from "../../layouts/MainLayout";
import UserLayout from "../../layouts/UserLayout";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Applications",
      value: 12,
      color: "bg-blue-500",
    },
    {
      title: "Pending",
      value: 3,
      color: "bg-yellow-500",
    },
    {
      title: "Approved",
      value: 8,
      color: "bg-green-500",
    },
    {
      title: "Documents",
      value: 15,
      color: "bg-purple-500",
    },
  ];

  const applications = [
    {
      id: "LS1001",
      service: "Income Certificate",
      status: "Pending",
      date: "05 Jul 2026",
    },
    {
      id: "LS1002",
      service: "Domicile Certificate",
      status: "Approved",
      date: "01 Jul 2026",
    },
    {
      id: "LS1003",
      service: "Ration Card",
      status: "Under Review",
      date: "28 Jun 2026",
    },
  ];

  return (
    <MainLayout>
      <UserLayout>
        <div className="min-h-screen bg-gray-100 p-6">
          {/* Welcome */}
          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow">
            <h1 className="text-3xl font-bold">Welcome, Rahul 👋</h1>
            <p className="mt-2 text-blue-100">
              Manage your profile, documents and government services from one
              dashboard.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-5 shadow">
                <div className={`h-3 w-16 rounded-full ${item.color}`}></div>

                <p className="mt-4 text-sm text-gray-500">{item.title}</p>

                <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 rounded-xl bg-white p-6 shadow">
            <h2 className="mb-5 text-xl font-semibold">Quick Actions</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <button className="rounded-lg bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700">
                My Profile
              </button>

              <button className="rounded-lg bg-green-600 px-4 py-3 text-white transition hover:bg-green-700">
                My Family
              </button>

              <button className="rounded-lg bg-purple-600 px-4 py-3 text-white transition hover:bg-purple-700">
                Document Vault
              </button>

              <button className="rounded-lg bg-orange-600 px-4 py-3 text-white transition hover:bg-orange-700">
                Apply Service
              </button>
            </div>
          </div>

          {/* Recent Applications */}
          <div className="mt-8 rounded-xl bg-white shadow">
            <div className="border-b px-6 py-4">
              <h2 className="text-xl font-semibold">Recent Applications</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">Application ID</th>
                    <th className="px-6 py-3 text-left">Service</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{app.id}</td>

                      <td className="px-6 py-4">{app.service}</td>

                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            app.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : app.status === "Pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {app.status}
                        </span>
                      </td>

                      <td className="px-6 py-4">{app.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </UserLayout>
    </MainLayout>
  );
};

export default Dashboard;
