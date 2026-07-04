import React from "react";
import { FaArrowRight, FaUsers, FaFileAlt, FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#FFF8F0] to-[#F9E6D3] min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-[#F7C873] text-[#5B3A29] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🇮🇳 Digital Government Platform
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-[#3E2723] leading-tight">
            Your Gateway to
            <span className="text-[#C97B63]"> Digital Public </span>
            Services
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            LokSetu connects citizens with essential government services through
            a secure, transparent, and user-friendly platform. Apply, track, and
            manage services from one place.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-[#7C3A2D] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#5B2A20] transition flex items-center gap-2">
              Explore Services
              <FaArrowRight />
            </button>

            <button className="border-2 border-[#7C3A2D] text-[#7C3A2D] px-7 py-3 rounded-xl font-semibold hover:bg-[#7C3A2D] hover:text-white transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-[#7C3A2D]">100+</h2>
              <p className="text-gray-600">Government Services</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#7C3A2D]">50K+</h2>
              <p className="text-gray-600">Citizens Served</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#7C3A2D]">24/7</h2>
              <p className="text-gray-600">Online Support</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
            <div className="bg-[#F7C873] rounded-2xl p-6 text-center">
              <h2 className="text-2xl font-bold text-[#3E2723] mb-2">
                LokSetu Dashboard
              </h2>
              <p className="text-[#5B3A29]">
                Access all your public services in one place.
              </p>
            </div>

            <div className="space-y-5 mt-8">
              <div className="flex items-center gap-4 bg-[#FFF8F0] p-4 rounded-xl">
                <FaUsers className="text-2xl text-[#C97B63]" />
                <div>
                  <h3 className="font-semibold text-[#3E2723]">
                    Citizen Services
                  </h3>
                  <p className="text-sm text-gray-600">
                    Easy access to government schemes.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#FFF8F0] p-4 rounded-xl">
                <FaFileAlt className="text-2xl text-[#C97B63]" />
                <div>
                  <h3 className="font-semibold text-[#3E2723]">
                    Online Applications
                  </h3>
                  <p className="text-sm text-gray-600">
                    Submit and track applications instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#FFF8F0] p-4 rounded-xl">
                <FaShieldAlt className="text-2xl text-[#C97B63]" />
                <div>
                  <h3 className="font-semibold text-[#3E2723]">
                    Secure Platform
                  </h3>
                  <p className="text-sm text-gray-600">
                    Safe and transparent digital services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
