import React from "react";
import {
  FaLock,
  FaClock,
  FaMobileAlt,
  FaSearch,
  FaCloudUploadAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLock />,
    title: "Secure Platform",
    description:
      "Your personal information is protected with secure authentication and encrypted data.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Availability",
    description:
      "Access government services anytime, anywhere without visiting physical offices.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Friendly",
    description:
      "Enjoy a seamless experience across desktops, tablets, and smartphones.",
  },
  {
    icon: <FaSearch />,
    title: "Track Applications",
    description:
      "Monitor the status of your applications in real time from your dashboard.",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Easy Document Upload",
    description: "Upload required documents securely with just a few clicks.",
  },
  {
    icon: <FaHeadset />,
    title: "Support Assistance",
    description:
      "Get quick help through our dedicated customer support whenever you need it.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#C97B63] font-semibold uppercase tracking-widest">
              Why Choose LokSetu
            </span>

            <h2 className="text-4xl font-bold text-[#3E2723] mt-3 leading-tight">
              Making Government Services
              <span className="text-[#C97B63]"> Simple & Accessible</span>
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              LokSetu is designed to simplify access to digital public services.
              Whether you're applying for certificates, checking the status of
              applications, or exploring government schemes, everything is
              available on a single, easy-to-use platform.
            </p>

            <button className="mt-8 bg-[#7C3A2D] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5A281E] transition">
              Explore More
            </button>
          </div>

          {/* Right Content */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#FFF8F0] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F7C873] text-[#7C3A2D] flex items-center justify-center text-2xl mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#3E2723] mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
