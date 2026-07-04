import React from "react";
import {
  FaUserPlus,
  FaClipboardList,
  FaUpload,
  FaSearch,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create an Account",
    description:
      "Sign up securely using your mobile number or email to access all digital services.",
  },
  {
    icon: <FaClipboardList />,
    title: "Select a Service",
    description:
      "Browse through available government services and choose the one you need.",
  },
  {
    icon: <FaUpload />,
    title: "Upload Documents",
    description:
      "Submit the required documents through our secure online platform.",
  },
  {
    icon: <FaSearch />,
    title: "Track Progress",
    description:
      "Monitor the status of your application in real time from your dashboard.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Receive the Service",
    description:
      "Get your certificate, approval, or service digitally without unnecessary delays.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[#C97B63] font-semibold uppercase tracking-widest">
            Simple Process
          </span>

          <h2 className="text-4xl font-bold text-[#3E2723] mt-3">
            How LokSetu Works
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-4 leading-7">
            Access government services in just a few simple steps. No long
            queues, no paperwork hassles—everything is managed online.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#7C3A2D] text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-[#F7C873] text-[#7C3A2D] flex items-center justify-center text-3xl mt-6 mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#3E2723] mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#7C3A2D] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5A281E] transition">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
