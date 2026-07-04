import React from "react";
import {
  FaIdCard,
  FaFileSignature,
  FaUniversity,
  FaSeedling,
  FaGraduationCap,
  FaHeartbeat,
} from "react-icons/fa";

const services = [
  {
    icon: <FaIdCard />,
    title: "Aadhaar Services",
    description:
      "Apply, update, or download your Aadhaar details quickly and securely.",
  },
  {
    icon: <FaFileSignature />,
    title: "Certificates",
    description:
      "Apply for income, caste, domicile, and birth certificates online.",
  },
  {
    icon: <FaUniversity />,
    title: "Government Schemes",
    description:
      "Explore and apply for central and state government welfare schemes.",
  },
  {
    icon: <FaSeedling />,
    title: "Farmer Services",
    description:
      "Access PM-Kisan, crop insurance, and agricultural support services.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Scholarships",
    description:
      "Find and apply for scholarships offered by government departments.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health Services",
    description:
      "Access health schemes, insurance, and digital healthcare facilities.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#C97B63] font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl font-bold text-[#3E2723] mt-3">
            Digital Services at Your Fingertips
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            LokSetu provides seamless access to essential government services,
            making applications faster, easier, and more transparent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl bg-[#F7C873] flex items-center justify-center text-3xl text-[#7C3A2D] mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#3E2723] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">{service.description}</p>

              <button className="mt-6 text-[#C97B63] font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
