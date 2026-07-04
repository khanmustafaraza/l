import React from "react";
import { FaUsers, FaGlobe, FaShieldAlt, FaLightbulb } from "react-icons/fa";
import MainLayout from "../../layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <section className="bg-[#FFF8F0] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#C97B63] font-semibold tracking-widest uppercase">
              About Us
            </span>

            <h1 className="text-5xl font-bold text-[#3E2723] mt-3">
              Empowering Citizens Through Digital Services
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto mt-5 leading-8">
              LokSetu is a digital platform designed to bridge the gap between
              citizens and government services. Our mission is to simplify
              access, improve transparency, and make public services faster and
              more efficient for everyone.
            </p>
          </div>

          {/* Mission / Vision */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-[#3E2723] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-7">
                To provide a unified digital platform where citizens can easily
                access government services without paperwork delays or physical
                visits, ensuring transparency and efficiency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-[#3E2723] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-7">
                To build a fully digital India where every citizen can access
                essential services online in a secure, fast, and user-friendly
                environment.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition">
              <FaUsers className="text-4xl text-[#7C3A2D] mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Citizen First</h3>
              <p className="text-gray-600 text-sm">
                Designed to simplify services for every citizen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition">
              <FaGlobe className="text-4xl text-[#7C3A2D] mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Digital Access</h3>
              <p className="text-gray-600 text-sm">
                Services accessible anytime, anywhere.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition">
              <FaShieldAlt className="text-4xl text-[#7C3A2D] mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Secure Platform</h3>
              <p className="text-gray-600 text-sm">
                Your data is protected with strong security.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition">
              <FaLightbulb className="text-4xl text-[#7C3A2D] mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Continuously improving digital services.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 text-center bg-[#7C3A2D] text-white rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              Building a Smarter Digital India
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto leading-7">
              LokSetu is committed to transforming how citizens interact with
              government services by making them faster, simpler, and more
              accessible.
            </p>

            <button className="mt-6 bg-[#F7C873] text-[#7C3A2D] px-8 py-3 rounded-xl font-semibold hover:bg-white transition">
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
