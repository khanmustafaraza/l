import React from "react";
import { FaEnvelope, FaLock, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import MainLayout from "../../layouts/MainLayout";

const Login = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
          {/* Left Section */}
          <div className="bg-[#7C3A2D] text-white p-12 flex flex-col justify-center">
            <div className="w-16 h-16 rounded-2xl bg-[#F7C873] text-[#7C3A2D] flex items-center justify-center text-2xl font-bold mb-6">
              LS
            </div>

            <h1 className="text-4xl font-bold mb-6">
              Welcome Back to <br />
              <span className="text-[#F7C873]">LokSetu</span>
            </h1>

            <p className="text-gray-200 leading-8 mb-8">
              Sign in to access government services, track your applications,
              and manage your digital documents securely from one place.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-[#F7C873] text-[#7C3A2D] p-3 rounded-lg">
                  <FaShieldAlt />
                </div>

                <div>
                  <h3 className="font-semibold">Secure Login</h3>
                  <p className="text-sm text-gray-300">
                    Your information is protected with advanced security.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#F7C873] text-[#7C3A2D] p-3 rounded-lg">
                  <FaArrowRight />
                </div>

                <div>
                  <h3 className="font-semibold">Quick Access</h3>
                  <p className="text-sm text-gray-300">
                    Access all public services from a single dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-10 lg:p-14">
            <h2 className="text-3xl font-bold text-[#3E2723] mb-2">Login</h2>

            <p className="text-gray-500 mb-8">
              Enter your credentials to continue.
            </p>

            <form className="space-y-6">
              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-[#7C3A2D]">
                  <FaEnvelope className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Password
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-[#7C3A2D]">
                  <FaLock className="text-gray-400 mr-3" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Remember */}
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <a
                  href="/forgot-password"
                  className="text-[#7C3A2D] hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#7C3A2D] text-white py-3 rounded-xl font-semibold hover:bg-[#5A281E] transition"
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-4 text-gray-400 text-sm">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Google Login */}
              <button
                type="button"
                className="w-full border py-3 rounded-xl hover:bg-gray-100 transition font-medium"
              >
                Continue with Google
              </button>

              {/* Register */}
              <p className="text-center text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-[#7C3A2D] font-semibold hover:underline"
                >
                  Create Account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
