import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import MainLayout from "../../layouts/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[#FFF8F0] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-[#C97B63] font-semibold uppercase tracking-widest">
              Contact Us
            </span>

            <h1 className="text-5xl font-bold text-[#3E2723] mt-3">
              We'd Love to Hear From You
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-8">
              Have questions about government services or need assistance? Our
              team is here to help you. Reach out to us anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div>
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-md">
                  <div className="w-14 h-14 rounded-xl bg-[#F7C873] flex items-center justify-center text-[#7C3A2D] text-xl">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#3E2723]">
                      Phone
                    </h3>

                    <p className="text-gray-600 mt-2">+91 98765 43210</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-md">
                  <div className="w-14 h-14 rounded-xl bg-[#F7C873] flex items-center justify-center text-[#7C3A2D] text-xl">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#3E2723]">
                      Email
                    </h3>

                    <p className="text-gray-600 mt-2">support@loksetu.in</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-md">
                  <div className="w-14 h-14 rounded-xl bg-[#F7C873] flex items-center justify-center text-[#7C3A2D] text-xl">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#3E2723]">
                      Office
                    </h3>

                    <p className="text-gray-600 mt-2">
                      LokSetu Digital Service Center
                      <br />
                      New Delhi, India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-md">
                  <div className="w-14 h-14 rounded-xl bg-[#F7C873] flex items-center justify-center text-[#7C3A2D] text-xl">
                    <FaClock />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#3E2723]">
                      Office Hours
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-[#3E2723] mb-8">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#7C3A2D]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#7C3A2D]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Subject</label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#7C3A2D]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Message</label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-[#7C3A2D]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7C3A2D] text-white py-3 rounded-xl font-semibold hover:bg-[#5A281E] transition flex justify-center items-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-20">
            <div className="bg-white rounded-3xl shadow-lg p-4">
              <div className="h-[350px] rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
                Google Map will be embedded here
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
