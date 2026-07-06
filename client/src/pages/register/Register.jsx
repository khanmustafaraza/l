import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";
import MainLayout from "../../layouts/MainLayout";
import useAuth from "../../store/context/auth.context";
import Loader from "../../components/common/Loader";
import Sidebar from "../../components/user/Sidebar";

const Register = () => {
  const { state, handleRegister, handleRegisterSubmit } = useAuth();

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
              Create Your <br />
              <span className="text-[#F7C873]">LokSetu Account</span>
            </h1>

            <p className="text-gray-200 leading-8 mb-8">
              Join LokSetu to access government services, track applications,
              and manage your digital documents in one place.
            </p>

            <div className="flex items-center gap-3 text-sm text-gray-200">
              <FaArrowRight className="text-[#F7C873]" />
              Fast and easy registration
            </div>
          </div>

          {/* Right Section */}
          <div className="p-10 lg:p-14">
            {state.loading && <Loader />}
            <h2 className="text-3xl font-bold text-[#3E2723] mb-2">Register</h2>

            <p className="text-gray-500 mb-8">
              Fill in your details to create an account.
            </p>

            <form
              className="space-y-5"
              onSubmit={(e) => handleRegisterSubmit(e)}
            >
              {/* Full Name */}
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-[#7C3A2D]">
                <FaUser className="text-gray-400 mr-3" />
                <input
                  name="name"
                  type="text"
                  value={state.register.name}
                  onChange={(e) => handleRegister(e)}
                  placeholder="Full Name"
                  className="w-full outline-none"
                />
                {/* <span>e.g</span> */}
              </div>

              {/* Email */}
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-[#7C3A2D]">
                <FaEnvelope className="text-gray-400 mr-3" />
                <input
                  name="email"
                  value={state.register.email}
                  onChange={(e) => handleRegister(e)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full outline-none"
                />
              </div>

              {/* Password */}
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-[#7C3A2D]">
                <FaLock className="text-gray-400 mr-3" />
                <input
                  name="password"
                  value={state.register.password}
                  onChange={(e) => handleRegister(e)}
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none"
                />
              </div>

              {/* Terms */}
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" />I agree to the Terms & Conditions
              </label>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#7C3A2D] text-white py-3 rounded-xl font-semibold hover:bg-[#5A281E] transition"
              >
                Create Account
              </button>

              {/* Login link */}
              <p className="text-center text-gray-600">
                Already have an account?
                <a
                  href="/login"
                  className="text-[#7C3A2D] font-semibold hover:underline"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Sidebar />
    </MainLayout>
  );
};

export default Register;
