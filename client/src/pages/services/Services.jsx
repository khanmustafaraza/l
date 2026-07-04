import React, { useState } from "react";
import {
  FaIdCard,
  FaFileSignature,
  FaUniversity,
  FaSeedling,
  FaGraduationCap,
  FaHeartbeat,
  FaSearch,
} from "react-icons/fa";
import MainLayout from "../../layouts/MainLayout";

const allServices = [
  {
    icon: <FaIdCard />,
    title: "Aadhaar Services",
    category: "Identity",
    description:
      "Apply, update, or download Aadhaar card details easily online.",
  },
  {
    icon: <FaFileSignature />,
    title: "Certificates",
    category: "Documents",
    description: "Income, caste, domicile, and birth certificate applications.",
  },
  {
    icon: <FaUniversity />,
    title: "Government Schemes",
    category: "Schemes",
    description: "Explore and apply for central and state welfare schemes.",
  },
  {
    icon: <FaSeedling />,
    title: "Farmer Services",
    category: "Agriculture",
    description: "PM-Kisan, crop insurance, and farming support services.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Scholarships",
    category: "Education",
    description: "Apply for government and private scholarships easily.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health Services",
    category: "Health",
    description: "Access Ayushman Bharat and other health schemes.",
  },
];

const categories = [
  "All",
  "Identity",
  "Documents",
  "Schemes",
  "Agriculture",
  "Education",
  "Health",
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredServices = allServices.filter((service) => {
    const matchCategory =
      selectedCategory === "All" || service.category === selectedCategory;

    const matchSearch = service.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <MainLayout>
      <section className="min-h-screen bg-[#FFF8F0] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#3E2723]">
              All Government Services
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Browse, search, and apply for all digital government services in
              one place.
            </p>
          </div>

          {/* Search */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center bg-white shadow-md rounded-xl px-4 py-3 w-full max-w-xl">
              <FaSearch className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full border transition font-medium
                ${
                  selectedCategory === cat
                    ? "bg-[#7C3A2D] text-white border-[#7C3A2D]"
                    : "bg-white text-gray-700 hover:bg-[#F7C873] hover:text-[#3E2723]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F7C873] flex items-center justify-center text-[#7C3A2D] text-2xl mb-5">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#3E2723] mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-[#C97B63] mb-3">
                  {service.category}
                </p>

                <p className="text-gray-600 leading-7">{service.description}</p>

                <button className="mt-6 text-[#7C3A2D] font-semibold hover:underline">
                  Apply Now →
                </button>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No services found.
            </p>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
